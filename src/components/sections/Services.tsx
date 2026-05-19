import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/content";

/** Grid of AI service cards with a cursor-tracking spotlight glow. */
export function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:px-7">
      <SectionHeading
        eyebrow="AI Services"
        title={
          <>
            One agency. <span className="text-gradient">A full AI workforce.</span>
          </>
        }
        description="Deploy specialized AI systems across every customer-facing function — each one built, trained and integrated for your business."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 0.08}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  tag,
  icon: Icon,
}: (typeof services)[number]) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="group relative h-full overflow-hidden rounded-2xl border border-stroke bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15"
    >
      {/* spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-50"
        style={{
          left: "var(--mx, 50%)",
          top: "var(--my, 50%)",
          background: "radial-gradient(circle, rgba(70,230,201,0.45), transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="mb-[18px] grid h-12 w-12 place-items-center rounded-[11px] border border-stroke bg-gradient-to-br from-mint/[0.18] to-indigo/[0.18]">
          <Icon size={22} className="text-mint" />
        </div>
        <h3 className="font-display text-[19px] font-bold">{title}</h3>
        <p className="mt-2 text-[14.5px] text-muted">{description}</p>
        <span className="mt-3.5 inline-block font-mono text-[10.5px] tracking-wide text-mint">
          // {tag}
        </span>
      </div>
    </div>
  );
}
