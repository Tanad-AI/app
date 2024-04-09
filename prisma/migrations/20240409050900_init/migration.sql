/*
  Warnings:

  - You are about to drop the column `headerId` on the `Exam` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Header_atrribute` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Header` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Header_atrribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Header_atrribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeholder` to the `Header_atrribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `required` to the `Header_atrribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Header_atrribute` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "HEADER_INPUT_TYPE" AS ENUM ('text', 'number', 'file');

-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_headerId_fkey";

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "headerId",
ALTER COLUMN "header_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Header" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Header_atrribute" ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "placeholder" TEXT NOT NULL,
ADD COLUMN     "required" BOOLEAN NOT NULL,
ADD COLUMN     "type" "HEADER_INPUT_TYPE" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Header_atrribute_name_key" ON "Header_atrribute"("name");

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_header_id_fkey" FOREIGN KEY ("header_id") REFERENCES "Header"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
