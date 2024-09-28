import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

async function getQuestions(setId: string) {
  const questions = await prisma.set.findUnique({
    where: { id: setId },
    include: {
      questions: {
        include: {
          choices: true,
        },
      },
    },
  });
  return questions;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const setId = url.searchParams.get("setId");

  const questions = await getQuestions(setId as string);

  return NextResponse.json({ questions: questions, setId: setId });
}
