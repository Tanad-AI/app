"use client";
import { TanadLogo } from "@/assets";
import React from "react";
import {
  Header,
  Paragraph,
  SectionHeader,
  Text,
  TinyText,
} from "./lib/TextComponents";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
    <main className="container mx-auto flex flex-col bg-background px-20 py-4">
      <section className="h-svh pt-6">
        <NavBar />
        <section className="flex h-[87%]  items-center justify-center  ">
          <div className="flex  flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3 rounded-full border-1.5 border-orange-500/20 py-1 pl-1 pr-4 text-sm">
              <div className="flex items-center gap-1 rounded-full bg-orange-200 px-3 py-1 text-orange-600">
                <Sparkles size={16} />
                new
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
            <div className="flex gap-2">
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
                <Paragraph>AI powered</Paragraph>
              </span>
            </div>
          </div>
        </section>
      </section>
      <section className="mx-auto flex h-svh w-2/3 flex-col items-center">
        <div className="flex w-full justify-between">
          <div className="w-3/4 ">
            <SectionHeader>How does Tanad work?</SectionHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda quae inventore ipsa nemo vel. Enim odio quisquam laborum
              porro architecto?
            </Paragraph>
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
      </section>
    </main>
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
