"use client";
import { Button } from "@nextui-org/react";
import handleDocumentDownload from "@/app/[local]/lib/handleDocumentDownload";
import { FileDown } from "lucide-react";
import { useQuizStore } from "@/app/[local]/store/QuizState";

function DownloadButton({ disabled }: { disabled: boolean }) {
  const documentName = useQuizStore((state: any) => state.documentName);

  return (
    <Button
      size="sm"
      color="primary"
      startContent={<FileDown size={16} />}
      isDisabled={!disabled}
      onClick={() => handleDocumentDownload(documentName)}
    >
      Download
    </Button>
  );
}

export default DownloadButton;
