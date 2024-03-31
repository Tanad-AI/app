import React, { useState, useEffect } from "react";
import "./stepper.css";
import { StepperProps } from "../types/stepper.types";
import { Text } from "../lib/TextComponents";

const Stepper = (props: StepperProps) => {
  const {
    children = [],
    showProgressBar = true,
    defaultActiveStep = 1,
    backBtn,
    continueBtn,
    submitBtn,
    onContinue = () => {},
    onPrev = () => {},
    onSubmit = () => {},
    btnPos = "space-between",
    barWidth = "",
    strokeColor = "#cdd3d8",
    fillStroke = "#ea580c",
    stroke = 2,
    activeColor = "#ea580c",
    activeProgressBorder = "2px solid #ea580c",
    progressBarClassName = "",
    contentBoxClassName = "",
    allowClickControl = true,
  } = props;

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (
      defaultActiveStep <= (children as React.ReactElement[]).length &&
      defaultActiveStep > 0
    ) {
      progress(defaultActiveStep - 1);
      setActive(defaultActiveStep);
    } else {
      progress(0);
      setActive(1);
    }
  }, []);

  useEffect(() => {
    if ((children as React.ReactElement[]).length > 1 && showProgressBar) {
      //Progress Circle Border & Background Color
      (children as React.ReactElement[]).map((_child, ind) => {
        const element = document.getElementById(
          `input_${ind}`
        ) as HTMLInputElement;
        if (element.classList.length > 1) {
          element.style.background = activeColor;
          element.style.border = activeProgressBorder;
        } else {
          element.style.background = "#fff";
          element.style.border = "2px solid #3A4047";
        }
      });
    }
  }, [active]);

  const previousStep = () => {
    if (!active || active <= 1) {
      return;
    }
    progress(active - 2);
    const newActive = active - 1;
    setActive(newActive);
    onPrev(newActive);
  };

  const nextStep = () => {
    if (!active || active >= (children as React.ReactElement[]).length) {
      return;
    }
    progress(active);
    const newActive = active + 1;
    setActive(newActive);
    onContinue(newActive);
  };

  const progressClick = (ind: number) => {
    if (!allowClickControl) return;
    setActive(ind + 1);
    progress(ind);
  };

  const progress = (stepNum: number) => {
    if ((children as React.ReactElement[]).length > 1 && showProgressBar) {
      let p = (stepNum / ((children as React.ReactElement[]).length - 1)) * 100;
      (
        document.getElementsByClassName("percent")[0] as HTMLElement
      ).style.width = `${p}%`;
    }

    if ((children as React.ReactElement[]).length > 1 && showProgressBar) {
      for (
        let index = 0;
        index < (children as React.ReactElement[]).length;
        index++
      ) {
        const e = document.getElementById(`input_${index}`)!;
        const eInd = parseInt(e?.id?.split("_")[1]);
        if (eInd === stepNum) {
          e.classList.add("selected");
          e.classList.remove("completed");
        }
        if (eInd <= stepNum) {
          e.classList.add("completed");
        }
        if (eInd > stepNum) {
          e.classList.remove("selected", "completed");
        }
      }
    }
  };

  return (
    <div className={"stepperDiv"}>
      {(children as React.ReactElement[]).length > 1 && showProgressBar && (
        <div className={`${"progressBarDiv"} ${progressBarClassName}`}>
          <div className={"progressBarContainer"} style={{ width: barWidth }}>
            <div
              className={"progress"}
              style={{ borderBottom: `${stroke}px solid ${strokeColor}` }}
            >
              <div
                className={"percent"}
                style={{ borderBottom: `${stroke}px solid ${fillStroke}` }}
              ></div>
            </div>
            <div className={"steps"}>
              {(children as React.ReactElement[]).map((_child, ind) => {
                return (
                  <div
                    key={ind}
                    className={
                      "size-8 rounded-full text-white border-2  text-center flex items-center justify-center"
                    }
                    id={`input_${ind}`}
                    onClick={() => progressClick(ind)}
                  >
                    <Text>{ind}</Text>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className={contentBoxClassName}>
        {(children as React.ReactElement[]).length > 1
          ? (children as React.ReactElement[]).map((child, index) => {
              return active === index + 1 && child;
            })
          : children}

        <div
          style={{
            display: "flex",
            justifyContent: btnPos,
            marginTop: "20px",
          }}
        >
          {active > 1 ? (
            backBtn ? (
              <span onClick={previousStep} style={{ marginRight: "20px" }}>
                {backBtn}
              </span>
            ) : (
              <button
                className={"defaultBtn"}
                onClick={previousStep}
                style={{ marginRight: "20px" }}
              >
                Go Back
              </button>
            )
          ) : (
            <span></span>
          )}
          {active < (children as React.ReactElement[]).length ? (
            continueBtn ? (
              <span onClick={() => nextStep()}>{continueBtn}</span>
            ) : (
              <button className={"defaultBtn"} onClick={() => nextStep()}>
                Continue
              </button>
            )
          ) : submitBtn ? (
            <span onClick={() => onSubmit(active)}>{submitBtn}</span>
          ) : (
            <button className={"defaultBtn"} onClick={() => onSubmit(active)}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
