/*
  Warnings:

  - The values [null] on the enum `Emotion` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Emotion_new" AS ENUM ('sad', 'neutral', 'happy', 'love');
ALTER TABLE "Feedback" ALTER COLUMN "sentiment" TYPE "Emotion_new" USING ("sentiment"::text::"Emotion_new");
ALTER TYPE "Emotion" RENAME TO "Emotion_old";
ALTER TYPE "Emotion_new" RENAME TO "Emotion";
DROP TYPE "Emotion_old";
COMMIT;
