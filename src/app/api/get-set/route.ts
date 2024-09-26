import prisma from "@/app/db";
import { NextResponse } from "next/server";

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

export async function GET() {
  const questions = await getQuestions("cm1hy9hve00003decytmv1iyl");

  return NextResponse.json({ questions: questions });
}
