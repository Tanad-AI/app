"use client";

import React from "react";

const DocumentSkeleton = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-8 gap-x-0 md:grid-cols-3 lg:grid-cols-4">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="cursor-not-allowed">
            <div className="flex h-[42.42vw] w-[30vw] animate-pulse flex-col items-center justify-center rounded-md border-[1px] border-slate-200 bg-slate-50 md:h-[21.21vw] md:w-[15vw]">
              <div className="h-6 w-6 rounded bg-slate-200"></div>
            </div>
            <div className="mt-2 h-4 w-16 animate-pulse rounded bg-slate-200"></div>
            <div className="mt-1 h-3 w-24 animate-pulse rounded bg-slate-100"></div>
          </div>
        ))}
    </div>
  );
};

export default DocumentSkeleton;
