import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/content";

const stats = [
  { value: "24/7", label: "AI COVERAGE" },
  { value: "8s", label: "AVG RESPONSE" },
  { value: "12+", label: "INTEGRATIONS" },
  { value: "99%", label: "UPTIME SLA" },
];

const sparkBars = [30, 52, 41, 68, 55, 82, 74, 94];

const fadeUp = {
  hidden: { opacity: 0, y: 38 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.11, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as const },
  }),
};

/** Landing hero — headline, CTAs, trust stats and a faux automation console. */
export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24 pt-[150px] text-center sm:px-7 sm:pt-[170px]"
    >
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
        <Eyebrow>{brand.tagline}</Eyebrow>
      </motion.div>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mx-auto mt-7 max-w-[14ch] font-display text-[clamp(2.5rem,7.4vw,5.25rem)] font-extrabold leading-[1.04] tracking-[-0.035em]"
      >
        Automate Your Business With{" "}
        <span className="text-gradient">AI Employees</span>
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mx-auto mt-6 max-w-[600px] text-[clamp(1rem,2vw,1.18rem)] text-muted"
      >
        We build AI-powered workflows, chatbots and automation systems that handle support, sales
        and operations for modern businesses — 24/7.
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-9 flex flex-wrap justify-center gap-3.5"
      >
        <Button href="#contact">
          Book a Demo
          <ArrowRight size={16} />
        </Button>
        <Button href="#demo" variant="ghost">
          <Play size={15} />
          Watch AI Demo
        </Button>
      </motion.div>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-14 flex flex-wrap justify-center gap-x-11 gap-y-6"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-[26px] font-extrabold text-gradient">{s.value}</div>
            <div className="font-mono text-[11px] tracking-wide text-faint">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* faux automation console */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="border-glow mx-auto mt-16 max-w-[960px] overflow-hidden rounded-[18px] bg-gradient-to-b from-white/[0.045] to-white/[0.012] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
      >
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-stroke bg-white/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2.5 font-mono text-[11px] text-faint">
            neuraloft.ai / automation-console
          </span>
        </div>

        <div className="grid gap-px bg-stroke md:grid-cols-[1.6fr_1fr]">
          {/* main */}
          <div className="bg-bg-2 p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "Conversations", v: "1,284", up: true },
                { l: "Leads today", v: "37", up: true },
                { l: "Resolved", v: "96%", up: false },
              ].map((k) => (
                <div key={k.l} className="rounded-[10px] border border-stroke bg-white/[0.035] p-3">
                  <div className="font-mono text-[10px] uppercase tracking-wide text-faint">
                    {k.l}
                  </div>
                  <div
                    className={`mt-1 font-display text-[21px] font-bold ${
                      k.up ? "text-mint" : "text-ink"
                    }`}
                  >
                    {k.v}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex h-[90px] items-end gap-1.5">
              {sparkBars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-b from-mint to-mint/15"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1 + i * 0.07, duration: 0.7, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>

          {/* side mini chat */}
          <div className="bg-bg-2 p-5 text-left">
            <div className="mb-1 font-mono text-[10px] uppercase tracking-wide text-faint">
              Live AI agent
            </div>
            <div className="flex flex-col gap-2">
              <Bubble side="user">Book appointment tomorrow</Bubble>
              <Bubble side="bot">Scheduled for 2:00 PM ✓ Confirmation sent on WhatsApp.</Bubble>
              <Bubble side="user">Any leads today?</Bubble>
              <Bubble side="bot">3 new leads qualified &amp; pushed to your CRM.</Bubble>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Bubble({ side, children }: { side: "user" | "bot"; children: React.ReactNode }) {
  return (
    <div
      className={
        side === "user"
          ? "max-w-[90%] self-end rounded-[9px] border border-stroke bg-gradient-to-br from-mint/20 to-indigo/20 px-3 py-2 text-[12.5px]"
          : "max-w-[90%] self-start rounded-[9px] border border-stroke bg-white/[0.06] px-3 py-2 text-[12.5px]"
      }
    >
      {children}
    </div>
  );
}
