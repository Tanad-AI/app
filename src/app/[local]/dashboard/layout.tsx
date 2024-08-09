import { TanadLogo } from "@/assets";
import { Building, Coins, FileBox, Home, LayoutTemplate } from "lucide-react";
import { Text, TinyText } from "../lib/TextComponents";
import { Button, Divider } from "@nextui-org/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex">
      <div className="flex h-svh w-[22%] flex-col justify-between gap-16 border-e-[1px] border-slate-300 bg-white px-6 py-5">
        <div className="flex items-center gap-1">
          <TanadLogo />
          <Text>Tanad AI</Text>
        </div>
        <div>
          <ul className="space-y-2">
            <TinyText className="font-normal text-gray-500">Create</TinyText>
            <li className="flex cursor-pointer items-center gap-2 rounded-md  px-1 py-1 text-sm font-medium text-gray-800  transition-all hover:bg-primary-800/10">
              <Home size={14} />
              Home
            </li>
            <li className="flex cursor-pointer  items-center gap-2  rounded-md  px-1 py-1 text-sm font-normal text-gray-500  transition-all hover:bg-primary-800/10">
              <FileBox color="gray" size={14} />
              Documents
            </li>
            <li className="flex cursor-pointer items-center  gap-2  rounded-md  px-1 py-1 text-sm font-normal text-gray-500  transition-all hover:bg-primary-800/10">
              <Building color="gray" size={14} />
              Questsion bank
            </li>
            <li className="flex cursor-pointer  items-center gap-2  rounded-md  px-1 py-1 text-sm font-normal text-gray-500  transition-all hover:bg-primary-800/10">
              <LayoutTemplate color="gray" size={14} />
              Templates
            </li>
          </ul>
        </div>
        <Divider />
        <div />
        <div>
          <Button variant="bordered" className="border-[1px] shadow-md">
            <Coins size={14} className="stroke-primary" />
            Upgrade to Premium
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
}
