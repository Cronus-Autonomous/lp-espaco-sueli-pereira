import React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08A45] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#642C4B] text-[#FFFDFC] hover:bg-[#4A1F36] hover:shadow-[0_12px_30px_-12px_rgba(100,44,75,0.6)]",
  secondary:
    "bg-[#B08A45] text-white hover:bg-[#9a7838] hover:shadow-[0_12px_30px_-12px_rgba(176,138,69,0.55)]",
  outline:
    "border border-[#E0D4C8] text-[#30242B] hover:border-[#642C4B] hover:text-[#642C4B] bg-transparent",
  ghost: "text-[#30242B] hover:text-[#642C4B] bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-sm px-8 py-4",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  as = "button",
  href,
  target,
  rel,
  ...props
}) => {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;