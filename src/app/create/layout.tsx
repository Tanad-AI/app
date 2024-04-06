import CreatePageNavbar from "./ui/CreatePageNavbar";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto  max-w-7xl px-8 pt-3 lg:px-20">
      <CreatePageNavbar />
      {children}
    </section>
  );
}
