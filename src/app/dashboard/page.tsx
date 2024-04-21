/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Sidebar from "./ui/Sidebar";
import Control from "./ui/Control";
import A4page from "./ui/A4page";

const page = () => {
  const [activeControl, setActiveControl] = useState<number>(0);
  return (
    <div className=" flex h-[100svh] w-full gap-6 overflow-y-hidden ">
      <Sidebar
        activeControl={activeControl}
        setActiveControl={setActiveControl}
      />
      <Control
        activeControl={activeControl}
        setActiveControl={setActiveControl}
      />
      <A4page />
    </div>
  );
};

export default page;
