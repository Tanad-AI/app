import { TinyText } from "@/app/lib/TextComponents";
import { TanadLogo } from "@/assets";
import { Avatar, Button } from "@nextui-org/react";
import { DownloadIcon } from "lucide-react";
import React from "react";

const DashboardNav = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <TanadLogo />
        <TinyText>Tanad AI</TinyText>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" color="primary">
          <DownloadIcon size={16} />
          Download
        </Button>
        <Avatar size="sm" />
      </div>
    </nav>
  );
};

export default DashboardNav;
