/* eslint-disable @next/next/no-img-element */
"use client";
import useReportStore from "@/app/[local]/store/reportStore";
import React, { useEffect, useState } from "react";

const PAGE_HEIGHT = 1120;

const A4Paper = () => {
  const fields = useReportStore((state) => state.fields);
  const [childrenCount, setChildrenCount] = useState(0); // State to track changes
  const reportImages = useReportStore((state) => state.reportImages);

  useEffect(() => {
    const parent = document.getElementById("perent");
    const printArea = document.getElementById("print-area");

    if (parent && printArea) {
      const maxWrapperHeight = PAGE_HEIGHT; // Fixed height
      let currentHeight = 0;

      printArea.innerHTML = ""; // Clear previous content
      let wrapper = document.createElement("div");
      wrapper.className = "print-page";

      const calculateHeight = (element: any) => {
        const style = window.getComputedStyle(element);
        const margin =
          parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        return element.offsetHeight + margin;
      };

      Array.from(parent.children).forEach((child) => {
        const clone = child.cloneNode(true);

        // Temporarily add clone to measure its height
        printArea.appendChild(clone);
        const childHeight = calculateHeight(clone);
        printArea.removeChild(clone);

        // Check if adding the current element exceeds maxWrapperHeight
        if (currentHeight + childHeight > maxWrapperHeight - 120 - 80) {
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
  }, [childrenCount, fields, reportImages]);
  // Observe changes in the parent element's children
  useEffect(() => {
    const parent = document.getElementById("perent");

    if (parent) {
      const observer = new MutationObserver(() => {
        setChildrenCount(parent.children.length);
      });

      observer.observe(parent, { childList: true });

      return () => observer.disconnect(); // Cleanup observer on unmount
    }
  }, []);

  return (
    <>
      <div
        id="perent"
        className={`__a4-page h-0 w-0 scroll-m-36 flex-col gap-5 bg-white opacity-0`}
      >
        {fields.map((field) => {
          if (field.name == "reportDetailsTable") {
            return (
              <div dir="rtl" className="mx-auto w-full max-w-4xl p-4">
                <div className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-gray-300 bg-gray-300">
                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    اسم المشروع
                  </div>
                  <div className="col-span-3 bg-white p-3">
                    {field.details[0].value}
                  </div>

                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    المالك / المدعي
                  </div>
                  <div className="col-span-3 bg-white p-3">
                    {field.details[1].value}
                  </div>

                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    موضوع التقرير
                  </div>
                  <div className="col-span-3 bg-white p-3">
                    {field.details[2].value}
                  </div>

                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    المدينة
                  </div>
                  <div className="col-span-1 bg-white p-3">
                    {" "}
                    {field.details[3].value}
                  </div>
                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    الموقع
                  </div>
                  <div className="col-span-1 bg-white p-3">
                    {" "}
                    {field.details[6].value}
                  </div>

                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    رقم العقد
                  </div>
                  <div className="col-span-1 bg-white p-3">
                    {" "}
                    {field.details[4].value}
                  </div>
                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    تاريخ العقد
                  </div>
                  <div className="col-span-1 bg-white p-3">
                    {field.details[7].value}
                  </div>

                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    اليوم
                  </div>
                  <div className="col-span-1 bg-white p-3">
                    {" "}
                    {field.details[5].value}
                  </div>
                  <div className="col-span-1 bg-gray-100 p-3 font-medium">
                    التاريخ
                  </div>
                  <div className="col-span-1 bg-white p-3">
                    {field.details[8].value}
                  </div>
                </div>
              </div>
            );
          }

          if (field.name === "cover") {
            return (
              <div
                className="flex  flex-col items-center justify-center"
                style={{ height: PAGE_HEIGHT - 20 - 120 - 80 + "px" }}
              >
                {field.details.map((detail) => (
                  <div
                    className="mt-2 flex w-full justify-center"
                    key={detail.id}
                  >
                    <div className="flex min-h-[48px] w-56 items-center justify-center text-pretty rounded-lg bg-gradient-to-t from-gray-700 to-gray-500 text-center font-bold text-white underline underline-offset-[7px]">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>
            );
          }

          return field.details.map((detail) => {
            const paragraphs = detail.value
              .split("</p>")
              .filter(Boolean)
              .map((p) => p + "</p>");

            return (
              <React.Fragment key={detail.id}>
                {detail.isTextArea
                  ? paragraphs.map((p, index) => (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))
                  : detail.value}
              </React.Fragment>
            );
          });
        })}
        <div
          className="grid grid-cols-6 grid-rows-6 gap-4"
          style={{ height: PAGE_HEIGHT - 20 - 120 - 80 + "px" }}
        >
          {reportImages.map((img, i) => (
            <div key={i}>
              <img
                className="size-full object-cover"
                src={URL.createObjectURL(img)}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div id="print-area" style={{ margin: "0px" }}>
        {/* Content will be grouped and displayed here */}
      </div>
    </>
  );
};

export default A4Paper;
