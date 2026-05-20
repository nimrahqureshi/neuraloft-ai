import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const perks = [
  "No-pressure, no-jargon demo call",
  "A custom automation plan for your business",
  "Clear pricing & timeline before you commit",
];

type ToastState = { kind: "success" | "error"; msg: string } | null;

/** Contact section: lead-capture form (front-end only) with a confirmation toast. */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", goal: "" });
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(id);
  }, [toast]);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setToast({ kind: "error", msg: "Please add your name and email first." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setToast({ kind: "error", msg: "That email doesn't look quite right." });
      return;
    }
    setToast({
      kind: "success",
      msg: `Thanks ${form.name.split(" ")[0]} — your demo request is in. We'll reply within one business day.`,
    });
    setForm({ name: "", email: "", company: "", goal: "" });
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:px-7">
      <Reveal>
        <div className="grid overflow-hidden rounded-[22px] border border-stroke bg-gradient-to-b from-white/[0.04] to-white/[0.01] lg:grid-cols-2">
          {/* left */}
          <div className="border-b border-stroke p-8 sm:p-11 lg:border-b-0 lg:border-r">
            <Eyebrow>Book a Demo</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.6rem,3.5vw,2.35rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              Let's automate the <span className="text-gradient">boring parts</span> of your
              business.
            </h2>
            <p className="mt-3.5 text-[15px] text-muted">
              Tell us a bit about your business and we'll show you exactly what Neuraloft can
              automate — in a free 20-minute walkthrough.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2.5 text-[14px]">
                  <Check size={18} className="shrink-0 text-mint" />
                  {perk}
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-xl border border-dashed border-stroke p-4 font-mono text-[12px] text-faint">
              📅 Prefer to pick a time yourself? Embed your Calendly link here — replace this box
              with your scheduler.
            </div>
          </div>

          {/* right — form */}
          <div className="flex flex-col gap-3.5 p-8 sm:p-11">
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Full name">
                <input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Cooper"
                  className={inputCls}
                />
              </Field>
              <Field label="Work email">
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@company.com"
                  className={inputCls}
                />
              </Field>
            </div>
            <Field label="Company">
              <input
                value={form.company}
                onChange={update("company")}
                placeholder="Company name"
                className={inputCls}
              />
            </Field>
            <Field label="What do you want to automate?">
              <textarea
                value={form.goal}
                onChange={update("goal")}
                placeholder="e.g. WhatsApp replies, lead capture, appointment booking..."
                className={`${inputCls} min-h-[84px] resize-y`}
              />
            </Field>
            <Button onClick={submit} full type="button">
              Book My Demo
              <ArrowRight size={16} />
            </Button>
            <p className="text-center font-mono text-[11px] text-faint">
              // We'll reply within one business day.
            </p>
          </div>
        </div>
      </Reveal>

      {/* toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.35 }}
            className={`fixed bottom-7 left-1/2 z-[80] flex max-w-[90vw] -translate-x-1/2 items-center gap-2.5 rounded-xl border bg-bg-2 px-5 py-3.5 text-[13.5px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] ${
              toast.kind === "success" ? "border-mint" : "border-amber"
            }`}
          >
            <Check
              size={18}
              className={toast.kind === "success" ? "text-mint" : "text-amber"}
            />
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const inputCls =
  "w-full rounded-[10px] border border-stroke bg-bg px-3.5 py-3 text-[14px] outline-none transition-colors focus:border-mint";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-faint">
        {label}
      </span>
      {children}
    </label>
  );
}
