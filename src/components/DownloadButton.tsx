import React, { useEffect } from "react";
import htmlToImage, { toJpeg, toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { useQuizStore } from "@/app/store/QuizState";

function DownloadButton() {
  const a4Page = useQuizStore((state: any) => state.a4Page);

  const contentRef = a4Page.current;

  const handleDownload = async () => {
    const pages = document.querySelectorAll<HTMLElement>(".pagedjs_sheet");
    const preview = document.querySelectorAll<HTMLElement>(".pagedjs_pages");
    if (pages) {
      const pdf = new jsPDF();

      for (let i = 0; i < pages.length; i++) {
        pages[i].style.border = "none";
        const page = pages[i];
        const imgData = await toJpeg(page, {
          quality: 1,
        });
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      }

      pdf.save("download.pdf");
    }
  };

  return <div onClick={handleDownload}>DownloadButton</div>;
}

export default DownloadButton;
