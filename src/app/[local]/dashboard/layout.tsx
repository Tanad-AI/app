import { TanadLogo } from "@/assets";
import { Building, Coins, FileBox, Home, LayoutTemplate } from "lucide-react";
import { Text, TinyText } from "../lib/TextComponents";
import { Button, Divider } from "@nextui-org/react";
import { getTranslations } from "next-intl/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations("dashboard");
  return (
    <div className="flex">
      <div className="hidden h-svh  w-72 flex-col  justify-between gap-16 border-e-[1px] border-slate-300 bg-white px-6 py-5 lg:flex">
        <div className="flex items-center gap-1">
          <TanadLogo />
          <Text>{t("tanad")}</Text>
        </div>
        <div>
          <ul className="space-y-2">
            <TinyText className="font-normal text-gray-500">
              {t("create")}
            </TinyText>
            <li className="flex cursor-pointer items-center gap-2 rounded-md  px-1 py-1 text-sm font-medium text-gray-800  transition-all hover:bg-primary-800/10">
              <Home size={14} />
              {t("home")}
            </li>
            <li className="flex cursor-pointer  items-center gap-2  rounded-md  px-1 py-1 text-sm font-normal text-gray-500  transition-all hover:bg-primary-800/10">
              <FileBox color="gray" size={14} />
              {t("documents")}
            </li>
            <li className="flex cursor-pointer items-center  gap-2  rounded-md  px-1 py-1 text-sm font-normal text-gray-500  transition-all hover:bg-primary-800/10">
              <Building color="gray" size={14} />
              {t("questionBank")}
            </li>
            <li className="flex cursor-pointer  items-center gap-2  rounded-md  px-1 py-1 text-sm font-normal text-gray-500  transition-all hover:bg-primary-800/10">
              <LayoutTemplate color="gray" size={14} />
              {t("templates")}
            </li>
          </ul>
        </div>
        <Divider />
        <div />
        <div>
          <Button variant="bordered" className="border-[1px] shadow-md">
            <Coins size={14} className="stroke-primary" />
            {t("upgradeToPremium")}
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
}
