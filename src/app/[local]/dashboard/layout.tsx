import DashboardSideBar from "@/components/DashboardSideBar";
import { ReactNode } from "react";
import DashboardNav from "./ui/DashboardNav";

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
      <div>
        <DashboardSideBar />
      </div>
      <div className="w-full  overflow-scroll">
        <DashboardNav />
        {children}
      </div>
    </div>
  );
}
