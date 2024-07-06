import { HeaderVariant } from "@/lib/type";
import React from "react";

export const ContainerHeader = ({
  children,
  variant = "center",
}: {
  children: React.ReactNode;
  variant?: HeaderVariant;
}) => {
  const Justify = `justify-${variant}`;
  return (
    <header
      className={`w-full  border-b-[1px]  border-slate-100 shadow shadow-slate-100 bg-white/60 `}
    >
      <div
        className={`max-w-7xl w-full flex gap ${Justify} px-4 items-center h-16 mx-auto`}
      >
        {children}
      </div>
    </header>
  );
};
