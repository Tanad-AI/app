/*
  Warnings:

  - You are about to drop the column `placeholder` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `questionTypeId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `QuestionSet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuestionType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MCQs', 'trueOrFalse', 'fillInTheBlank');

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_questionTypeId_fkey";

-- DropForeignKey
ALTER TABLE "QuestionType" DROP CONSTRAINT "QuestionType_questionSetId_fkey";

-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "explanation" TEXT;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "placeholder",
DROP COLUMN "questionTypeId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "explanation" TEXT,
ADD COLUMN     "image" TEXT[],
ADD COLUMN     "type" "QuestionType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "QuestionSet";

-- DropTable
DROP TABLE "QuestionType";

-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL,
    "title" TEXT DEFAULT 'Untitled document',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_QuestionToSet" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_QuestionToSet_AB_unique" ON "_QuestionToSet"("A", "B");

-- CreateIndex
CREATE INDEX "_QuestionToSet_B_index" ON "_QuestionToSet"("B");

-- AddForeignKey
ALTER TABLE "_QuestionToSet" ADD CONSTRAINT "_QuestionToSet_A_fkey" FOREIGN KEY ("A") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToSet" ADD CONSTRAINT "_QuestionToSet_B_fkey" FOREIGN KEY ("B") REFERENCES "Set"("id") ON DELETE CASCADE ON UPDATE CASCADE;
