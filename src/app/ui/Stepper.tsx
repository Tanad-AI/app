import React, { useState, useEffect } from "react";
import "./stepper.css";
import { StepperProps } from "../types/stepper.types";
import { Text } from "../lib/TextComponents";
import { Check } from "lucide-react";
import { Button } from "@nextui-org/react";

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
    strokeColor = "#FDEFE7",
    fillStroke = "#3a4047",
    stroke = 2,
    activeColor = "#3A4047",
    activeProgressBorder = "2px solid #f3f4f5",
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
          element.style.color = "#fff";
        } else {
          element.style.background = "#FDEFE7";
          element.style.border = "2px solid #ea580c";
          element.style.color = "#ea580c";
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
                style={{ borderBottom: `3px solid ${fillStroke}` }}
              ></div>
            </div>
            <div className={"steps"}>
              {(children as React.ReactElement[]).map((_child, ind) => {
                return (
                  <div
                    key={ind}
                    className={"step"}
                    id={`input_${ind}`}
                    onClick={() => progressClick(ind)}
                  >
                    <p className="font-bold">{ind + 1}</p>
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
              <div onClick={() => nextStep()}>{continueBtn}</div>
            ) : (
              <Button
                className="bg-orange-600 text-white"
                size="sm"
                variant="shadow"
                onClick={() => nextStep()}
              >
                next
              </Button>
            )
          ) : submitBtn ? (
            <span onClick={() => onSubmit(active)}>{submitBtn}</span>
          ) : (
            <Button
              className="bg-orange-600 text-white"
              size="sm"
              variant="shadow"
              onClick={() => onSubmit(active)}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
