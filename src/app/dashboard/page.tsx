/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Sidebar from "./ui/Sidebar";
import Control from "./ui/Control";
import A4page from "./ui/A4page";

const page = () => {
  const [activeControlView, setActiveControlView] = useState<number>(0);
  return (
    <div className=" flex h-[100svh] w-full gap-6 overflow-y-hidden ">
      <Sidebar
        activeControlView={activeControlView}
        setActiveControlView={setActiveControlView}
      />
      <Control
        activeControlView={activeControlView}
        setActiveControlView={setActiveControlView}
      />
      <A4page />
    </div>
  );
};

export default page;
