import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "highlight";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium border rounded-full",
        variant === "default" && "border-hairline text-ash",
        variant === "highlight" && "border-white text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
