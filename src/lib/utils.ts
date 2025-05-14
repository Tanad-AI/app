import { logout } from "@/app/[local]/lib/auth";
import clsx, { ClassValue } from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleLogout = async (router?: AppRouterInstance) => {
  await logout();
  router && router.refresh();
};
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
