import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cyan";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" &&
          "border-border bg-white/[0.04] text-foreground-secondary hover:border-border-hover hover:text-foreground",
        variant === "accent" &&
          "border-accent/30 bg-accent/10 text-accent-light",
        variant === "cyan" &&
          "border-cyan/30 bg-cyan/10 text-cyan",
        className
      )}
    >
      {children}
    </span>
  );
}
