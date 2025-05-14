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
import {
  Button,
  Card,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  FileText,
  Globe,
  Hammer,
  Landmark,
  Layout,
  PenTool,
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
import CustomSignUpButton from "@/components/CustomSignUpButton";

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
        <Link href={`/../dashboard/home`}>
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
        <Link href={`/../dashboard/home`}>
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
      <main className="container relative z-0 mx-auto flex flex-col space-y-20 bg-background px-4 py-4 lg:px-20">
        <nav className="relative flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="white"
                strokeWidth="2"
                fill="none"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-semibold">Tanad AI</span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-foreground/80 hover:text-primary"
            >
              Features
            </a>
            <a
              href="#templates"
              className="text-sm text-foreground/80 hover:text-primary"
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="text-sm text-foreground/80 hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#support"
              className="text-sm text-foreground/80 hover:text-primary"
            >
              Support
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-md px-3 py-1.5 text-sm hover:bg-gray-100">
              Log in
            </button>
            <button className="rounded-md bg-primary px-3 py-1.5 text-sm text-white hover:bg-primary/90">
              Sign up
            </button>
            <div className="ml-2 hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>

        {/* Hero Section - Engineering Report Focus */}
        <section className="relative min-h-[85vh] pt-12">
          <div className="relative flex h-full flex-col-reverse items-center justify-between gap-8 px-4 py-12 lg:flex-row">
            {/* Left Side Content */}
            <div className="z-50 flex w-full max-w-2xl flex-col gap-6">
              <div className="inline-flex items-center gap-3 self-start rounded-full border-1.5 border-primary/20 py-1 pl-1 pr-4 text-xs">
                <div className="flex items-center gap-1 rounded-full bg-primary-100 px-2 py-1 text-[10px] text-primary-700">
                  <Sparkles size={12} />
                  {t("banner.title")}
                </div>
                <div>Engineering Reports Made Simple</div>
              </div>

              <div className="space-y-4">
                <Header className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">
                  Professional Engineering Reports
                  <WordRotate
                    words={["Created", "Formatted", "Managed", "Shared"]}
                    className="text-primary"
                  />
                  In Minutes
                </Header>
                <Paragraph className="text-lg text-foreground/80">
                  Tanad AI streamlines the engineering documentation process
                  with smart templates, automatic formatting, and technical
                  specification tools designed for engineers.
                </Paragraph>
              </div>

              <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center">
                <TryNowButton />
                <CustomSignUpButton />
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
                <span className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check size={14} className="stroke-primary" />
                  </div>
                  <Paragraph className="text-sm">
                    Professional Templates
                  </Paragraph>
                </span>
                <span className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check size={14} className="stroke-primary" />
                  </div>
                  <Paragraph className="text-sm">
                    Technical Diagram Support
                  </Paragraph>
                </span>
                <span className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check size={14} className="stroke-primary" />
                  </div>
                  <Paragraph className="text-sm">
                    Multi-language Support
                  </Paragraph>
                </span>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="relative w-full lg:w-2/5">
              <div className="relative aspect-square rounded-xl bg-white p-4 shadow-lg">
                <div className="h-8 w-full rounded bg-gray-100"></div>
                <div className="mt-4 h-6 w-3/4 rounded bg-gray-100"></div>
                <div className="mt-2 h-6 w-1/2 rounded bg-gray-100"></div>
                <div className="mt-4 h-40 w-full rounded bg-gray-100"></div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="h-6 w-full rounded bg-gray-100"></div>
                  <div className="h-6 w-full rounded bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Pattern */}
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

        {/* How It Works Section */}
        <section className="mx-auto flex w-full flex-col items-center space-y-12 px-4 lg:px-20">
          <InViewAnimationBoundry className="flex w-full flex-col items-center text-center">
            <Chip2>How It Works</Chip2>
            <SubHeader className="mt-4 max-w-3xl">
              Create Professional Engineering Reports In Three Simple Steps
            </SubHeader>
          </InViewAnimationBoundry>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <InViewAnimationBoundry className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <SubHeader className="mt-4">Create Account</SubHeader>
              <Paragraph className="mt-2">
                Sign up for free and gain access to our engineering report
                templates and tools.
              </Paragraph>
            </InViewAnimationBoundry>

            <InViewAnimationBoundry className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <SubHeader className="mt-4">Choose Template</SubHeader>
              <Paragraph className="mt-2">
                Select from industry-specific engineering templates or create
                your custom report.
              </Paragraph>
            </InViewAnimationBoundry>

            <InViewAnimationBoundry className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <SubHeader className="mt-4">Edit & Export</SubHeader>
              <Paragraph className="mt-2">
                Fill in your data, customize as needed, and export as PDF or
                share directly.
              </Paragraph>
            </InViewAnimationBoundry>
          </div>
          <div className="mt-8">
            <TryNowButton />
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex w-full justify-center"
          >
            <Chip2>Engineering Report Features</Chip2>
          </motion.div>

          {/* Feature 1 */}
          <InViewAnimationBoundry
            dir="ltr"
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <InViewAnimationBoundry
              delay={0.4}
              className="relative h-96 w-full overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="absolute left-0 top-0 h-10 w-full bg-gray-100"></div>
              <div className="absolute left-6 top-16 h-6 w-3/4 rounded bg-gray-200"></div>
              <div className="absolute left-6 top-28 h-4 w-1/2 rounded bg-gray-200"></div>
              <div className="absolute left-6 top-40 grid w-5/6 grid-cols-2 gap-4">
                <div className="h-24 rounded bg-gray-200"></div>
                <div className="h-24 rounded bg-gray-200"></div>
              </div>
              <div className="absolute left-6 top-72 h-12 w-5/6 rounded bg-gray-200"></div>
            </InViewAnimationBoundry>
            <div dir="ltr" className="flex flex-col gap-4">
              <SectionHeader>Professional Templates</SectionHeader>
              <Paragraph>
                Access dozens of engineering-specific templates designed by
                professionals for various disciplines, including civil,
                mechanical, electrical, and chemical engineering. Each template
                follows industry standards and best practices.
              </Paragraph>
              <TryNowButton />
            </div>
          </InViewAnimationBoundry>

          {/* Feature 2 */}
          <InViewAnimationBoundry
            dir="rtl"
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <InViewAnimationBoundry
              delay={0.4}
              className="relative h-96 w-full overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="absolute left-0 top-0 h-10 w-full bg-gray-100"></div>
              <div className="h-86 absolute left-0 top-10 w-full p-4">
                <div className="grid h-full w-full grid-cols-3 gap-2">
                  <div className="col-span-1 rounded bg-gray-100 p-2">
                    <div className="h-4 w-full rounded bg-gray-200"></div>
                    <div className="mt-2 h-4 w-3/4 rounded bg-gray-200"></div>
                    <div className="mt-6 h-40 w-full rounded bg-gray-200"></div>
                  </div>
                  <div className="col-span-2 rounded bg-white p-4 shadow-sm">
                    <div className="h-6 w-1/2 rounded bg-gray-200"></div>
                    <div className="mt-4 h-4 w-full rounded bg-gray-200"></div>
                    <div className="mt-2 h-4 w-full rounded bg-gray-200"></div>
                    <div className="mt-2 h-4 w-3/4 rounded bg-gray-200"></div>
                    <div className="mt-6 h-40 w-full rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </InViewAnimationBoundry>
            <div dir="ltr" className="flex flex-col gap-4">
              <SectionHeader>Smart Document Editor</SectionHeader>
              <Paragraph>
                Our specialized editor includes engineering-specific features
                like formula support, technical diagram insertion, measurement
                units, and automatic table formatting for data, making your
                reports both professional and precise.
              </Paragraph>
              <TryNowButton />
            </div>
          </InViewAnimationBoundry>

          {/* Feature 3 */}
          <InViewAnimationBoundry
            dir="ltr"
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <InViewAnimationBoundry
              delay={0.4}
              className="relative h-96 w-full overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="absolute left-0 top-0 h-10 w-full bg-gray-100"></div>
              <div className="h-86 absolute left-0 top-10 flex w-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-1/3 rounded bg-gray-200"></div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded bg-primary-100"></div>
                    <div className="h-8 w-8 rounded bg-primary-100"></div>
                    <div className="h-8 w-8 rounded bg-primary-100"></div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="col-span-1 h-32 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-32 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-32 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-32 rounded bg-gray-200"></div>
                </div>
              </div>
            </InViewAnimationBoundry>
            <div dir="ltr" className="flex flex-col gap-4">
              <SectionHeader>Collaboration & Sharing</SectionHeader>
              <Paragraph>
                Work with team members in real-time, add comments, track
                changes, and easily share your reports with clients or
                stakeholders. Control permissions to decide who can view or edit
                your engineering documentation.
              </Paragraph>
              <TryNowButton />
            </div>
          </InViewAnimationBoundry>
        </section>

        {/* Key Benefits Section */}
        <section>
          <div className="relative flex flex-col-reverse items-start justify-between gap-12 lg:flex-row">
            <InViewAnimationBoundry className="sticky top-20 flex w-full flex-col gap-4 lg:w-[45%]">
              <Chip2>Why Choose Tanad AI</Chip2>
              <SectionHeader className="text-balance">
                Built Specifically For Engineering Documentation Needs
              </SectionHeader>
              <Paragraph className="text-balance">
                Unlike general document editors, Tanad AI is designed from the
                ground up to address the unique challenges engineers face when
                creating technical reports, proposals, and documentation.
              </Paragraph>
              <TryNowButton />
            </InViewAnimationBoundry>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scrollAnimationVarients}
              viewport={{ once: true }}
              className="relative flex w-full flex-col items-end space-y-6 lg:w-1/2"
            >
              <Card
                shadow="sm"
                className="w-full space-y-4 border-none px-6 py-8 lg:w-[90%]"
              >
                <div className="flex aspect-square size-12 items-center justify-center rounded-xl border-4 border-primary/10 bg-primary-100/80">
                  <FileText size={24} className="text-primary-700" />
                </div>
                <SubHeader>Engineering-Specific Templates</SubHeader>
                <Paragraph>
                  Templates designed specifically for different engineering
                  disciplines, following industry standards and best practices.
                </Paragraph>
              </Card>

              <Card
                shadow="sm"
                className="w-full space-y-4 border-none px-6 py-8 lg:w-[90%]"
              >
                <div className="flex aspect-square size-12 items-center justify-center rounded-xl border-4 border-primary/10 bg-primary-100/80">
                  <PenTool size={24} className="text-primary-700" />
                </div>
                <SubHeader>Technical Drawing Integration</SubHeader>
                <Paragraph>
                  Easily insert and format technical diagrams, CAD drawings, and
                  engineering schematics into your reports.
                </Paragraph>
              </Card>

              <Card
                shadow="sm"
                className="w-full space-y-4 border-none px-6 py-8 lg:w-[90%]"
              >
                <div className="flex aspect-square size-12 items-center justify-center rounded-xl border-4 border-primary/10 bg-primary-100/80">
                  <Layout size={24} className="text-primary-700" />
                </div>
                <SubHeader>Automatic Formatting</SubHeader>
                <Paragraph>
                  Professional formatting happens automatically, with proper
                  section numbering, references, and appendix organization.
                </Paragraph>
              </Card>

              <Card
                shadow="sm"
                className="w-full space-y-4 border-none px-6 py-8 lg:w-[90%]"
              >
                <div className="flex aspect-square size-12 items-center justify-center rounded-xl border-4 border-primary/10 bg-primary-100/80">
                  <Globe size={24} className="text-primary-700" />
                </div>
                <SubHeader>Multilingual Support</SubHeader>
                <Paragraph>
                  Create reports in multiple languages with proper technical
                  terminology and localized formatting standards.
                </Paragraph>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mx-auto flex w-full flex-col items-center space-y-12">
          <InViewAnimationBoundry className="text-center">
            <Chip2>What Engineers Say</Chip2>
            <SectionHeader className="mt-4">
              Trusted by Engineering Professionals
            </SectionHeader>
          </InViewAnimationBoundry>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card shadow="sm" className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div>
                  <SubHeader className="text-base">Ahmed Al-Farsi</SubHeader>
                  <Paragraph className="text-xs text-foreground/70">
                    Civil Engineer, ABC Construction
                  </Paragraph>
                </div>
              </div>
              <Paragraph className="text-sm">
                "Tanad AI has cut my report preparation time in half. The
                templates are exactly what I need for site assessment
                documentation, and the ability to easily include technical
                diagrams is fantastic."
              </Paragraph>
            </Card>

            <Card shadow="sm" className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div>
                  <SubHeader className="text-base">Layla Mahmoud</SubHeader>
                  <Paragraph className="text-xs text-foreground/70">
                    Mechanical Engineer, XYZ Industries
                  </Paragraph>
                </div>
              </div>
              <Paragraph className="text-sm">
                "The specialized formatting options save me hours of work. Being
                able to create bilingual reports with proper technical
                terminology in both languages is invaluable for our
                international clients."
              </Paragraph>
            </Card>

            <Card shadow="sm" className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div>
                  <SubHeader className="text-base">Omar Khalid</SubHeader>
                  <Paragraph className="text-xs text-foreground/70">
                    Electrical Engineer, Power Solutions
                  </Paragraph>
                </div>
              </div>
              <Paragraph className="text-sm">
                "The collaboration features make it easy to work with my team on
                complex reports. We can all contribute sections and review each
                other's work seamlessly."
              </Paragraph>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto flex w-full flex-col items-center space-y-8 rounded-2xl bg-primary-50 p-12">
          <SectionHeader>
            Ready to Create Professional Engineering Reports?
          </SectionHeader>
          <Paragraph className="max-w-2xl text-center">
            Join thousands of engineers who are saving time and delivering
            better documentation with Tanad AI's specialized report editor.
          </Paragraph>
          <div className="flex gap-4">
            <TryNowButton type="primary" />
            <CustomSignUpButton theme="light" />
          </div>
        </section>
      </main>
      <section className="mt-14 flex flex-col items-center space-y-6 bg-primary-700 py-32">
        <SectionHeader className="text-white">{t("footer.cta")}</SectionHeader>
        <div className="space-x-6">
          <TryNowButton theme="light" />
          <CustomSignUpButton theme="dark" />
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
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <TanadLogo />
            <Text>{t("tanad")}</Text>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <CustomSignUpButton />
      <TryNowButton />
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      ></NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
