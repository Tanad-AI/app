import jsPDF from "jspdf";
import domtoimage from "dom-to-image";

const compressImage = (imgData: string, quality = 1) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imgData;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width / 2; // Reduce resolution
      canvas.height = img.height / 2;
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      resolve(canvas.toDataURL("image/jpeg", quality)); // Further compression
    };
  });
};

const downloadPDF = async (fileName = "document.pdf") => {
  const elements = document.querySelectorAll(".print-page");
  if (!elements.length) return console.error("No elements found");
  document.querySelectorAll(".print-page").forEach((page) => {
    if (page.querySelector(".images")) {
      const element = page as HTMLElement; // Cast to HTMLElement
      element.style.display = "flex";
      element.style.flexDirection = "column";
      element.style.justifyContent = "start";
    }
  });

  const pdf = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  for (let i = 0; i < elements.length; i++) {
    try {
      const scale = 6; // Reduce scale to control file size
      const element = elements[i];

      let imgData = await domtoimage.toJpeg(element, {
        quality: 1, // Adjust JPEG quality
        width: element.scrollWidth * scale,
        height: element.scrollHeight * scale,
        useCORS: true, // Enables cross-origin image captures
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top right", // Adjust origin if needed
          backgroundSize: `${element.scrollWidth}px ${element.scrollHeight}px`, // Scale background image manually
          backgroundPosition: "right top",
        },
      });

      imgData = await compressImage(imgData, 1); // Further compression

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (element.scrollHeight * imgWidth) / element.scrollWidth;
      if (i > 0) pdf.addPage();
      pdf.addImage(
        imgData,
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight,
        undefined,
        "FAST",
      ); // Use fast compression
    } catch (error) {
      console.error(`Error rendering page ${i + 1}:`, error);
    }
  }

  pdf.save(fileName);
};

export default downloadPDF;
