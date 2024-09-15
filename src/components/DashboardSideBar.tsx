"use client";
import { TanadLogo } from "@/assets";
import {
  ArrowRightToLine,
  Building,
  Coins,
  FileBox,
  Home,
  LayoutTemplate,
  X,
} from "lucide-react";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { createId } from "@paralleldrive/cuid2";
import { useTranslations } from "next-intl";
import { Text, TinyText } from "@/app/[local]/lib/TextComponents";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDashboardState } from "@/app/[local]/store/DashboardStore";

function DashboardSideBar() {
  const t = useTranslations("dashboard");
  const isSidebarOpen = useDashboardState((state) => state.isSidebarOpen);
  const setIsSidebarOpen = useDashboardState((state) => state.setIsSidebarOpen);

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
    <div className="flex w-full">
      <AnimatePresence>
        <motion.section
          key={+isSidebarOpen}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            type: "spring",
            duration: 0.4,
            bounce: 0.2,
          }}
          className={`${
            isSidebarOpen
              ? "absolute z-50 flex h-svh md:relative"
              : " hidden h-svh md:flex"
          } "h-svh md:flex" w-64 flex-col justify-between border-e-1 border-slate-300 bg-white px-6 py-5`}
        >
          <div className="flex items-center justify-between">
            <div className="flex w-fit items-center gap-2">
              <TanadLogo />
              <Text>{t("tanad")}</Text>
            </div>
            <Button
              isIconOnly
              onClick={setIsSidebarOpen}
              size="sm"
              variant="light"
              color="primary"
              radius="full"
            >
              <X size={18} className="stroke-primary md:hidden" />
            </Button>
          </div>
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
          <div />
          <div />
          <div className="mt-6">
            <Button
              variant="bordered"
              className="w-full border-[1px] shadow-md"
            >
              <Coins size={14} className="stroke-primary" />
              <span>{t("upgradeToPremium")}</span>
            </Button>
          </div>
        </motion.section>
      </AnimatePresence>
      {isSidebarOpen && (
        <AnimatePresence>
          <motion.section
            key={+isSidebarOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="absolute z-40 flex h-full w-full bg-black  md:hidden"
            onClick={setIsSidebarOpen}
          ></motion.section>
        </AnimatePresence>
      )}
    </div>
  );
}

export default DashboardSideBar;
