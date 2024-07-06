import { cn } from "@/lib/utils";

interface ContainerCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ContainerCard: React.FC<ContainerCardProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "px-4 py-2 border border-slate-200 rounded-lg shadow-md shadow-slate-100",
        className
      )}
    >
      {children}
    </div>
  );
};
