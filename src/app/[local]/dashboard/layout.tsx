import { ReactNode } from "react";
import DashboardNav from "./ui/DashboardNav";
import { cookies } from "next/headers";
import { logout } from "../lib/auth";
import ForceRefresh from "@/components/ForceRefresh";

interface DashboardPageProps {
  children: ReactNode;
  params: { id: string }; // Define the expected params
}
export default function DashboardLayout({
  children,
  params,
}: DashboardPageProps) {
  return (
    <div className="flex h-svh">
      <div className="w-full overflow-scroll">
        <DashboardNav />
        {children}
      </div>
    </div>
  );
}
