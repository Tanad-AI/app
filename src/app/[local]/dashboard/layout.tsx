import { TanadLogo } from "@/assets";
import { Home } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex">
      <div className="flex h-svh w-[22%] flex-col gap-16  border-e-[1px] border-slate-300 bg-white px-6 py-3">
        <div className="flex items-center gap-1">
          <TanadLogo /> Tanad AI
        </div>
        <div>
          <ul>
            <li className="flex items-center gap-2 rounded-sm bg-primary-800/10 px-3 py-1 font-medium  text-primary">
              <Home size={16} />
              Home
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      {children}
    </div>
  );
}
