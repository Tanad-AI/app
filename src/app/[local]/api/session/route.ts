// app/api/session/route.ts

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = req.headers.get("authorization")?.split("Bearer")[1]?.trim();
  if (!token) return new Response("Unauthorized", { status: 401 });

  // Set expiration (e.g., 1 hour = 3600 seconds)
  cookies().set("__session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 3600, // or `expires: new Date(Date.now() + 3600 * 1000)`
  });

  return new Response("OK");
}

export async function DELETE() {
  cookies().delete("__session");
  return NextResponse.json({ message: "Signed out" });
}
