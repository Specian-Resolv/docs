import React, { useState } from "react";
import tw from "twin.macro";
import { Emotion } from "../types";
import { Banner } from "./Banner";

export const Feedback: React.FC<{ topic: string }> = ({ topic }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const EMOTIONS: Emotion[] = ["sad", "neutral", "happy", "love"];

  const [success, setSuccess] = useState(false);

  const sendFeedback = async event => {
    event.preventDefault();

    await fetch("/api/feedback", {
      body: JSON.stringify({
        topic,
        feedback,
        sentiment: selectedEmotion,
      }),
      method: "POST",
    });

    setSuccess(true);
  };

  const EmotionItem = ({ emotion }: { emotion: Emotion }) => {
    const isSelected = selectedEmotion === emotion;
    const handleClick = () => {
      setSelectedEmotion(emotion);
    };

    return (
      <img
        css={[
          tw`cursor-pointer filter transform transition duration-150 hover:grayscale-0 hover:scale-150`,
          !isSelected && tw`grayscale`,
        ]}
        src={`/assets/emotions/${emotion}.svg`}
        width={20}
        height={20}
        onClick={handleClick}
        alt={`${emotion}`}
      />
    );
  };

  if (success) {
    return (
      <Banner tw="mt-32" variant="info">
        Thank you for your feedback!
      </Banner>
    );
  }

  return (
    <div tw="flex flex-col items-center w-full px-8 py-12 space-y-4 shadow-sm rounded-lg border border-[0.5px] border-gray-200">
      <p tw="text-lg font-bold">Was this helpful ?</p>
      <div tw="flex flex-row space-x-4">
        {EMOTIONS.map((emotion: Emotion) => (
          <EmotionItem key={emotion} emotion={emotion} />
        ))}
      </div>
      {selectedEmotion && (
        <>
          <textarea
            value={feedback}
            tw="w-full p-4 border rounded-lg focus:outline-none focus:border-[#805AD5]"
            placeholder="Your feedback..."
            onChange={e => setFeedback(e.target.value)}
          />
          <input
            value={email}
            tw="w-full p-4 border rounded-lg focus:outline-none focus:border-[#805AD5]"
            type="email"
            placeholder="Email (optional)"
            onChange={e => setEmail(e.target.value)}
          />
          <p tw="text-left ">
            I consent to having this website store my submitted information so
            that the support team can respond to my message. For more
            information, see our{" "}
            <a
              href="#"
              tw="font-bold transition-all duration-200 ease-in-out hover:text-[#805AD5]"
            >
              Privacy Policy
            </a>
            .
          </p>
          <button
            tw="self-start px-4 py-2 text-white transition-all duration-200 ease-in-out bg-[#805AD5] rounded-lg hover:bg-[#9F7AEA]"
            onClick={sendFeedback}
          >
            Send
          </button>
        </>
      )}
    </div>
  );
};
