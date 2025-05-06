// lib/getServerUser.ts
import { adminAuth } from "./firebase-admin";
import { cookies } from "next/headers";

export async function getServerUser() {
  const cookieStore = cookies();
  const session = cookieStore.get("__session");

  if (!session?.value) return null;

  try {
    const decodedToken = await adminAuth.verifyIdToken(session.value);
    return decodedToken; // contains email, uid, etc.
  } catch (err) {
    console.error("Invalid session token:", err);
    return null;
  }
}
