/*
  Warnings:

  - You are about to drop the column `questionSetId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `date_added` on the `QuestionSet` table. All the data in the column will be lost.
  - You are about to drop the column `last_edited` on the `QuestionSet` table. All the data in the column will be lost.
  - Added the required column `questionTypeId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_questionSetId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "questionSetId",
ADD COLUMN     "questionTypeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "QuestionSet" DROP COLUMN "date_added",
DROP COLUMN "last_edited",
ADD COLUMN     "description" TEXT,
ALTER COLUMN "title" DROP DEFAULT;

-- CreateTable
CREATE TABLE "QuestionType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "added" BOOLEAN NOT NULL,
    "questionSetId" TEXT NOT NULL,

    CONSTRAINT "QuestionType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuestionType" ADD CONSTRAINT "QuestionType_questionSetId_fkey" FOREIGN KEY ("questionSetId") REFERENCES "QuestionSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_questionTypeId_fkey" FOREIGN KEY ("questionTypeId") REFERENCES "QuestionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
