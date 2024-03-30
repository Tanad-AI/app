"use client";

import React from "react";
import { Card } from "@nextui-org/react";
import { SubHeader } from "@/app/lib/TextComponents";
import { ClipboardList, FileDown, PencilRuler } from "lucide-react";

function sidebar() {
  return (
    <>
      <Card className="h-full min-w-32 ">
        <ul className="text-center capitalize  flex flex-col items-center justify-around h-full">
          <li>logo</li>
          <li className="cursor-pointer flex flex-col items-center justify-center">
            <ClipboardList size={32} />
            <SubHeader>content</SubHeader>
          </li>
          <li className="cursor-pointer flex flex-col items-center justify-center">
            <PencilRuler size={32} />
            <SubHeader>style</SubHeader>
          </li>
          <li className="cursor-pointer flex flex-col items-center justify-center">
            <FileDown size={32} />
            <SubHeader>download</SubHeader>
          </li>
        </ul>
      </Card>
    </>
  );
}

export default sidebar;
