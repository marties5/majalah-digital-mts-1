import { cn } from "@/lib/utils";
export const GridLayout = ({
  children,
  grid = "12",
  className,
}: {
  children: React.ReactNode;
  grid?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  className?: React.ReactNode;
}) => {
  const gridStyles: Record<typeof grid, string> = {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
    "5": "grid-cols-5",
    "6": "grid-cols-6",
    "7": "grid-cols-7",
    "8": "grid-cols-8",
    "9": "grid-cols-9",
    "10": "grid-cols-10",
    "11": "grid-cols-11",
    "12": "grid-cols-12",
  };

  return (
    <div className={cn("grid h-full", gridStyles[grid], className)}>
      <>{children}</>
    </div>
  );
};
