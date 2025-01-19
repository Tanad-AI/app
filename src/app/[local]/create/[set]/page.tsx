/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Control from "../ui/Control";
import A4page from "../ui/A4page";
import Sidebar from "../ui/Sidebar";

const page = () => {
  const [activeControlView, setActiveControlView] = useState<number>(0);
  const [activeSection, setActiveSection] = useState(1);
  const pathname = usePathname();
  let locale = pathname.slice(1, 3);
  if (locale !== "ar" && locale !== "en") {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  const params = useParams();
  const setId = params.set as string;

  return (
    <div className=" relative flex h-[100svh]  w-full justify-between gap-3 overflow-y-hidden pb-5">
      <Sidebar className={activeSection == 0 ? "md:block" : ""} />
      <Control
        className={activeSection == 1 ? "md:block lg:w-[50%]" : ""}
        activeControlView={activeControlView}
      />
      <A4page className={activeSection == 2 ? "md:block" : ""} />
    </div>
  );
};

export default page;
