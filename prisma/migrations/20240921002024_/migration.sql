/*
  Warnings:

  - You are about to drop the column `added` on the `QuestionSet` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `QuestionSet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuestionSet" DROP COLUMN "added",
DROP COLUMN "name",
ALTER COLUMN "title" SET DEFAULT 'Untitled document';
