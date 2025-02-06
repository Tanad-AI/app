"use client";
import { TinyText } from "@/app/[local]/lib/TextComponents";
import { TanadLogo } from "@/assets";
import Link from "next/link";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import UserAvatar from "@/components/UserAvatar";
import downloadComponentAsPDF from "@/components/exportDocument";
import useReportStore from "../../store/reportStore";
import { Button } from "@nextui-org/react";

const DashboardNav = () => {
  const pathName = usePathname();
  const t = useTranslations("Create");
  const homeT = useTranslations("Home");
  let locale = pathName.slice(1, 3);
  const params = useParams();
  const setId = params.set;
  const componentRef = useReportStore((state) => state.componentRef);
  return (
    <nav className="flex items-center justify-between">
      <Link href={`/${locale}/dashboard`}>
        <div className="flex items-center gap-2">
          <TanadLogo />
          <TinyText>{homeT("tanad")}</TinyText>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Button color="primary" onClick={() => downloadComponentAsPDF()}>
          Download PDF
        </Button>
        <UserAvatar />
      </div>
    </nav>
  );
};

export default DashboardNav;
