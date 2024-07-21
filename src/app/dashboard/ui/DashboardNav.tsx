"use client";
import { TinyText } from "@/app/lib/TextComponents";
import { useQuizStore } from "@/app/store/QuizState";
import { TanadLogo } from "@/assets";
import { Avatar, Button } from "@nextui-org/react";
import { FileDown } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";

const DashboardNav = () => {
  const a4Page = useQuizStore((state: any) => state.a4Page);
  const a4PageRef = useRef(a4Page);

  const handlePageDownload = () => {
    console.log(a4Page.current);
    const options = {
      scale: 5, // Adjust as needed, higher scale means higher resolution
      allowTaint: true, // Allow rendering images from other domains
    };

    const element = a4Page.current;

    if (!element) {
      console.error("Print element is null.");
      return;
    }

    htmlToImage.toJpeg(element).then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      const pdf = new jsPDF();
      pdf.addImage(dataUrl, "PNG", 0, 0, 208, 297);
      pdf.save("download.pdf");
    });
  };

  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2">
          <TanadLogo />
          <TinyText>Tanad AI</TinyText>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Button
          onClick={handlePageDownload}
          size="sm"
          color="primary"
          className="hidden md:flex"
        >
          <FileDown size={16} />
          Download
        </Button>
        <Button
          isIconOnly
          size="sm"
          color="primary"
          onClick={handlePageDownload}
          className=" justify-between md:hidden lg:hidden"
        >
          <FileDown className="mx-auto" size={16} />
        </Button>
        <Avatar size="sm" />
      </div>
    </nav>
  );
};

export default DashboardNav;
