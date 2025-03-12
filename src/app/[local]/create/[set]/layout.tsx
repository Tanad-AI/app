/* eslint-disable */

import { Button, Spacer } from "@nextui-org/react";
import DashboardNav from "../ui/DashboardNav";
import prisma from "@/app/db";
import Link from "next/link";
import { Header, Paragraph } from "../../lib/TextComponents";
import { AlertCircle, Home } from "lucide-react";

export default async function CreateLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { set: string };
}) {
  const document = await prisma.document.findUnique({
    where: {
      id: params.set,
    },
    include: {
      fields: {
        include: {
          details: true,
        },
      },
    },
  });
  if (!document) {
    return (
      <section className="relative z-0 flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAE9DF] to-[#FFFDF5]">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-12 text-center">
          {/* Error Icon */}
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-secondary-100">
            <AlertCircle size={48} className="text-secondary-600" />
          </div>

          {/* Error Message */}
          <Header className="mb-3 text-4xl font-bold text-gray-800">
            Document Doesn't Exist
          </Header>
          <Paragraph className="mb-8 max-w-md text-lg ">
            We couldn't find the document you're looking for. Please return to
            the dashboard.
          </Paragraph>

          {/* Action Button */}
          <Link href="/../dashboard/home" className="inline-block">
            <Button
              color="primary"
              className="flex items-center gap-2 px-6 py-3 text-lg font-medium shadow-lg transition-transform hover:scale-105"
            >
              <Home size={20} />
              Return to Dashboard
            </Button>
          </Link>
        </div>

        {/* Background Decoration */}
        <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-orange-200 opacity-20"></div>
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-orange-300 opacity-10"></div>
      </section>
    );
  }

  return (
    <section className="  relative z-0 flex max-h-[100svh] w-full flex-col gap-3 overflow-hidden bg-gradient-to-b from-[#FAE9DF] to-[#FFFDF5]  px-6 py-3">
      <div className="container mx-auto">
        <div className="-z-10 ">
          <DashboardNav document={document} />
          <Spacer y={3} />
          {children}
        </div>
      </div>
    </section>
  );
}
