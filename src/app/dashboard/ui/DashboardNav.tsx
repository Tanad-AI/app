"use client";
import { TinyText } from "@/app/lib/TextComponents";
import { TanadLogo } from "@/assets";
import Link from "next/link";
import React from "react";

import PreviewModalButton from "@/app/ui/PreviewModalButton";

const DashboardNav = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2">
          <TanadLogo />
          <TinyText>Tanad AI</TinyText>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <PreviewModalButton />
      </div>
    </nav>
  );
};

export default DashboardNav;
