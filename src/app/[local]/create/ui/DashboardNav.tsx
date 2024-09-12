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
import UserAvatar from "@/components/UserAvatar";

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
        <UserAvatar />
      </div>
    </nav>
  );
};

export default DashboardNav;
