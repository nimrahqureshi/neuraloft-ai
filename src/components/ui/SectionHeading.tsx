import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}

/** Standard section header: eyebrow pill + title + optional description. */
export function SectionHeading({ eyebrow, title, description, center }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.05] tracking-[-0.02em]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-[17px] leading-relaxed text-muted">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
