import DashboardNav from "./ui/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex max-h-[100svh] w-full flex-col gap-6 bg-gradient-to-b from-[#FAEEDF] to-[#FCF5EA]  px-6 py-3">
      <DashboardNav />
      {children}
    </section>
  );
}
