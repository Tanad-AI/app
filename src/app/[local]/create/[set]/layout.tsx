import { Spacer } from "@nextui-org/react";
import DashboardNav from "../ui/DashboardNav";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="  relative z-0 flex max-h-[100svh] w-full flex-col gap-3 overflow-hidden bg-gradient-to-b from-[#FAE9DF] to-[#FFFDF5]  px-6 py-3">
      <div className="container mx-auto">
        <div className="-z-10 ">
          <DashboardNav />
          <Spacer y={3} />
          {children}
        </div>
      </div>
    </section>
  );
}
