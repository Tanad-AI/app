import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});
const AR_rubik = Rubik({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Tanad AI",
  description: "AI exam maker",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const lang = cookies().get("NEXT_LOCALE")?.value;
  let font = lang === "en" ? inter : AR_rubik;

  return (
    <ClerkProvider>
      <html lang={locale} className="light">
        <body className={font.className}>
          <NextIntlClientProvider messages={messages}>
            <Providers>{children}</Providers>
            <Analytics />
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
