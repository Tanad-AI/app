/*
  Warnings:

  - You are about to drop the column `content` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `correctOption` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `examId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `options` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `worksheetId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `Exam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Header` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Header_atrribute` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Worksheet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HeaderToHeader_atrribute` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answer` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeholder` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionSetId` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionText` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_header_id_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_examId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_worksheetId_fkey";

-- DropForeignKey
ALTER TABLE "Worksheet" DROP CONSTRAINT "Worksheet_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Worksheet" DROP CONSTRAINT "Worksheet_headerId_fkey";

-- DropForeignKey
ALTER TABLE "_HeaderToHeader_atrribute" DROP CONSTRAINT "_HeaderToHeader_atrribute_A_fkey";

-- DropForeignKey
ALTER TABLE "_HeaderToHeader_atrribute" DROP CONSTRAINT "_HeaderToHeader_atrribute_B_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "content",
DROP COLUMN "correctOption",
DROP COLUMN "examId",
DROP COLUMN "options",
DROP COLUMN "worksheetId",
ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "placeholder" TEXT NOT NULL,
ADD COLUMN     "questionSetId" TEXT NOT NULL,
ADD COLUMN     "questionText" TEXT NOT NULL;

-- DropTable
DROP TABLE "Exam";

-- DropTable
DROP TABLE "Header";

-- DropTable
DROP TABLE "Header_atrribute";

-- DropTable
DROP TABLE "Worksheet";

-- DropTable
DROP TABLE "_HeaderToHeader_atrribute";

-- DropEnum
DROP TYPE "HEADER_INPUT_TYPE";

-- CreateTable
CREATE TABLE "QuestionSet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "added" BOOLEAN NOT NULL,

    CONSTRAINT "QuestionSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" TEXT NOT NULL,
    "choiceText" TEXT NOT NULL,
    "isTrue" BOOLEAN NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_questionSetId_fkey" FOREIGN KEY ("questionSetId") REFERENCES "QuestionSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
