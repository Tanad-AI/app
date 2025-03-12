import prisma from "@/app/db";
import { NextRequest } from "next/server";

export default async function POST(request: NextRequest) {
  const body = await request.json();
  const { id } = body;

  const deleteDocument = await prisma.document.delete({
    where: {
      id,
    },
  });
}
