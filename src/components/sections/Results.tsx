import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { resultMetrics, testimonials } from "@/data/content";

/** Outcome metrics + testimonials. Figures are placeholders to be replaced. */
export function Results() {
  return (
    <section className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:px-7">
      <SectionHeading
        eyebrow="Outcomes"
        title={
          <>
            Results our automations are <span className="text-gradient">built to deliver.</span>
          </>
        }
        description="Typical impact targets we design Neuraloft systems around. Replace these with your own verified client numbers as you complete projects."
      />

      {/* metrics */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resultMetrics.map((m, i) => (
          <Reveal key={m.label} delay={(i % 4) * 0.07}>
            <div className="relative overflow-hidden rounded-2xl border border-stroke bg-white/[0.035] px-6 py-8 text-center">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint to-transparent" />
              <div className="font-display text-[clamp(2.1rem,5vw,2.9rem)] font-extrabold tracking-[-0.03em] text-gradient">
                <Counter value={m.value} suffix={m.suffix} decimals={m.decimals} />
              </div>
              <div className="mt-1.5 text-[13.5px] text-muted">{m.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* testimonials */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-2xl border border-stroke bg-bg-2 p-6">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} className="fill-mint text-mint" />
                ))}
              </div>
              <p className="mb-[18px] text-[14px] leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="h-[38px] w-[38px] shrink-0 rounded-full bg-gradient-to-br from-mint to-indigo" />
                <div>
                  <b className="block text-[13px] font-semibold">{t.name}</b>
                  <span className="font-mono text-[11.5px] text-faint">{t.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-[18px] text-center font-mono text-[11px] text-faint">
        // Stats and testimonials above are placeholders — replace with verified client data
        before going live.
      </p>
    </section>
  );
}
