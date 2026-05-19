import { useState } from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/data/content";
import { cn } from "@/lib/cn";

/** Three-tier pricing with a monthly / yearly billing switch. */
export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:px-7">
      <SectionHeading
        center
        eyebrow="Pricing"
        title={
          <>
            Simple plans that <span className="text-gradient">scale with you.</span>
          </>
        }
        description="Start small, prove the ROI, then automate everything. No long contracts."
      />

      {/* billing toggle */}
      <Reveal>
        <div className="mt-10 flex items-center justify-center gap-3.5">
          <span
            className={cn(
              "text-[13.5px] font-medium",
              yearly ? "text-muted" : "text-ink",
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((v) => !v)}
            className={cn(
              "relative h-6 w-12 rounded-full border border-stroke transition-colors",
              yearly ? "bg-white/[0.1]" : "bg-white/[0.06]",
            )}
          >
            <span
              className={cn(
                "absolute top-[2px] h-[18px] w-[18px] rounded-full bg-gradient-to-br from-mint to-indigo transition-all",
                yearly ? "left-[25px]" : "left-[3px]",
              )}
            />
          </button>
          <span
            className={cn(
              "text-[13.5px] font-medium",
              yearly ? "text-ink" : "text-muted",
            )}
          >
            Yearly
          </span>
          <span className="rounded-full border border-stroke bg-mint/10 px-2 py-0.5 font-mono text-[10px] text-mint">
            Save 20%
          </span>
        </div>
      </Reveal>

      <div className="mt-11 grid gap-4 lg:grid-cols-3">
        {pricingPlans.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={cn(
                  "relative h-full rounded-[18px] border p-8 transition-transform duration-300 hover:-translate-y-1.5",
                  plan.featured
                    ? "border-mint bg-gradient-to-b from-mint/[0.07] to-white/[0.035] shadow-[0_30px_80px_-30px_rgba(70,230,201,0.4)]"
                    : "border-stroke bg-white/[0.035]",
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-mint to-indigo px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#04120f]">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-[18px] font-bold">{plan.name}</h3>
                <p className="mt-1.5 text-[13px] text-muted">{plan.blurb}</p>

                <div className="mt-5 font-display text-[46px] font-extrabold leading-none tracking-[-0.03em]">
                  {price === null ? (
                    "Custom"
                  ) : (
                    <>
                      ${price}
                      <span className="font-body text-[14px] font-medium text-faint">/mo</span>
                    </>
                  )}
                </div>

                <ul className="my-[22px] flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-muted">
                      <Check size={16} className="mt-0.5 shrink-0 text-mint" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  full
                  variant={plan.featured ? "primary" : "ghost"}
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
