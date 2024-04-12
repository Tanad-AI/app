import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: TextProps) => {
  return (
    <h1 className={`text-4xl font-bold capitalize  ${className}`}>
      {children}
    </h1>
  );
};

export const SectionHeader = ({ children }: TextProps) => {
  return (
    <h2 className="balanced text-center text-2xl font-bold capitalize ">
      {children}
    </h2>
  );
};

export const SubHeader = ({ children, className }: TextProps) => {
  return <h3 className={`text-lg  font-semibold ${className}`}>{children}</h3>;
};

export const Text = ({ children, className }: TextProps) => {
  return <p className={`text-base font-medium  ${className}`}>{children}</p>;
};

export const Paragraph = ({ children, className }: TextProps) => {
  return (
    <p className={`text-sm font-normal text-foreground/70 ${className}`}>
      {children}
    </p>
  );
};
export const TinyText = ({ children, className }: TextProps) => {
  return <p className={`text-sm  ${className}`}>{children}</p>;
};
