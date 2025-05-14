import { logout } from "@/app/[local]/lib/auth";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchWithAutoLogout = async (
  input: RequestInfo,
  init?: RequestInit,
) => {
  const res = await fetch(input, init);

  if (res.status === 401) {
    await logout(); // sign out silently
    return null;
  }

  return res;
};
