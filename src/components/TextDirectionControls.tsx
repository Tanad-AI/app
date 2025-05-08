import { useState } from "react";
import { ArrowRight, ArrowLeft, RotateCw } from "lucide-react";
import { Button } from "@nextui-org/react";
import { Paragraph, SubHeader } from "@/app/[local]/lib/TextComponents";

export default function TextDirectionSelector() {
  const [textDirection, setTextDirection] = useState("rtl");

  const toggleTextDirection = () => {
    setTextDirection((prev) => (prev === "ltr" ? "rtl" : "ltr"));
  };

  return (
    <div className=" rounded-lg border-[1px] border-gray-100 bg-white p-2 shadow-md">
      <SubHeader className="mb-2">Text Direction</SubHeader>
      <Paragraph className="mb-2">Current Direction: {textDirection}</Paragraph>

      <div className="flex justify-between">
        <Button
          isIconOnly
          onClick={() => setTextDirection("ltr")}
          className={`flex size-12 items-center justify-center rounded-md  text-black ${
            textDirection === "ltr"
              ? "bg-secondary  ring-2 ring-secondary-300"
              : "bg-gray-200 "
          }`}
          aria-label="Set LTR"
          aria-pressed={textDirection === "ltr"}
        >
          <ArrowRight size={14} />
        </Button>

        <Button
          isIconOnly
          onClick={() => setTextDirection("rtl")}
          className={`flex size-12 items-center justify-center rounded-md text-black ${
            textDirection === "rtl"
              ? "bg-secondary  ring-2 ring-secondary-300"
              : "bg-gray-200 "
          }`}
          aria-label="Set RTL"
          aria-pressed={textDirection === "rtl"}
        >
          <ArrowLeft size={14} />
        </Button>

        <Button
          color="primary"
          variant="flat"
          onClick={toggleTextDirection}
          className="flex items-center justify-center rounded-md px-2 text-xs "
          aria-label="Toggle direction"
        >
          <RotateCw size={12} className="mr-2" />
          Toggle
        </Button>
      </div>
    </div>
  );
}
