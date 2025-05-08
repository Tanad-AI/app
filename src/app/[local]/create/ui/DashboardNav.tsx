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
import useCustomizeStore from "../../store/pageCustomizationStore";
import { Document } from "@prisma/client";

const DashboardNav = ({ document }: { document: any }) => {
  const t = useTranslations("Create");
  const homeT = useTranslations("Home");
  const params = useParams();
  const { set } = params;
  const { fields } = document;

  const {
    setDocumentName,
    setYPadding,
    setXPadding,
    setMainImgsNumber,
    setTextDirection,
  } = useCustomizeStore();

  const setFields = useReportStore((state) => state.setFields);
  const setActiveField = useReportStore((state) => state.setActiveField);
  const activeField = useReportStore((state) => state.activeField);
  useEffect(() => {
    setActiveField(fields[0]);
    setFields(fields as Field[]);
    setDocumentName(document.name);
    setYPadding(document.yPadding);
    setXPadding(document.xPadding);
    setMainImgsNumber(document.MainImgsNumber);
    setTextDirection(document.textDirection);
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
        <CustomSignUpButton />
      </div>
    </nav>
  );
};

export default DashboardNav;
