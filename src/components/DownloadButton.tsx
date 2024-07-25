import { Button } from "@nextui-org/react";
import handleDocumentDownload from "@/app/lib/handleDocumentDownload";
import { FileDown } from "lucide-react";

function DownloadButton({ disabled }: { disabled: boolean }) {
  return (
    <Button
      size="sm"
      color="primary"
      startContent={<FileDown size={16} />}
      disabled={!disabled}
      isDisabled={!disabled}
      onClick={handleDocumentDownload}
    >
      Download
    </Button>
  );
}

export default DownloadButton;
