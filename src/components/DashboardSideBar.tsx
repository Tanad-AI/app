"use client";
import { TanadLogo } from "@/assets";
import {
  Building,
  Coins,
  FileBox,
  Home,
  LayoutTemplate,
  X,
} from "lucide-react";
import { Button, Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Text, TinyText } from "@/app/[local]/lib/TextComponents";
import { motion, AnimatePresence } from "framer-motion";
import { useDashboardState } from "@/app/[local]/store/DashboardStore";
import { usePathname } from "next/navigation";
import Link from "next/link";

function DashboardSideBar() {
  const t = useTranslations("dashboard");
  const isSidebarOpen = useDashboardState((state) => state.isSidebarOpen);
  const setIsSidebarOpen = useDashboardState((state) => state.setIsSidebarOpen);
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentPath = segments[segments.length - 1];

  const SIDEBAR_ITEMS = [
    {
      title: t("home"),
      href: "home",
      icon: ({ className }: { className?: string }) => (
        <Home className={`${className}`} color="gray" size={14} />
      ),
    },
    {
      title: t("documents"),
      href: "documents",
      icon: ({ className }: { className?: string }) => (
        <FileBox className={`${className}`} color="gray" size={14} />
      ),
    },
    {
      title: t("questionBank"),
      href: "question-bank",
      icon: ({ className }: { className?: string }) => (
        <Building className={`${className}`} color="gray" size={14} />
      ),
    },
    {
      title: t("templates"),
      href: "templates",
      icon: ({ className }: { className?: string }) => (
        <LayoutTemplate className={`${className}`} color="gray" size={14} />
      ),
    },
  ];

  return (
    <div className="flex w-full">
      <AnimatePresence initial={false}>
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
              className="md:hidden"
            >
              <X size={18} className="stroke-primary " />
            </Button>
          </div>
          <ul className="mt-6 space-y-2">
            <TinyText className="font-normal text-gray-500">
              {t("create")}
            </TinyText>
            <div className="flex flex-col gap-2">
              {SIDEBAR_ITEMS.map((item) => (
                <Link
                  className="h-7"
                  key={item.title}
                  href={`dashboard/${item.href}`}
                >
                  <li
                    className={`${
                      item.href == currentPath
                        ? "bg-primary-100 stroke-primary font-medium text-primary"
                        : "font-normal text-gray-500"
                    } flex h-7 cursor-pointer items-center gap-2 rounded-md px-1 py-1 text-sm  hover:bg-primary-100/70`}
                  >
                    {
                      <item.icon
                        className={`${
                          item.href == currentPath ? " stroke-primary " : ""
                        }`}
                      />
                    }
                    <span>{item.title}</span>
                  </li>
                </Link>
              ))}
            </div>
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
