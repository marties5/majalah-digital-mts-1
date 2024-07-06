import { TailwinNumber } from "@/lib/type";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Flex = ({
  children,
  gap = "2",
  variant = "row",
  justify = "start",
  className,
}: {
  children: ReactNode;
  gap?: TailwinNumber;
  className?: string;
  variant?: "row" | "col" | "row-reverse" | "col-reverse";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}) => {
  const Gap = `gap-${gap}`;
  const Variant = `flex-${variant}`;
  const Justify = `justify-${justify}`;
  return (
    <div
      className={cn(`flex items-center ${Gap} ${Variant} ${Justify}`, className)}
    >
      {children}
    </div>
  );
};
