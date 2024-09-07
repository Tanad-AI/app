/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { TanadLogo } from "@/assets";
import React from "react";
import {
  Header,
  Paragraph,
  SectionHeader,
  SubHeader,
  Text,
  TinyText,
} from "./lib/TextComponents";
import { Button, Card, Divider } from "@nextui-org/react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowRightCircle,
  Check,
  ChevronRight,
  Hammer,
  Landmark,
  PiggyBank,
  Printer,
  Sparkles,
  TabletSmartphone,
  Timer,
  Wallpaper,
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
}: {
  type?: "primary";
  theme?: "dark" | "light";
}) {
  const t = useTranslations("NavBar");
  const pathName = usePathname();
  const arrow = {
    initial: { x: 0 },
    animate: { x: 6 },
  };
  return (
    <>
      {type === "primary" ? (
        <Link href={`${pathName}/dashboard`}>
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
              <ChevronRight color="white" size={16} />
            </motion.div>
          </motion.button>
        </Link>
      ) : (
        <Link href={`${pathName}/dashboard`}>
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
    <Link href="#">
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

function page() {
  const t = useTranslations("Home");

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

  const featuresCards = [
    {
      title: "Time-Saving Automation",
      paragraph:
        "By automating the most time-consuming aspects of exam creation, Tanad frees up valuable time for educators, allowing them to focus on teaching and other important tasks.",
      icon: <Timer className="stroke-primary" size={24} />,
    },
    {
      title: "Simplified User Interface",
      paragraph:
        "Tanad boasts an intuitive and user-friendly interface that makes exam creation easier than ever. Our tool is designed to be more straightforward and efficient than traditional platforms like Microsoft Office or Google Docs.",
      icon: <Wallpaper className="stroke-primary" size={24} />,
    },
    {
      title: "Ready-to-Print Exams",
      paragraph:
        "Tanad provides ready-to-print exams that can be customized to suit individual requirements. This feature streamlines the exam preparation process, making it quicker and more efficient.",
      icon: <Printer className="stroke-primary" size={24} />,
    },
    {
      title: "Standalone Tool",
      paragraph:
        "Tanad does not require integration with other educational platforms, making it easy to adopt and use without additional setup or complexity.",
      icon: <Hammer className="stroke-primary" size={24} />,
    },
    {
      title: "Reusable Question",
      paragraph:
        "Educators can store and reuse question components. This feature facilitates the creation of standardized and consistent assessments, saving educators valuable time.",
      icon: <Landmark className="stroke-primary" size={24} />,
    },
    {
      title: "Multi-Device Compatibility",
      paragraph:
        "Tanad is designed to be accessible both on computers and phones, giving educators the flexibility to create and manage assessments seamlessly across different devices.",
      icon: <TabletSmartphone className="stroke-primary" size={24} />,
    },
    {
      title: "Cost-Effective Solution",
      paragraph:
        "By reducing the time spent on exam creation and minimizing the need for manual corrections, Tanad offers a cost-effective solution for educational institutions looking to optimize their resources.",
      icon: <PiggyBank className="stroke-primary" size={24} />,
    },
  ];

  return (
    <>
      <main className="container relative z-0 mx-auto flex flex-col space-y-36 bg-background px-20 py-4">
        <section className="relative h-svh pt-6">
          <div className="relative z-50">
            <NavBar t={t} />
          </div>
          <section className="relative mt-20 flex h-[87%] items-center justify-center  ">
            <InViewAnimationBoundry className="z-50 flex  flex-col items-center gap-8 text-center">
              <div className="flex items-center gap-3 rounded-full border-1.5 border-orange-500/20 py-1 pl-1 pr-4 text-xs">
                <div className="flex items-center gap-1 rounded-full bg-secondary-200 px-1 py-[2px] text-[10px] text-secondary-700">
                  <Sparkles size={12} />
                  {t("banner.title")}
                </div>
                <div>{t("banner.subtitle")}</div>
              </div>
              <div className="relative flex flex-col space-y-2">
                <Header className="text-balance">
                  {t("banner.description")}
                  <WordRotate words={t.raw("banner.features")} />
                </Header>
                <Paragraph>{t("banner.highlight")}</Paragraph>
              </div>
              <div className="gap-2">
                <TryNowButton type="primary" />
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <Check size={16} className="stroke-primary" />
                  <Paragraph>{t.raw("banner.notes")[0]}</Paragraph>
                </span>
                <span className="flex items-center gap-1">
                  <Check size={16} className="stroke-primary" />
                  <Paragraph>{t.raw("banner.notes")[1]}</Paragraph>
                </span>
                <span className="flex items-center gap-1">
                  <Check size={16} className="stroke-primary" />
                  <Paragraph>{t.raw("banner.notes")[2]}</Paragraph>
                </span>
              </div>
            </InViewAnimationBoundry>
          </section>
          <GridPattern
            width={75}
            height={75}
            x={-1}
            y={-1}
            className={cn(
              "z-1 opacity-70 [mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]",
            )}
          />
        </section>
        <section className="mx-auto -mt-36 flex h-svh w-full flex-col items-center space-y-14 px-32">
          <InViewAnimationBoundry className="flex w-full items-center justify-between">
            <div className="w-3/5 space-y-2 ">
              <Chip2>{t("sections.tutorial.subtitle")}</Chip2>
              <div>
                <SubHeader>{t("sections.tutorial.description")}</SubHeader>
                <Paragraph>{t("sections.tutorial.content")}</Paragraph>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TryNowButton />
              <TinyText className="text-foreground/80">
                {t("sections.tutorial.cta_button.note")}{" "}
              </TinyText>
            </div>
          </InViewAnimationBoundry>
          <InViewAnimationBoundry className="w-full px-20">
            <video className="w-full rounded-md" controls></video>
          </InViewAnimationBoundry>
        </section>
        <section className="space-y-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex w-full justify-center"
          >
            <Chip2>{t("sections.benefits.title")}</Chip2>
          </motion.div>
          {t
            .raw("sections.benefits.items")
            .map((item: { title: string; description: string }, i: number) => {
              let dir: "ltr" | "rtl" = "ltr";
              if (i % 2 != 0) {
                dir = "rtl";
              } else dir = "ltr";
              return (
                <>
                  <InViewAnimationBoundry
                    dir={dir}
                    className="ltr grid grid-cols-2 gap-36"
                  >
                    <InViewAnimationBoundry
                      delay={0.4}
                      className="h-96 w-full bg-slate-500"
                    ></InViewAnimationBoundry>
                    <div dir="ltr" className="flex flex-col gap-3">
                      <SectionHeader>{item.title}</SectionHeader>
                      <Paragraph>{item.description}</Paragraph>
                      <TryNowButton />
                    </div>
                  </InViewAnimationBoundry>
                </>
              );
            })}
        </section>
        <section>
          <div className="relative flex  items-start justify-between ">
            <InViewAnimationBoundry className="sticky bottom-60 flex w-[48%] flex-col gap-3 self-end">
              <Chip2>{t("sections.features.title")}</Chip2>

              <SectionHeader className="balanced sticky">
                {t("sections.features.header")}
              </SectionHeader>
              <Paragraph className="balanced">
                {t("sections.features.paragraph")}
              </Paragraph>
              <TryNowButton />
            </InViewAnimationBoundry>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scrollAnimationVarients}
              viewport={{ once: true }}
              className="relative top-40  flex w-1/2 flex-col items-end space-y-14 "
            >
              {featuresCards.map((feature, i) => (
                <Card
                  shadow="sm"
                  className="w-[87%] space-y-4 border-none px-12 py-16"
                  key={i}
                >
                  <div className="flex aspect-square size-12 items-center justify-center rounded-xl border-4 border-primary/10 bg-primary-100/80">
                    {feature.icon}
                  </div>
                  <SubHeader>
                    {t.raw("sections.features.items")[i].title}
                  </SubHeader>
                  <Paragraph>
                    {t.raw("sections.features.items")[i].description}
                  </Paragraph>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <section className="mt-14 flex flex-col items-center space-y-6 bg-primary-700 py-32">
        <SectionHeader className="text-white">{t("footer.cta")}</SectionHeader>
        <div className="space-x-6">
          <TryNowButton theme="light" />
          <SignUpButton theme="dark" />
        </div>
      </section>
      <footer className="bg-primary-900 pb-8 pt-32 text-white">
        <div className="container mx-auto space-y-7  px-20">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <TanadLogo />
              <Text className="">{t("tanad")}</Text>
            </div>
            <div>
              <Text>{t("footer.note")}</Text>
            </div>
          </div>
          <Divider className="bg-white/20" />
          <div className="flex justify-between">
            <Paragraph className="text-white/70">
              {t("footer.copyright")}
            </Paragraph>
            <LanguageSwitcher />
          </div>
        </div>
      </footer>
    </>
  );
}

export default page;

function NavBar({ t }: { t: any }) {
  return (
    <nav className="flex grow-0 items-center justify-between">
      <div className="flex items-center gap-2">
        <TanadLogo />
        <Text>{t("tanad")}</Text>
      </div>
      <div></div>
      <div className="flex gap-6">
        <SignUpButton />
        <TryNowButton />
      </div>
    </nav>
  );
}
