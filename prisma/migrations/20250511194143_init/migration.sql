/*
  Warnings:

  - Made the column `userId` on table `Document` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TextDirection" AS ENUM ('rtl', 'ltr');

-- DropIndex
DROP INDEX "Document_userId_name_key";

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "MainImgsNumber" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "letterHead" TEXT,
ADD COLUMN     "textDirection" "TextDirection" NOT NULL DEFAULT 'rtl',
ADD COLUMN     "xPadding" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "yPadding" INTEGER NOT NULL DEFAULT 10,
ALTER COLUMN "userId" SET NOT NULL;
