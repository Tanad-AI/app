import React from "react";
import Sidebar from "./ui/Sidebar";
import Control from "./ui/Control";
import A4page from "./ui/A4page";

const page = () => {
  return (
    <div className="w-full h-[100svh] flex gap-6 px-12 py-6 bg-slate-200">
      <Sidebar />
      <Control />
      <A4page />
    </div>
  );
};

export default page;
