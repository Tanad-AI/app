export default function PrintPage() {
  const handleDownload = async (format: "pdf" | "word") => {
    // Get all elements with the class of "print-page"
    const printPages = document.querySelectorAll("#print-area");
    if (!printPages.length) {
      alert("No elements with the class 'print-page' found.");
      return;
    }

    // Combine the innerHTML of all .print-page elements
    const html = Array.from(printPages)
      .map((element) => element.outerHTML)
      .join("");

    const response = await fetch(`/api/export?format=${format}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ html }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `document.${format === "pdf" ? "pdf" : "doc"}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else {
      alert("Failed to generate document");
    }
  };

  return (
    <div>
      {/* Buttons to trigger download */}
      <button onClick={() => handleDownload("pdf")}>Download as PDF</button>
      <button onClick={() => handleDownload("word")}>Download as Word</button>
    </div>
  );
}
