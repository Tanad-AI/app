import prisma from "@/app/[local]/db";
import { NextRequest, NextResponse } from "next/server";

interface FormData {
  data: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  const create = await prisma.questionSet.create({
    data: {
      title: "from the api",
    },
  });
  return Response.json(
    { massage: "John Doe" },
    {
      status: 200,
    },
  );
}
