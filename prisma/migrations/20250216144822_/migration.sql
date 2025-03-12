-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isMultipleLines" BOOLEAN,
    "documentId" TEXT NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailItem" (
    "id" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "detailName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "placeholder" TEXT,
    "isTextArea" BOOLEAN,
    "content" TEXT,
    "images" TEXT[],

    CONSTRAINT "DetailItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Document_userId_name_key" ON "Document"("userId", "name");

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailItem" ADD CONSTRAINT "DetailItem_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;
