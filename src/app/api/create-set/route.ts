import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const newSet = await prisma.set.create({
    data: {},
  });
  const newSetId = newSet.id;

  return NextResponse.json(
    { newSetId: newSet.id },
    {
      status: 200,
    },
  );
}
