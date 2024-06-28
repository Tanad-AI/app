import React from "react";

function Chip2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex w-fit items-center justify-center gap-3 rounded-full border-1.5 border-orange-500/40 bg-orange-500/5 px-2 py-[2px] text-xs font-normal text-orange-600 opacity-85 ">
      {children}
    </div>
  );
}

export default Chip2;
