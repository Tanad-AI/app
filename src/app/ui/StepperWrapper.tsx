import React from "react";
import Stepper from "./Stepper";

const StepperWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stepper
      strokeColor="#ffcfb3"
      fillStroke="#ea580c"
      activeColor="#ea580c"
      activeProgressBorder="2px solid #ea580c"
      submitBtn={<button className="stepperBtn">Submit</button>}
      continueBtn={<button className="stepperBtn">Next</button>}
      backBtn={<button className="stepperBtn">Back</button>}
      onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
      progressBarClassName="text-white"
    >
      {children}
    </Stepper>
  );
};

export default StepperWrapper;
