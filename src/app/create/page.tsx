"use client";
import React from "react";
import Stepper from "../ui/Stepper";

const page = () => {
  return (
    <section className="w-1/2 mx-auto">
      <Stepper
        // strokeColor="#FDEFE7"
        // fillStroke="#EA580C"
        // activeColor="#EA580C"
        // activeProgressBorder="2px solid #FDEFE7"
        submitBtn={<button className="stepperBtn">Submit</button>}
        continueBtn={<button className="stepperBtn">Next</button>}
        backBtn={<button className="stepperBtn">Back</button>}
        onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
      >
        <div>
          <h1>Welcome to Awesome React Stepper</h1>
        </div>
        <div>
          <h1>Add your content here!!!</h1>
        </div>
        <div>
          <h1>Thank you for using Awesome React Stepper</h1>
        </div>
      </Stepper>
    </section>
  );
};

export default page;
