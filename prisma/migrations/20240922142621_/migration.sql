/*
  Warnings:

  - Added the required column `last_edited` to the `QuestionSet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuestionSet" ADD COLUMN     "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_edited" TIMESTAMP(3) NOT NULL;
