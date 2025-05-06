import prisma from "../../../db";
import { NextRequest } from "next/server";
import { Field, DetailItem } from "../../types/report.typs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fields, documentId, userId } = body;
    const document = await prisma.document.create({
      data: {
        id: documentId,
        name: "how",
        userId: userId,
        fields: {
          create: fields.map((field: Field) => ({
            id: field.id,
            name: field.name,
            title: field.title,
            details: {
              create: field.details.map((detail: DetailItem) => ({
                id: detail.id,
                detailName: detail.detailName,
                title: detail.title,
                value: detail.value,
                placeholder: detail.placeholder,
                isTextArea: detail.isTextArea,
              })),
            },
          })),
        },
      },
    });
    return Response.json({
      message: "Data received successfully",
    });
  } catch (error) {
    return Response.json({ error: error }, { status: 400 });
  }
}
