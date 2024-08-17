/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Sidebar from "./ui/Sidebar";
import Control from "./ui/Control";
import A4page from "./ui/A4page";
import { FileIcon, Menu, Pen, Settings2, X } from "lucide-react";
import { Dock, DockIcon } from "@/components/Dock";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useExamHeaderStore } from "../store/HeaderStore";

const page = () => {
  const [activeControlView, setActiveControlView] = useState<number>(0);
  const [activeSection, setActiveSection] = useState(1);
  const [toggleDock, setToggleDock] = useState(true);
  const pathname = usePathname();
  let locale = pathname.slice(1, 3);
  if (locale !== "ar" && locale !== "en") {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  const setPageLanguage = useExamHeaderStore((state) => state.setPageLanguage);
  setPageLanguage(locale);

  return (
    <div className=" relative flex h-[100svh]  w-full justify-between gap-3 overflow-y-hidden pb-5">
      <div className="absolute bottom-20 end-0 z-50  items-center md:hidden">
        {toggleDock ? (
          <Dock className="flex h-fit flex-col bg-white" direction="top">
            <DockIcon
              clickFunction={() => setToggleDock(false)}
              className={"text-red-400 transition-colors hover:bg-red-100 "}
              size={14}
              magnification={50}
              distance={10}
            >
              <X size={16} />
            </DockIcon>
            <DockIcon
              clickFunction={() => setActiveControlView(1)}
              className={`${
                activeSection == 0
                  ? "bg-green-50 text-primary hover:bg-green-100"
                  : "hover:bg-slate-100"
              } transition-colors `}
              size={14}
              magnification={50}
              distance={10}
            >
              Questions
            </DockIcon>
            <DockIcon
              clickFunction={() => setActiveSection(0)}
              className={`${
                activeSection == 0
                  ? "bg-green-50 text-primary hover:bg-green-100"
                  : "hover:bg-slate-100"
              } transition-colors `}
              size={14}
              magnification={50}
              distance={10}
            >
              <Settings2 size={16} />
            </DockIcon>
            <DockIcon
              clickFunction={() => setActiveSection(1)}
              className={`${
                activeSection == 1
                  ? "bg-green-50 text-primary hover:bg-green-100"
                  : "hover:bg-slate-100"
              } transition-colors `}
              size={14}
              magnification={50}
              distance={10}
            >
              <Pen size={16} />
            </DockIcon>
            <DockIcon
              clickFunction={() => setActiveSection(2)}
              className={`${
                activeSection == 2
                  ? "bg-green-50 text-primary hover:bg-green-100"
                  : "hover:bg-slate-100"
              } transition-colors `}
              size={14}
              magnification={50}
              distance={10}
            >
              <FileIcon size={16} />
            </DockIcon>
          </Dock>
        ) : (
          <>
            <Button
              onPress={() => setToggleDock(!toggleDock)}
              isIconOnly
              variant="flat"
              className="border-[1px] border-gray-200 bg-white text-gray-600 shadow-md"
            >
              <Menu size={16} />
            </Button>
          </>
        )}
      </div>

      <Sidebar
        activeControlView={activeControlView}
        setActiveControlView={setActiveControlView}
        className={activeSection == 0 ? "md:block" : ""}
      />
      <Control
        className={activeSection == 1 ? "md:block" : ""}
        activeControlView={activeControlView}
      />
      <A4page className={activeSection == 2 ? "md:block" : ""} />
    </div>
  );
};

export default page;
