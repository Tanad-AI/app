"use client";
import { TinyText } from "@/app/[local]/lib/TextComponents";
import { TanadLogo } from "@/assets";
import Link from "next/link";
import React from "react";
import PreviewModalButton from "@/app/[local]/ui/PreviewModalButton";
import {
  Avatar,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { useTranslations } from "next-intl";

const DashboardNav = () => {
  const pathName = usePathname();
  const t = useTranslations("Create");
  const homeT = useTranslations("Home");
  let locale = pathName.slice(1, 3);

  return (
    <nav className="flex items-center justify-between">
      <Link href={`/${locale}/dashboard`}>
        <div className="flex items-center gap-2">
          <TanadLogo />
          <TinyText>{homeT("tanad")}</TinyText>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <PreviewModalButton />
        <Popover placement="right">
          <PopoverTrigger>
            <Avatar size="sm" className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="space-y-2 p-2">
            <div className="space-y-1">
              <TinyText className="font-normal">{t("switchLanguage")}</TinyText>
              <LanguageSwitcher path={pathName} />
            </div>
            <Divider />
            <div className="flex w-full cursor-pointer items-center  justify-start gap-1  rounded-md p-1 font-normal transition-transform-colors-opacity hover:bg-slate-200">
              <LogOut size={12} color="grey" />
              <TinyText>{t("signOut")}</TinyText>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default DashboardNav;
