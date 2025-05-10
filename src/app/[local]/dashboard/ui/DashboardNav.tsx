"use client";
import { useTranslations } from "next-intl";
import { Text } from "../../lib/TextComponents";
import CustomSignUpButton from "@/components/CustomSignUpButton";
import { TanadLogo } from "@/assets";

function DashboardNav({}) {
  const t = useTranslations("dashboard");

  return (
    <section className="flex w-full  items-center justify-between border-b-[1px] border-b-slate-300 bg-white px-6 py-3 ">
      <div className="flex items-center gap-2">
        <TanadLogo />
        <Text>{t("tanad")}</Text>
      </div>
      <CustomSignUpButton />
    </section>
  );
}
export default DashboardNav;
