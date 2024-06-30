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
import { Check, File, Sparkles, X } from "lucide-react";
import { delay, motion } from "framer-motion";
import Chip2 from "@/components/Chip2";

const SubtleTextAnimation = ({ text }: { text: string }) => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "sring",
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="scale-text-container"
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {text}
      <span className="text-primary"> exams</span>
    </motion.div>
  );
};
function page() {
  return (
    <>
      <main className="container mx-auto flex flex-col space-y-36 bg-background px-20 py-4">
        <section className="h-svh pt-6">
          <NavBar />
          <section className="flex h-[87%]  items-center justify-center  ">
            <div className="flex  flex-col items-center gap-6 text-center">
              <div className="flex items-center gap-3 rounded-full border-1.5 border-orange-500/20 py-1 pl-1 pr-4 text-xs">
                <div className="flex items-center gap-1 rounded-full bg-secondary-200 px-1 py-1  text-secondary-700">
                  <Sparkles size={14} />
                  NEW
                </div>
                <div>AI Powered Tool</div>
              </div>
              <div className="flex flex-col space-y-2">
                <Header>
                  <SubtleTextAnimation text="The best way to write your" />
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
            </div>
          </section>
        </section>
        <section className="mx-auto flex h-svh w-full flex-col items-center space-y-14 px-32">
          <div className="flex w-full items-center justify-between">
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
          </div>
          <div className="w-full px-20">
            <video className="w-full rounded-md" controls></video>
          </div>
        </section>
        <section className="space-y-14">
          <div className="flex w-full justify-center">
            <Chip2>BENEFITS</Chip2>
          </div>
          <div dir="ltr" className="grid grid-cols-2 gap-36">
            <div className="h-96 w-full bg-slate-500"></div>
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
          </div>
          <div dir="rtl" className="grid grid-cols-2 gap-36">
            <div className="h-96 w-full bg-slate-500"></div>
            <div dir="ltr" className="space-y-3">
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
          </div>
          <div dir="ltr" className="grid grid-cols-2 gap-36">
            <div className="h-96 w-full bg-slate-500"></div>
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
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2 content-between justify-between">
            <div className="space-y-3">
              <Chip2>FEATURES</Chip2>
              <SectionHeader className="balanced">
                Crafting an Exam Has Never Been Easier
              </SectionHeader>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia et nisi quo libero sunt veniam praesentium modi
                similique voluptatibus obcaecati?
              </Paragraph>
              <Button color="primary" radius="sm" size="lg">
                Get Started
              </Button>
            </div>
            <div className="flex flex-col items-end space-y-14">
              <Card
                shadow="sm"
                className="w-10/12 space-y-4 border-none px-12 py-16"
              >
                <div className="flex aspect-square size-12 items-center justify-center rounded-xl border-4 border-primary/10 bg-primary-100/80">
                  <File className="stroke-primary" size={24} />
                </div>
                <SubHeader>Avoid Mistakes</SubHeader>
                <Paragraph>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                  esse.
                </Paragraph>
              </Card>
            </div>
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
            <Text>Made with ❤️</Text>
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
