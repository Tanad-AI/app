/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { TanadLogo } from "@/assets";
import React, { useRef } from "react";
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
  Check,
  File,
  Hammer,
  Landmark,
  PiggyBank,
  Printer,
  Sparkles,
  TabletSmartphone,
  Timer,
  Wallpaper,
  X,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Chip2 from "@/components/Chip2";
import InViewAnimationBoundry from "@/components/InViewAnimationBoundry";

function page() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

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
      <main className="container mx-auto flex flex-col space-y-36 bg-background px-20 py-4">
        <section className="h-svh pt-6">
          <NavBar />
          <section className="flex h-[87%]  items-center justify-center  ">
            <InViewAnimationBoundry className="flex  flex-col items-center gap-6 text-center">
              <div className="flex items-center gap-3 rounded-full border-1.5 border-orange-500/20 py-1 pl-1 pr-4 text-xs">
                <div className="flex items-center gap-1 rounded-full bg-secondary-200 px-1 py-[2px] text-[10px] text-secondary-700">
                  <Sparkles size={12} />
                  NEW
                </div>
                <div>AI Powered Tool</div>
              </div>
              <div className="flex flex-col space-y-2">
                <Header>
                  The best way to write your
                  <span className="text-primary"> exams</span>
                </Header>
                <Paragraph>
                  Revolutionize your assessment creation process with AI:
                  effortlessly turn screenshots into print-ready exams
                </Paragraph>
              </div>
              <div className="gap-2">
                <Link href="/dashboard">
                  <Button radius="sm" color="primary">
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <Check size={16} className="stroke-primary" />
                  <Paragraph>Try for free</Paragraph>
                </span>
                <span className="flex items-center gap-1">
                  <Check size={16} className="stroke-primary" />
                  <Paragraph>No credit card required</Paragraph>
                </span>
                <span className="flex items-center gap-1">
                  <Check size={16} className="stroke-primary" />
                  <Paragraph>AI Powered</Paragraph>
                </span>
              </div>
            </InViewAnimationBoundry>
          </section>
        </section>
        <section className="mx-auto -mt-36 flex h-svh w-full flex-col items-center space-y-14 px-32">
          <InViewAnimationBoundry className="flex w-full items-center justify-between">
            <div className="w-3/5 space-y-2 ">
              <Chip2>TUTORIAL</Chip2>
              <div>
                <SubHeader>How does Tanad work?</SubHeader>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda quae inventore ipsa nemo vel. Enim odio quisquam
                  laborum porro architecto?
                </Paragraph>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Button color="primary" radius="sm" size="lg">
                Try Now
              </Button>
              <TinyText className="text-foreground/80">
                it&apos;s absolutly free
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
            <Chip2>BENEFITS</Chip2>
          </motion.div>
          <InViewAnimationBoundry className="ltr grid grid-cols-2 gap-36">
            <InViewAnimationBoundry
              delay={0.4}
              className="h-96 w-full bg-slate-500"
            ></InViewAnimationBoundry>
            <div className="space-y-3">
              <SectionHeader>Convert Screenshot to Exams</SectionHeader>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                veritatis unde officia beatae in enim temporibus expedita
                pariatur! Laboriosam, officiis?
              </Paragraph>
              <Button color="primary" radius="sm" size="lg">
                Try Now
              </Button>
            </div>
          </InViewAnimationBoundry>
          <InViewAnimationBoundry
            dir="rtl"
            className=" grid grid-cols-2 gap-36"
          >
            <InViewAnimationBoundry
              delay={0.4}
              className="h-96 w-full bg-slate-500"
            ></InViewAnimationBoundry>
            <div dir="ltr" className=" space-y-3">
              <SectionHeader>Edit Existing Exams</SectionHeader>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                veritatis unde officia beatae in enim temporibus expedita
                pariatur! Laboriosam, officiis?
              </Paragraph>
              <Button color="primary" radius="sm" size="lg">
                Try Now
              </Button>
            </div>
          </InViewAnimationBoundry>
          <InViewAnimationBoundry className="ltr grid grid-cols-2 gap-36">
            <InViewAnimationBoundry
              delay={0.4}
              className="h-96 w-full bg-slate-500"
            ></InViewAnimationBoundry>
            <div className="space-y-3">
              <SectionHeader>Save Time</SectionHeader>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                veritatis unde officia beatae in enim temporibus expedita
                pariatur! Laboriosam, officiis?
              </Paragraph>
              <Button color="primary" radius="sm" size="lg">
                Try Now
              </Button>
            </div>
          </InViewAnimationBoundry>
        </section>
        <section>
          <div className="relative flex  items-start justify-between ">
            <InViewAnimationBoundry className="sticky bottom-60 w-[48%] space-y-3 self-end">
              <Chip2>FEATURES</Chip2>

              <SectionHeader className="balanced sticky">
                Crafting an Exam Has Never Been Easier
              </SectionHeader>
              <Paragraph className="balanced">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia et nisi quo libero sunt veniam praesentium modi
                similique voluptatibus obcaecati?
              </Paragraph>
              <Button color="primary" radius="sm" size="lg">
                Get Started
              </Button>
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
                  <SubHeader>{feature.title}</SubHeader>
                  <Paragraph>{feature.paragraph}</Paragraph>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <section className="mt-14 flex flex-col items-center space-y-6 bg-primary-700 py-32">
        <SectionHeader className="text-white">
          Craft Your Exams Pain Free Now
        </SectionHeader>
        <div className="space-x-6">
          <Button className="border-3 border-black/15 bg-white" radius="sm">
            Get Started
          </Button>
          <Button
            className="border-3 border-black/15 bg-primary-900 text-white"
            radius="sm"
          >
            Sign Up
          </Button>
        </div>
      </section>
      <footer className="bg-primary-900 pb-8 pt-32 text-white">
        <div className="container mx-auto space-y-7  px-20">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <TanadLogo />
              <Text className="">Tanad AI</Text>
            </div>
            <Text>Made with 💚</Text>
          </div>
          <Divider className="bg-white/20" />
          <Paragraph className="text-white/70">
            © Copyright 2024, All Rights Reserved by Tanad AI
          </Paragraph>
        </div>
      </footer>
    </>
  );
}

export default page;

function NavBar({}) {
  return (
    <nav className="flex grow-0 items-center justify-between">
      <div className="flex items-center gap-2">
        <TanadLogo />
        <Text>Tanad AI</Text>
      </div>
      <div></div>
      <div className="flex gap-6">
        <Button
          radius="sm"
          variant="solid"
          className="bg-white font-normal shadow-md"
        >
          Sign up
        </Button>
        <Link href="/dashboard">
          <Button radius="sm" color="primary" className="__classic_effect">
            Try now!
          </Button>
        </Link>
      </div>
    </nav>
  );
}
