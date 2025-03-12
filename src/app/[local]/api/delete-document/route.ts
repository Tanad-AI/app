import prisma from "../../../db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { id } = body;

  const deleteDocument = await prisma.document.delete({
    where: {
      id,
    },
  });
}
