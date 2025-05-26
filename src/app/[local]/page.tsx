/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { TanadLogo } from "@/assets";
import React from "react";
import { Paragraph, Text, TinyText } from "./lib/TextComponents";
import {
  Button,
  Card,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import {
  Zap,
  LayoutGrid,
  Stamp,
  CheckCircle,
  MonitorSmartphone,
  ArrowDownToLine,
  Check,
  ChevronRight,
  Sparkles,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import Chip2 from "@/components/Chip2";
import InViewAnimationBoundry from "@/components/InViewAnimationBoundry";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/GridPattern";
import WordRotate from "@/components/WordRotate";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function TryNowButton({
  type,
  theme,
  dir,
}: {
  type?: "primary";
  theme?: "dark" | "light";
  dir?: "ltr" | "rtl";
}) {
  const t = useTranslations("NavBar");
  const pathName = usePathname();
  const arrow = {
    initial: { x: 0 },
    animate: { x: dir == "ltr" ? 6 : -6 },
  };
  return (
    <>
      {type === "primary" ? (
        <Link href={`${pathName}/dashboard/home`}>
          <motion.button
            initial="initial"
            animate="initial"
            whileHover="animate"
            className={`flex w-44 items-center justify-center gap-2 rounded-md  ${
              theme == "light"
                ? "border-[1px] border-black/15 bg-white text-black"
                : "  border-black/15 bg-primary text-white "
            }`}
          >
            <div>{t("tryNow")}</div>
            <motion.div variants={arrow}>
              {dir == "ltr" ? (
                <ChevronRight color="white" size={16} />
              ) : (
                <ChevronLeft color="white" size={16} />
              )}
            </motion.div>
          </motion.button>
        </Link>
      ) : (
        <Link href={`${pathName}/dashboard/home`}>
          <Button
            className={`${
              theme == "light" ? "bg-white" : "bg-primary text-white"
            }`}
            radius="sm"
            size="md"
          >
            {t("tryNow")}
          </Button>
        </Link>
      )}
    </>
  );
}

function SignUpButton({ theme }: { theme?: "dark" | "light" }) {
  const t = useTranslations("NavBar");
  return (
    <Link href="/sign-up">
      <Button
        className={` ${
          theme == "dark"
            ? " border-3 border-black/15 bg-primary-900 text-white "
            : "border-[1px] border-black/15 bg-white text-black"
        }`}
        radius="sm"
      >
        {t("signUp")}
      </Button>
    </Link>
  );
}

function NavBar({ t }: { t: any }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar position="static" className="" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <TanadLogo />
            <div className="hidden md:block">
              <Text>{t("tanad")}</Text>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <SignUpButton />
      <TryNowButton />
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      ></NavbarContent>
    </Navbar>
  );
}

function page() {
  const t = useTranslations("Home");
  const pathName = usePathname();
  const dir = pathName.slice(1, 3) == "ar" ? "rtl" : "ltr";
  console.log(dir);
  const scrollAnimationVarients = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: -160,
      transition: {
        duration: 0.7,
        ease: [0.06, 0.61, 0.25, 0.99],
        delay: 0.5,
      },
    },
  };
  const rotatingWords = [
    t("heroRotatingWord1"),
    t("heroRotatingWord2"),
    t("heroRotatingWord3"),
    t("heroRotatingWord4"),
  ];

  const benefits = [t("heroBenefit1"), t("heroBenefit2"), t("heroBenefit3")];

  const features = [
    {
      title: t("feature1Title"),
      description: t("feature1Description"),
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      iconBg: "bg-blue-100",
    },
    {
      title: t("feature2Title"),
      description: t("feature2Description"),
      icon: <ArrowDownToLine className="h-6 w-6 text-indigo-600" />,
      iconBg: "bg-indigo-100",
    },
    {
      title: t("feature3Title"),
      description: t("feature3Description"),
      icon: <LayoutGrid className="h-6 w-6 text-pink-600" />,
      iconBg: "bg-pink-100",
    },
    {
      title: t("feature4Title"),
      description: t("feature4Description"),
      icon: <Stamp className="h-6 w-6 text-yellow-600" />,
      iconBg: "bg-yellow-100",
    },
    {
      title: t("feature5Title"),
      description: t("feature5Description"),
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      iconBg: "bg-green-100",
    },
    {
      title: t("feature6Title"),
      description: t("feature6Description"),
      icon: <MonitorSmartphone className="h-6 w-6 text-gray-600" />,
      iconBg: "bg-gray-100",
    },
  ];
  return (
    <>
      <main className="container relative z-0 mx-auto flex flex-col space-y-16   bg-background px-4 py-4 lg:px-20">
        <NavBar t={t} />
        {/* Hero Section */}
        <section className="relative flex h-svh flex-col gap-20 pt-6">
          <InViewAnimationBoundry className="flex w-full flex-col items-center text-center">
            <section className="relative flex items-center justify-center">
              <div className="z-50 flex flex-col items-center gap-8 text-center">
                {/* Badge */}
                <div className="flex items-center gap-3 rounded-full border-2 border-secondary-400/30 bg-gradient-to-r from-secondary-50 to-orange-50 py-1 pe-5 ps-2 text-sm shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary-500 to-orange-600 px-3 py-1 text-[10px] font-semibold text-white shadow-md">
                    <Sparkles size={12} className="animate-pulse " />
                    {t("badgeLabel")}
                  </div>
                  <TinyText className="text-gray-700">
                    {t("badgeDescription")}
                  </TinyText>
                </div>

                {/* Main Heading */}
                <div className="flex flex-col gap-3">
                  <h1 className="text-balance text-4xl font-bold lg:text-6xl">
                    {t("heroTitle")}
                    <span className=" block bg-gradient-to-r from-secondary-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                      <WordRotate className="h-fit" words={rotatingWords} />
                    </span>
                    {t("heroSubtitle")}
                  </h1>
                  <Paragraph className="mt-2">{t("heroDescription")}</Paragraph>
                </div>

                {/* CTA Button */}
                <div className="gap-2">
                  <TryNowButton type="primary" dir={dir} />
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-4">
                  {benefits.map((benefit, index) => (
                    <span key={index} className="flex items-center gap-1">
                      <Check size={16} className="stroke-primary" />
                      <Paragraph>
                        <span className="text-sm">{benefit}</span>
                      </Paragraph>
                    </span>
                  ))}
                </div>
              </div>
              <GridPattern
                width={75}
                height={75}
                x={-1}
                y={-1}
                className={cn(
                  "absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]",
                )}
              />
            </section>
          </InViewAnimationBoundry>
        </section>

        {/* Features Section */}
        <section className=" px-4">
          <InViewAnimationBoundry className="flex w-full flex-col items-center text-center">
            <div className="flex w-full items-center justify-between">
              <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-16 text-center">
                  <div className="mb-6 inline-flex items-center">
                    <span className="rounded-full bg-secondary-100 px-3 py-1 text-sm font-medium text-secondary-800">
                      {t("featuresSubtitle")}
                    </span>
                  </div>

                  <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                    {t("featuresTitle")}
                  </h2>
                  <Paragraph>{t("featuresDescription")}</Paragraph>
                </div>

                {/* Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature, index) => (
                    <Card
                      key={index}
                      className="flex flex-col items-center justify-center rounded-xl border border-gray-100 p-8 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div
                        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${feature.iconBg}`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <Paragraph>{feature.description}</Paragraph>
                    </Card>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                  <div className="inline-flex items-center">
                    <TryNowButton type="primary" dir={dir} />
                  </div>
                  <Paragraph>{t("featuresCtaSubtext")}</Paragraph>
                </div>
              </div>
            </div>
          </InViewAnimationBoundry>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-14 bg-primary-900 pb-8 pt-32 text-white">
        <div className="container mx-auto space-y-7 px-8 lg:px-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TanadLogo />
              <span className="text-xl font-bold">
                {t("footerCompanyName")}
              </span>
            </div>
            <div>
              <span className="text-sm">{t("footerNote")}</span>
            </div>
          </div>
          <div className="border-t border-white/20 pt-7">
            <div className="flex-col items-center justify-between lg:flex-row">
              <p className="text-sm text-white/70">{t("footerCopyright")}</p>
              <div className="flex gap-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default page;
