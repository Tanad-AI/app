import DashboardSideBar from "@/components/DashboardSideBar";
import { ReactNode } from "react";
import DashboardNav from "./ui/DashboardNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface DashboardPageProps {
  children: ReactNode;
  params: { id: string }; // Define the expected params
}
export default async function DashboardLayout({
  children,
  params,
}: DashboardPageProps) {
  const { getUser } = getKindeServerSession();
  const { isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="flex h-svh">
      <div>
        <DashboardSideBar />
      </div>
      <div className="w-full overflow-scroll">
        <DashboardNav user={user} isUserAuthenticated={isUserAuthenticated} />
        {children}
      </div>
    </div>
  );
}
