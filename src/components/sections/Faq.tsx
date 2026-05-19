import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/content";

/** Accordion FAQ — one item open at a time. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:px-7">
      <SectionHeading
        center
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-gradient">answered.</span>
          </>
        }
      />

      <div className="mx-auto mt-12 flex max-w-[760px] flex-col gap-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 0.05}>
              <div className="overflow-hidden rounded-[14px] border border-stroke bg-white/[0.035]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-[22px] py-5 text-left font-display text-[15.5px] font-semibold"
                >
                  {item.q}
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-stroke transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-mint/15" : ""
                    }`}
                  >
                    <Plus size={13} className="text-mint" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                    >
                      <p className="px-[22px] pb-5 text-[14px] text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
