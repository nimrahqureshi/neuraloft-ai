import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: string;
  className?: string;
}

/** Small monospace pill used above section headings. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-stroke bg-white/[0.035] px-3.5 py-1.5",
        "font-mono text-[11px] uppercase tracking-[0.18em] text-mint",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_var(--color-mint)]" />
      {children}
    </span>
  );
}
