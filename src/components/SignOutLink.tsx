"use client";

import { logout } from "@/app/[local]/lib/auth";
import { handleLogout } from "@/lib/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

export default function SignOutLink({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return <a onClick={() => handleLogout(router)}>{children}</a>;
}
