import DashboardSideBar from "@/components/DashboardSideBar";
import { ReactNode } from "react";

interface DashboardPageProps {
  children: ReactNode;
  params: { id: string }; // Define the expected params
}
export default async function DashboardLayout({
  children,
  params,
}: DashboardPageProps) {
  return (
    <div className="flex">
      <DashboardSideBar />
      {children}
    </div>
  );
}
