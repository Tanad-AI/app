import { TinyText } from "@/app/lib/TextComponents";
import React from "react";

export default function Chip({}) {
  return (
    <div className="mb-4 flex w-fit cursor-pointer items-center gap-1 rounded-full border-[1px] border-primary/80 bg-primary/10 px-2 py-1 text-primary hover:bg-primary/15 hover:transition-opacity">
      <div className="text-sm font-medium">?</div>
      <div>
        <TinyText className="font-medium ">Add Question Marks</TinyText>
      </div>
    </div>
  );
}
