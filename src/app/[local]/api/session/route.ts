// app/api/session/route.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = req.headers.get("authorization")?.split("Bearer ")[1];
  if (!token) return new Response("Unauthorized", { status: 401 });

  // Store token in secure HTTP-only cookie
  cookies().set("__session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return new Response("OK");
}

export async function DELETE() {
  // Clear the cookie
  cookies().delete("__session");
  return NextResponse.json({ message: "Signed out" });
}
