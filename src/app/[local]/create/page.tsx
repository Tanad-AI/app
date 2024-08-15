/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Sidebar from "./ui/Sidebar";
import Control from "./ui/Control";
import A4page from "./ui/A4page";
import { FileIcon, Pen, Settings2 } from "lucide-react";
import { Dock, DockIcon } from "@/components/Dock";

const page = () => {
  const [activeControlView, setActiveControlView] = useState<number>(0);
  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className=" relative flex h-[100svh] w-full justify-between gap-3 overflow-y-hidden pb-5">
      <div className="absolute -end-1 bottom-14 z-50  items-center md:hidden">
        <Dock className="flex h-fit flex-col bg-white" direction="top">
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
      </div>

      <Sidebar
        activeControlView={activeControlView}
        setActiveControlView={setActiveControlView}
      />
      <Control activeControlView={activeControlView} />
      <A4page />
    </div>
  );
};

export default page;
