"use client";
import { TanadLogo, EightStar } from "@/assets";
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
import { Star } from "lucide-react";

function page() {
  return (
    <main className="container mx-auto flex flex-col bg-background px-20 py-4">
      <section className="h-svh">
        <nav className="flex grow-0 items-center justify-between">
          <div className="flex items-center gap-2">
            <TanadLogo />
            <Text>Tanad AI</Text>
          </div>
          <div></div>
          <div className="flex gap-2">
            <Button
              radius="sm"
              variant="solid"
              className="bg-white font-normal text-primary shadow-md"
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
        <section className="flex h-[87%]  items-center justify-between  ">
          <div id="left-section" className="flex w-1/2 flex-col gap-6">
            <div className="flex flex-col space-y-2">
              <Header>
                The best way to write your
                <span className="text-primary"> exams</span>
              </Header>
              <Paragraph>
                Revolutionize your assessment creation process with AI:
                effortlessly turn screenshots into print-ready exams. Streamline
                your workflow, save time, and unlock professional-grade results.
                Experience the power of efficiency today.
              </Paragraph>
            </div>
            <div className="flex gap-2">
              <Link href="/dashboard">
                <Button radius="sm" variant="shadow" color="primary">
                  Try now! for free
                </Button>
              </Link>
            </div>
          </div>
          <div id="right-section">
            <HeroImage />
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

function HeroImage() {
  return (
    <div className="scale-90">
      <div
        id="big-card"
        className="relative h-96  w-80 rounded-[2.2rem] border-[1.5px] border-black bg-white/70"
      >
        <EightStar className="absolute -left-[52px] -top-[25px] fill-[#D4CBF4]" />
        <div
          id="card"
          className="absolute -right-[62px] top-[150px] h-80 w-56 rounded-[2.2rem] border-[1.5px] border-black bg-white"
        ></div>
        <div
          id="card"
          className="absolute -right-[38px] top-[42px] z-10 h-96 w-80 rounded-[2.2rem] border-[1.5px] border-black bg-white"
        ></div>
      </div>
    </div>
  );
}
