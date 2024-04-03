import React from "react";
import Stepper from "./Stepper";
import { Button } from "@nextui-org/react";
import { LucideArrowRight } from "lucide-react";

const StepperWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stepper
      strokeColor="#ffcfb3"
      fillStroke="#ea580c"
      activeColor="#ea580c"
      activeProgressBorder="2px solid #ea580c"
      submitBtn={
        <button className="stepperBtn  bg-orange-600 text-white w-16  h-8 rounded-small active:scale-[0.97] active:bg-orange-600/95 text-[12px]">
          Submit
        </button>
      }
      continueBtn={
        <button className="stepperBtn  bg-orange-600 text-white w-16  h-8 rounded-small active:scale-[0.97] active:bg-orange-600/95 text-[12px]">
          Next
        </button>
      }
      backBtn={
        <button className="stepperBtn  border-1 border-foreground/70 text-forground w-16  h-8 rounded-small active:scale-[0.97] text-[12px]">
          <Button onClick={() => console.log("clicked")}>back</Button>
        </button>
      }
      onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
      progressBarClassName="text-white"
      contentBoxClassName="__fill-height flex flex-col justify-between"
    >
      {children}
    </Stepper>
  );
};

export default StepperWrapper;
