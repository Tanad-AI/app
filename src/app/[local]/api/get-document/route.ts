import prisma from "../../../db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const documentId = "dsf";
  const document = await prisma.document.findUnique({
    where: {
      id: documentId,
    },
  });
}
