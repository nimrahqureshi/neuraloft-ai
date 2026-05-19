import { Reveal } from "@/components/ui/Reveal";

const clients = ["Northwind", "Vertex Labs", "Quanta", "Bloomroom", "Helios Co.", "Driftpoint"];

/** Subtle "trusted by" logo strip below the hero. */
export function TrustStrip() {
  return (
    <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-2 pt-6 sm:px-7">
      <Reveal>
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          Built for teams that move fast
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 opacity-55">
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-[18px] font-bold tracking-[-0.02em] text-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
