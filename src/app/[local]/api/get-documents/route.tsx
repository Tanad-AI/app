import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return Response.json({ documents: [] }, { status: 400 });
    }

    const documents = await prisma.document.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc", // Show newest documents first
      },
    });

    return Response.json({ documents });
  } catch (error) {
    console.error("Error fetching documents:", error);
    return Response.json(
      { error: "Failed to fetch documents" },
      { status: 500 },
    );
  }
}
