import CreatePageNavbar from "./ui/CreatePageNavbar";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-20 py-6">
      <CreatePageNavbar />
      {children}
    </section>
  );
}
