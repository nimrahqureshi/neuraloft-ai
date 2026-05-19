import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  full?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold " +
  "transition-all duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

const variants = {
  primary:
    "bg-gradient-to-br from-mint to-indigo text-[#04120f] " +
    "shadow-[0_8px_30px_-8px_rgba(70,230,201,0.45)] hover:shadow-[0_14px_44px_-10px_rgba(70,230,201,0.55)]",
  ghost:
    "border border-white/15 bg-white/[0.04] text-ink hover:border-mint hover:bg-white/[0.07]",
};

/** Polymorphic button — renders an <a> when `href` is set, else a <button>. */
export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  full,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], full && "w-full", className);

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
