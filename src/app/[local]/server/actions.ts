"use server";
import prisma from "../db";

interface FormData {
  data: string;
}

export async function createQuestionSet(formData: FormData) {
  const create = await prisma.questionSet.create({
    data: {
      title: "from new dashboard",
    },
  });
}
