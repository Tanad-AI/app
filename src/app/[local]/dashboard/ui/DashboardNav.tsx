"use client";

import UserAvatar from "@/components/UserAvatar";
import { MenuIcon } from "lucide-react";
import { useDashboardState } from "../../store/DashboardStore";
import { Button } from "@nextui-org/react";

function DashboardNav({}) {
  const isSidebarOpen = useDashboardState((state) => state.isSidebarOpen);
  const setIsSidebarOpen = useDashboardState((state) => state.setIsSidebarOpen);

  return (
    <section className="flex w-full items-center justify-between bg-white px-6 py-3 md:hidden">
      <Button
        isIconOnly
        onClick={setIsSidebarOpen}
        size="sm"
        variant="light"
        color="primary"
        radius="full"
      >
        <MenuIcon className="stroke-primary" strokeWidth={1.5} size={20} />
      </Button>
      <UserAvatar />
    </section>
  );
}
export default DashboardNav;
