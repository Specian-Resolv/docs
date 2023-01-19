/*
  Warnings:

  - Changed the type of `sentiment` on the `Feedback` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Emotion" AS ENUM ('null', 'sad', 'neutral', 'happy', 'love');

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "sentiment",
ADD COLUMN     "sentiment" "Emotion" NOT NULL;

-- DropEnum
DROP TYPE "Sentiment";
