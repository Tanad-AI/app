import React from "react";
import Sidebar from "./ui/Sidebar";
import Control from "./ui/Control";
import A4page from "./ui/A4page";

const page = () => {
  return (
    <div className="flex h-[100svh] w-full gap-6 bg-rose-200 px-6 py-6">
      <Sidebar />
      <Control />
      <A4page />
    </div>
  );
};

export default page;
