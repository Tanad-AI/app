/* eslint-disable react-hooks/rules-of-hooks */
import { toJpeg } from "html-to-image";
import { jsPDF } from "jspdf";

const handleDocumentDownload = async (documetName: string) => {
  const pages = document.querySelectorAll<HTMLElement>(".pagedjs_sheet");

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

    pdf.save(`${documetName}`);
  }
};

export default handleDocumentDownload;
