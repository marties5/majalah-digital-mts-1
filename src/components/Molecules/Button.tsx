"use client";

import { cn } from "@/lib/utils";

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: any) => {
  const buttonStyles: Record<typeof variant, string> = {
    primary: "bg-primary text-gray-100",
    secondary: "bg-secondary",
    outline: "border-[1px]",
    link: "bg-blue-300",
    dark: "bg-green-400",
    ghost: "bg-purple-300",
  };
  return (
    <button
      className={cn(
        "py-2 max-h-12 relative z-10 hover: h-fit w-fit px-4 font-semibold rounded-md",
        buttonStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
