import { Paragraph, SubHeader, Text } from "@/app/[local]/lib/TextComponents";
import useCustomizeStore from "@/app/[local]/store/pageCustomizationStore";
import { Button } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import React from "react";

const PaddingControls = () => {
  const {
    yPadding,
    xPadding,
    incrementYPadding,
    decrementYPadding,
    resetYPadding,
    incrementXPadding,
    decrementXPadding,
    resetXPadding,
  } = useCustomizeStore();

  return (
    <div className=" rounded-lg border-[1px] border-gray-100 bg-white p-2 shadow-md">
      <SubHeader className="mb-2 ">Padding Control</SubHeader>

      {/* Y Padding */}
      <div className="mb-6">
        <Paragraph className="text-xs">
          Top & Bottom Margin: {yPadding}px
        </Paragraph>
        <div className="mt-2 flex justify-between">
          <Button
            isIconOnly
            onClick={incrementYPadding}
            className={`flex size-12 items-center justify-center  rounded-md bg-secondary  text-black ring-2 ring-secondary-300 `}
            aria-label="Set LTR"
          >
            <Plus size={14} />
          </Button>
          <Button
            isIconOnly
            onClick={decrementYPadding}
            className={`flex size-12 items-center justify-center  rounded-md bg-secondary  text-black ring-2 ring-secondary-300 `}
            aria-label="Set LTR"
          >
            <Minus size={14} />
          </Button>

          <Button
            color="primary"
            variant="flat"
            onClick={resetYPadding}
            className="flex items-center justify-center rounded-md px-4 text-xs "
            aria-label="Toggle direction"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* X Padding */}
      <div>
        <Paragraph className="text-xs">
          Left & Right Margin: {xPadding}px
        </Paragraph>
        <div className="mt-2 flex justify-between">
          <Button
            isIconOnly
            onClick={incrementXPadding}
            className={`flex size-12 items-center justify-center  rounded-md bg-secondary  text-black ring-2 ring-secondary-300 `}
            aria-label="Set LTR"
          >
            <Plus size={14} />
          </Button>
          <Button
            isIconOnly
            onClick={decrementXPadding}
            className={`flex size-12 items-center justify-center  rounded-md bg-secondary  text-black ring-2 ring-secondary-300 `}
            aria-label="Set LTR"
          >
            <Minus size={14} />
          </Button>

          <Button
            color="primary"
            variant="flat"
            onClick={resetXPadding}
            className="flex items-center justify-center rounded-md px-4 text-xs "
            aria-label="Toggle direction"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaddingControls;
