import prisma from "@/app/db";
import { NextRequest } from "next/server";
import { Field } from "../../types/report.typs";

export default async function POST(request: NextRequest) {
  const body = await request.json();
  const { fields, documentId } = body;

  try {
    // Fetch all existing fields and details in one query
    const existingFields = await prisma.field.findMany({
      where: {
        documentId,
        name: { in: fields.map((field: Field) => field.name) },
      },
      include: { details: true },
    });

    // Create maps for fast lookup
    const fieldMap = new Map(
      existingFields.map((field) => [field.name, field]),
    );

    // Prepare bulk update payloads
    const fieldUpdates = [];
    const detailUpdates = [];

    for (const field of fields) {
      const existingField = fieldMap.get(field.name);
      if (!existingField) continue; // Skip if field doesn't exist

      fieldUpdates.push({
        where: { id: existingField.id },
        data: { title: field.title },
      });

      // Map details for fast lookup
      const detailMap = new Map(
        existingField.details.map((detail) => [detail.detailName, detail]),
      );

      for (const detail of field.details) {
        const existingDetail = detailMap.get(detail.detailName);
        if (!existingDetail) continue; // Skip if detail doesn't exist

        detailUpdates.push({
          where: { id: existingDetail.id },
          data: {
            title: detail.title,
            value: detail.value,
            placeholder: detail.placeholder,
            isTextArea: detail.isTextArea,
          },
        });
      }
    }

    // Bulk update fields and details using `updateMany`
    await prisma.$transaction([
      ...fieldUpdates.map((update) => prisma.field.update(update)),
      ...detailUpdates.map((update) => prisma.detailItem.update(update)),
    ]);

    return Response.json({
      message: "Existing fields and details updated successfully",
    });
  } catch (error) {
    console.error("Error updating document:", error);
    return Response.json({ error: error }, { status: 400 });
  }
}
