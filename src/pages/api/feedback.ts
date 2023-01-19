import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../clients/prisma";
import { Emotion } from "../../types";

export interface FeedbackBody {
  topic: string;
  sentiment: Emotion;
  feedback?: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const body: FeedbackBody = JSON.parse(req.body);
    const feedbackMessage =
      body.feedback?.trim() === "" ? null : body.feedback?.trim();

    // Save result in prisma
    await prisma.feedback.create({
      data: {
        sentiment: body.sentiment,
        topic: body.topic,
        message: feedbackMessage,
      },
    });

    // Only send Discord message if negative
    if (body.sentiment === "sad" || body.sentiment === "neutral") {
      const discordBody = {
        content: `**New Website Feedback**
      > **Topic**: ${body.topic}
      > **Emotion**: ${body.sentiment}
      > **Feedback**: ${
        feedbackMessage != null && feedbackMessage.length === 0
          ? "`N/A`"
          : feedbackMessage
      }`,
      };

      await fetch(`${process.env.DISCORD_WEBHOOK}`, {
        body: JSON.stringify(discordBody),
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
    }
  }

  res.status(200).json({ status: "Success" });
};
