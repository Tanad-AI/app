import { AbstractPattern } from "@/assets/";
import DashboardNav from "./ui/DashboardNav";
import { Spacer } from "@nextui-org/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" dashboard relative z-0 flex max-h-[100svh] w-full flex-col gap-3 overflow-hidden   bg-gradient-to-b from-[#FAE9DF] to-[#FFFDF5]  px-6 py-3">
      <div className="container mx-auto">
        <div className="-z-10 ">
          <DashboardNav />
          <Spacer y={3} />
          {children}
        </div>
        <AbstractPattern className="absolute -top-14 left-0 -z-20  h-screen w-screen opacity-65 mix-blend-darken" />
      </div>
    </section>
  );
}
