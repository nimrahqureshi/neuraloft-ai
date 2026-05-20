import { brand } from "@/data/content";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

/** Neuraloft AI wordmark + glyph. */
export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn(
        "flex items-center gap-2.5 font-display text-[19px] font-extrabold tracking-[-0.02em]",
        className,
      )}
      aria-label={`${brand.name} ${brand.suffix} — home`}
    >
      <span className="relative h-[34px] w-[34px] shrink-0">
        <span className="absolute inset-0 rounded-[9px] bg-gradient-to-br from-mint to-indigo shadow-[0_0_22px_-4px_rgba(70,230,201,0.5)]" />
        <span className="absolute inset-[8px] rounded-[6px] bg-bg" />
        <span className="absolute left-[11px] top-[11px] h-3 w-3 rounded-full bg-gradient-to-br from-mint to-indigo" />
      </span>
      <span>
        {brand.name}
        <span className="text-mint">{brand.suffix}</span>
      </span>
    </a>
  );
}
