"use server";
import prisma from "../../db";

interface FormData {
  data: string;
}

export async function createQuestionSet(formData: FormData) {
  const create = await prisma.set.create({
    data: {
      title: "from new dashboard",
    },
  });
}
