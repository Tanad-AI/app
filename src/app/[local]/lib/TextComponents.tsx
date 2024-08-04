import React from "react";
import { Inter } from "next/font/google";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}
const inter = Inter({
  subsets: ["latin"],
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
  return <h3 className={`text-2xl  font-medium ${className}`}>{children}</h3>;
};

export const Text = ({ children, className }: TextProps) => {
  return (
    <p className={`text-sm font-medium  ${className} ${inter.className}`}>
      {children}
    </p>
  );
};

export const Paragraph = ({ children, className }: TextProps) => {
  return (
    <p
      className={`text-sm font-medium  text-foreground/70 ${className} ${inter.className}`}
    >
      {children}
    </p>
  );
};
export const TinyText = ({ children, className }: TextProps) => {
  return (
    <p className={`text-xs  ${className} ${inter.className}`}>{children}</p>
  );
};
