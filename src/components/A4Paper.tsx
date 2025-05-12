/* eslint-disable */
"use client";
import useCustomizeStore from "@/app/[local]/store/pageCustomizationStore";
import useReportStore from "@/app/[local]/store/reportStore";
import { createId } from "@paralleldrive/cuid2";
import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PAGE_HEIGHT = 785.75;

const A4Paper = () => {
  const fields = useReportStore((state) => state.fields);
  const [childrenCount, setChildrenCount] = useState(0); // State to track changes
  const reportImages = useReportStore((state) => state.reportImages);
  const textDirection = useCustomizeStore((state) => state.textDirection);
  const letterHead = useCustomizeStore((state) => state.letterHead);
  const yPadding = useCustomizeStore((state) => state.yPadding);
  const xPadding = useCustomizeStore((state) => state.xPadding);
  const ref = useRef<HTMLDivElement>(null);
  const setComponentRef = useReportStore((state) => state.setComponentRef);
  const { MainImgsNumber } = useCustomizeStore();

  useEffect(() => {
    setComponentRef(ref);
  }, [setComponentRef]);

  useEffect(() => {
    const parent = document.getElementById("perent");
    const printArea = document.getElementById("print-area");

    if (parent && printArea) {
      const maxWrapperHeight = PAGE_HEIGHT - yPadding; // Fixed height
      let currentHeight = 0;

      printArea.innerHTML = ""; // Clear previous content
      let wrapper = document.createElement("div");
      wrapper.className = "print-page";
      wrapper.style.paddingTop = yPadding.toString() + "px";
      wrapper.style.paddingBottom = yPadding.toString() + "px";
      wrapper.style.paddingInline = xPadding.toString() + "px";

      if (wrapper && letterHead) {
        wrapper.style.backgroundImage = `url(${letterHead})`;
      }
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
        if (currentHeight + childHeight > maxWrapperHeight) {
          // Append the completed wrapper to printArea
          printArea.appendChild(wrapper);

          // Start a new wrapper
          wrapper = document.createElement("div");
          wrapper.className = "print-page";
          currentHeight = 0;
          wrapper.style.paddingTop = yPadding.toString() + "px";
          wrapper.style.paddingBottom = yPadding.toString() + "px";
          wrapper.style.paddingInline = xPadding.toString() + "px";

          if (wrapper && letterHead) {
            wrapper.style.backgroundImage = `url(${letterHead})`;
          }
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
  }, [
    childrenCount,
    fields,
    reportImages,
    letterHead,
    yPadding,
    xPadding,
    MainImgsNumber,
  ]);
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

  const getPageImages = (images: string[], page: number) => {
    const defaultPerPage = 36;

    if (MainImgsNumber > 0) {
      if (page === 1) {
        return images.slice(0, MainImgsNumber);
      } else {
        const offset = MainImgsNumber + (page - 2) * defaultPerPage;
        return images.slice(offset, offset + defaultPerPage);
      }
    }

    return images.slice((page - 1) * defaultPerPage, page * defaultPerPage);
  };

  const reportImagesPagesCounter = (imagesLength: number): number => {
    const defaultPerPage = 36;

    if (MainImgsNumber > 0) {
      const remaining = imagesLength - MainImgsNumber;
      const remainingPages = Math.ceil(remaining / defaultPerPage);
      return 1 + remainingPages;
    }

    return Math.ceil(imagesLength / defaultPerPage);
  };

  const counter = reportImagesPagesCounter(reportImages.length);
  const groups = Array.from({ length: counter }, (_, index) => index + 1);

  // This part goes inside your JSX

  return (
    <>
      <div
        ref={ref}
        id="perent"
        className={`__a4-page h-0 w-0 scroll-m-36 flex-col gap-5 bg-white !text-[12px] opacity-0`}
      >
        {fields.map((field) => {
          if (field.name == "reportDetailsTable") {
            return (
              <div key={createId()} dir="rtl" className="mx-auto w-4/5 ">
                <div className="grid grid-cols-4 gap-px overflow-hidden border  border-gray-300 bg-gray-300 text-center">
                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    اسم المشروع
                  </div>
                  <div className="col-span-3 bg-white px-2 ">
                    {field.details[0].value}
                  </div>

                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    المالك / المدعي
                  </div>
                  <div className="col-span-3 bg-white px-2 ">
                    {field.details[1].value}
                  </div>

                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    موضوع التقرير
                  </div>
                  <div className="col-span-3 bg-white px-2 ">
                    {field.details[2].value}
                  </div>

                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    المدينة
                  </div>
                  <div className="col-span-1 bg-white px-2 ">
                    {" "}
                    {field.details[3].value}
                  </div>
                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    الموقع
                  </div>
                  <div className="col-span-1 bg-white px-2 ">
                    {" "}
                    {field.details[6].value}
                  </div>

                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    رقم العقد
                  </div>
                  <div className="col-span-1 bg-white px-2 ">
                    {" "}
                    {field.details[4].value}
                  </div>
                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    تاريخ العقد
                  </div>
                  <div className="col-span-1 bg-white px-2 ">
                    {field.details[7].value}
                  </div>

                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    اليوم
                  </div>
                  <div className="col-span-1 bg-white px-2 ">
                    {" "}
                    {field.details[5].value}
                  </div>
                  <div className="col-span-1 bg-gray-200 px-2 font-medium">
                    التاريخ
                  </div>
                  <div className="col-span-1 bg-white px-2 ">
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
                style={{ height: PAGE_HEIGHT - 20 - yPadding + "px" }}
              >
                {field.details.map((detail) => (
                  <div
                    className="mt-8 flex w-full justify-center  "
                    key={detail.id}
                  >
                    <div className="flex min-h-[48px] w-64 items-center justify-center text-pretty rounded-lg bg-gradient-to-t  from-sky-700 to-sky-500 text-center font-bold text-white underline underline-offset-[7px] shadow-lg">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          if (field.name == "companyName" || field.name == "regardsLine") {
            return (
              <div>
                {field.details.map((detail) => (
                  <div key={detail.id} className="text-center">
                    {detail.value}
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
        {groups.map((group) => {
          const pageImages = getPageImages(reportImages, group);
          const imageCount = pageImages.length;

          const calculateGridSize = () => {
            if (imageCount === 1) return { cols: 1, rows: 1 };
            if (imageCount === 2) return { cols: 1, rows: 2 };
            if (imageCount <= 4) return { cols: 2, rows: 2 };
            if (imageCount <= 6) return { cols: 3, rows: 2 };
            if (imageCount <= 9) return { cols: 3, rows: 3 };
            if (imageCount >= 36) return { cols: 6, rows: 6 };

            const cols = Math.ceil(Math.sqrt(imageCount));
            const rows = Math.ceil(imageCount / cols);
            return { cols, rows };
          };

          const { cols, rows } = calculateGridSize();

          return (
            <div
              key={createId()}
              className={`images grid h-full w-full gap-2`}
              style={{
                height: PAGE_HEIGHT - yPadding * 2 + "px",
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
              }}
            >
              {pageImages.map((img, i) => (
                <div key={i}>
                  <img className="size-full object-cover" src={img} alt="" />
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div
        id="print-area"
        dir={textDirection}
        className={`${inter.className} ${
          textDirection == "rtl" ? "origin-top-right" : "origin-top-left"
        } 
         flex scale-75 flex-col justify-center text-[12px] sm:w-[89vw] lg:w-auto lg:scale-100`}
        style={{ margin: "0px" }}
      >
        {/* Content will be grouped and displayed here */}
      </div>
    </>
  );
};

export default A4Paper;
