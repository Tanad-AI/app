"use client";
import { TinyText } from "@/app/[local]/lib/TextComponents";
import { TanadLogo } from "@/assets";
import Link from "next/link";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import downloadComponentAsPDF from "@/components/exportDocument";
import { Button } from "@nextui-org/react";
import CustomSignUpButton from "@/components/CustomSignUpButton";
import SaveChangesButton from "@/components/SaveChangesButton";
import useReportStore from "../../store/reportStore";
import { Field } from "../../types/report.typs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";

const DashboardNav = ({
  document,
  user,
  isUserAuthenticated,
}: {
  document: any;
  user: KindeUser<Record<string, any>> | null;
  isUserAuthenticated: boolean | null;
}) => {
  const t = useTranslations("Create");
  const homeT = useTranslations("Home");
  const params = useParams();
  const { set } = params;
  const { fields } = document;

  const setFields = useReportStore((state) => state.setFields);
  const setActiveField = useReportStore((state) => state.setActiveField);
  const activeField = useReportStore((state) => state.activeField);
  useEffect(() => {
    setActiveField(fields[0]);
    setFields(fields as Field[]);
  }, []);

  return (
    <nav className="flex items-center justify-between">
      <Link href={`/../dashboard/home`}>
        <div className="flex items-center gap-2">
          <TanadLogo />
          <TinyText>{homeT("tanad")}</TinyText>
        </div>
      </Link>
      <SaveChangesButton documentId={set as string} />
      <div className="flex items-center gap-2">
        <Button color="primary" onClick={() => downloadComponentAsPDF()}>
          Download PDF
        </Button>
        <CustomSignUpButton
          theme="light"
          user={user}
          isUserAuthenticated={isUserAuthenticated}
        />
      </div>
    </nav>
  );
};

export default DashboardNav;
