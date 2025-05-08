"use client";

import { logout } from "@/app/[local]/lib/auth";
import { useRouter } from "next/navigation";

export default function SignOutLink({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return <a onClick={handleLogout}>{children}</a>;
}
