"use client";

import UserAvatar from "@/components/UserAvatar";
import { MenuIcon } from "lucide-react";
import { useDashboardState } from "../../store/DashboardStore";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { SubHeader } from "../../lib/TextComponents";
import CustomSignUpButton from "@/components/CustomSignUpButton";
import { useAuth } from "../../context/AuthContext";

function DashboardNav({}) {
  const setIsSidebarOpen = useDashboardState((state) => state.setIsSidebarOpen);
  // const { isSignedIn, user, isLoaded } = useUser();
  const t = useTranslations("dashboard");
  const { user } = useAuth();

  return (
    <section className="flex w-full  items-center justify-between border-b-[1px] border-b-slate-300 bg-white px-6 py-3 ">
      <Button
        isIconOnly
        onClick={setIsSidebarOpen}
        size="sm"
        variant="light"
        color="primary"
        radius="full"
        className="flex items-center justify-center md:hidden"
      >
        <MenuIcon className="stroke-primary" strokeWidth={1.5} size={20} />
      </Button>
      <SubHeader>
        {t("helloUser")} {user ? user.displayName : ""}
      </SubHeader>
      <CustomSignUpButton />
    </section>
  );
}
export default DashboardNav;
