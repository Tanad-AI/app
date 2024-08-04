import React from "react";
import Stepper from "./Stepper";
import { Button, Card } from "@nextui-org/react";
import { LucideArrowRight } from "lucide-react";

const StepperWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stepper
      strokeColor="#ffcfb3"
      fillStroke="#ea580c"
      activeColor="#ea580c"
      activeProgressBorder="2px solid #ea580c"
      backBtn={
        <button className="stepperBtn  border-1 border-foreground/70 text-forground w-16  h-8 rounded-small active:scale-[0.97] text-[12px]">
          back
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
