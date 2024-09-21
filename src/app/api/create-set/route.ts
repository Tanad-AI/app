import prisma from "@/app/[local]/db";
import { NextRequest, NextResponse } from "next/server";

interface FormData {
  data: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  const newSet = await prisma.questionSet.create({
    data: {
      title: "from the api",
    },
  });
  const newSetId = newSet.id;

  return Response.json(
    { newSetId: newSetId },
    {
      status: 200,
    },
  );
}
