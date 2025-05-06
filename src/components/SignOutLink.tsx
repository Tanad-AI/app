"use client";

import { logout } from "@/app/[local]/lib/auth";
import { useRouter } from "next/navigation";

export default function SignOutLink() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <a onClick={handleLogout} className="bg-gray-800 px-4 py-2 text-white">
      Logout
    </a>
  );
}
