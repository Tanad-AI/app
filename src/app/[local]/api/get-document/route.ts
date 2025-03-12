import prisma from "@/app/db";
import { NextRequest } from "next/server";

export default async function GET(req: NextRequest) {
  const documentId = "dsf";
  const document = await prisma.document.findUnique({
    where: {
      id: documentId,
    },
  });
}
