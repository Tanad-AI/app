/* eslint-disable @next/next/no-img-element */
"use client";
import useReportStore from "@/app/[local]/store/reportStore";
import React, { useEffect, useState } from "react";

const PAGE_HEIGHT = 930;

const ExamPaper = ({
  SectionQuestion,
  varient,
  ref,
}: {
  SectionQuestion: any;
  varient: "print" | "normal";
  ref?: any;
}) => {
  const fields = useReportStore((state) => state.fields);
  const [childrenCount, setChildrenCount] = useState(0); // State to track changes

  useEffect(() => {
    const parent = document.getElementById("perent");
    const printArea = document.getElementById("print-area");

    if (parent && printArea) {
      const maxWrapperHeight = PAGE_HEIGHT; // Adjust this to set the maximum height per wrapper
      let currentHeight = 0;
      printArea.innerHTML = ""; // Clear previous content
      let wrapper = document.createElement("div");
      wrapper.className = "print-page";

      Array.from(parent.children).forEach((child) => {
        const clone = child.cloneNode(true);

        // Temporarily add clone to measure its height
        printArea.appendChild(clone);
        const childHeight = clone.offsetHeight;
        printArea.removeChild(clone);

        // Check if adding the current element exceeds maxWrapperHeight
        if (currentHeight + childHeight > maxWrapperHeight) {
          // Append the completed wrapper to printArea
          printArea.appendChild(wrapper);

          // Start a new wrapper
          wrapper = document.createElement("div");
          wrapper.className = "print-page";
          currentHeight = 0;
        }

        // Add the cloned child to the wrapper and update the current height
        wrapper.appendChild(clone);
        currentHeight += childHeight;
      });

      // Append the last wrapper if it contains any children
      if (wrapper.children.length > 0) {
        printArea.appendChild(wrapper);
      }
    }
  }, [childrenCount, fields]); // Trigger the effect when childrenCount changes

  // Observe changes in the parent element's children
  useEffect(() => {
    const parent = document.getElementById("perent");

    if (parent) {
      const observer = new MutationObserver(() => {
        setChildrenCount(parent.children.length);
      });

      observer.observe(parent, { childList: true });

      // return () => observer.disconnect(); // Cleanup observer on unmount
    }
  }, []);

  console.log(fields);

  return (
    <>
      <div
        id="perent"
        className={`__a4-page h-0 w-0 scroll-m-36 flex-col gap-5 bg-white opacity-0`}
      >
        {fields.map((field) => (
          <div key={field.id} className={`mb-4 pb-2 ${field.name}`}>
            <h3 className="mb-2 text-lg font-bold">{field.title}</h3>
            <div className="space-y-2">
              {field.details.map((detail) => {
                if (field.name == "cover") {
                  return (
                    <div
                      className="flex w-full justify-center "
                      key={detail.id}
                    >
                      <div className="flex min-h-[48px] w-56 items-center justify-center text-pretty rounded-lg bg-gradient-to-t from-gray-700 to-gray-500 text-center font-bold text-white underline underline-offset-[7px]">
                        {detail.value}
                      </div>
                    </div>
                  );
                }
                {
                  if (field.name == "reportDetailsTable") return;
                }
                return (
                  <div key={detail.id} className="text-sm">
                    <strong>{detail.title}: </strong>
                    {detail.value || "No value provided"}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div id="print-area" className="">
        {/* Content will be grouped and displayed here */}
      </div>
    </>
  );
};

export default ExamPaper;
