/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Control from "../ui/Control";
import A4page from "../ui/A4page";
import Sidebar from "../ui/Sidebar";
import CreatePageDock from "@/components/CreatePageDock";
import { useCreatePageState } from "../../store/CreatePageStore";

const page = () => {
  const [activeControlView, setActiveControlView] = useState<number>(0);
  const { activeSection, setActiveSection } = useCreatePageState();

  const pathname = usePathname();
  let locale = pathname.slice(1, 3);

  const params = useParams();
  const setId = params.set as string;

  return (
    <div className=" relative flex h-[100svh]  w-full justify-between gap-3 overflow-y-hidden pb-5">
      <Sidebar
        className={activeSection == 0 ? "md:block" : "hidden lg:block"}
      />
      <Control
        className={
          activeSection == 1 ? " md:block lg:w-[50%]" : "hidden lg:block"
        }
        activeControlView={activeControlView}
      />
      <A4page
        className={`min-w-fit ${
          activeSection == 2 ? "md:block" : "hidden lg:block"
        }`}
      />
      <div className="absolute bottom-20 left-4 lg:hidden">
        <CreatePageDock
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
};

export default page;
