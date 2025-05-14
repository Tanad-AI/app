// components/ForceRefresh.tsx
"use client";
import { useAuth } from "@/app/[local]/context/AuthContext";
import { logout } from "@/app/[local]/lib/auth";
import { useRouter } from "next/navigation";

export default function ForceRefresh() {
  const { user } = useAuth();
  if (!user) {
    const router = useRouter();
    const handleLogout = async () => {
      await logout();
      router.refresh();
    };
    handleLogout();
    router.refresh();

    return null;
  }
}
