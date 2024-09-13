"use client";
import { TanadLogo } from "@/assets";
import {
  ArrowRightToLine,
  Building,
  Coins,
  FileBox,
  Home,
  LayoutTemplate,
} from "lucide-react";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { createId } from "@paralleldrive/cuid2";
import { useTranslations } from "next-intl";
import { Text, TinyText } from "@/app/[local]/lib/TextComponents";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DashboardSideBar() {
  const t = useTranslations("dashboard");
  const [isSidebarOpen, setIsSideBarOpen] = useState(false); // Initially hidden

  const SIDEBAR_ITEMS = [
    {
      title: t("home"),
      href: "/",
      icon: ({ className }: { className?: string }) => (
        <Home className={`${className}`} color="gray" size={14} />
      ),
    },
    {
      title: t("documents"),
      href: "/documents",
      icon: ({ className }: { className?: string }) => (
        <FileBox className={`${className}`} color="gray" size={14} />
      ),
    },
    {
      title: t("questionBank"),
      href: "/question-bank",
      icon: ({ className }: { className?: string }) => (
        <Building className={`${className}`} color="gray" size={14} />
      ),
    },
    {
      title: t("templates"),
      href: "/templates",
      icon: ({ className }: { className?: string }) => (
        <LayoutTemplate className={`${className}`} color="gray" size={14} />
      ),
    },
  ];

  return (
    <div className="relative flex">
      {/* Toggle Button */}
      <div
        onClick={() => setIsSideBarOpen(!isSidebarOpen)}
        className="absolute  top-[7.5rem] cursor-pointer"
      >
        <ArrowRightToLine strokeWidth={1} />
      </div>
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }} // Initially hidden (offscreen)
            animate={{ x: 0 }} // Slide in when open
            exit={{ x: "-100%" }} // Slide out when closed
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute z-10 h-svh w-64  bg-white px-6 py-5 shadow-md"
          >
            <div className="flex  items-center gap-2">
              <TanadLogo />
              <Text>{t("tanad")}</Text>
            </div>
            <div
              onClick={() => setIsSideBarOpen(!isSidebarOpen)}
              className="absolute -end-3  top-[7.5rem] cursor-pointer rounded-full bg-white"
            >
              <ArrowRightToLine strokeWidth={1} />
            </div>
            <Divider />
            <ul className="mt-6 space-y-2">
              <TinyText className="font-normal text-gray-500">
                {t("create")}
              </TinyText>
              {SIDEBAR_ITEMS.map((item) => (
                <Tooltip
                  content={item.title}
                  className="block md:hidden"
                  size="md"
                  placement="right"
                  key={createId()}
                >
                  <li className="flex h-7 cursor-pointer items-center gap-2 rounded-md px-1 py-1 text-sm font-medium text-gray-500 hover:bg-primary-800/10">
                    {<item.icon />}
                    <span>{item.title}</span>
                  </li>
                </Tooltip>
              ))}
            </ul>
            <Divider />
            <div className="mt-6">
              <Button
                variant="bordered"
                className="w-full border-[1px] shadow-md"
              >
                <Coins size={14} className="stroke-primary" />
                <span>{t("upgradeToPremium")}</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DashboardSideBar;
