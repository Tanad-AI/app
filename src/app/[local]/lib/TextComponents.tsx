"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}
const inter = Inter({
  subsets: ["latin"],
});
const rubik = Rubik({
  subsets: ["arabic"],
});

export const Header = ({ children, className }: TextProps) => {
  return (
    <h1 className={`text-balance text-7xl font-bold capitalize  ${className}`}>
      {children}
    </h1>
  );
};

export const SectionHeader = ({ children, className }: TextProps) => {
  return (
    <h2 className={`balanced  text-5xl font-bold capitalize ${className}`}>
      {children}
    </h2>
  );
};

export const SubHeader = ({ children, className }: TextProps) => {
  return <h3 className={`text-xl  font-medium ${className}`}>{children}</h3>;
};

export const Text = ({ children, className }: TextProps) => {
  const pathName = usePathname();
  const lang = pathName.slice(1, 3);
  const font = lang == "ar" ? rubik : inter;
  return (
    <p className={`text-sm font-medium  ${className} ${font.className}`}>
      {children}
    </p>
  );
};

export const Paragraph = ({ children, className }: TextProps) => {
  const pathName = usePathname();
  const lang = pathName.slice(1, 3);
  const font = lang == "ar" ? rubik : inter;
  return (
    <p
      className={`text-sm font-medium  text-foreground/70 ${className} ${font.className}`}
    >
      {children}
    </p>
  );
};
export const TinyText = ({ children, className }: TextProps) => {
  const pathName = usePathname();
  const lang = pathName.slice(1, 3);
  const font = lang == "ar" ? rubik : inter;
  return (
    <p className={`text-xs  ${className} ${font.className}`}>{children}</p>
  );
};
