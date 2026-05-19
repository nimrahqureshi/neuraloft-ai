import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
import { brand } from "@/data/content";

const columns = [
  {
    title: "Services",
    links: ["AI Chatbots", "WhatsApp Automation", "CRM AI", "Lead Generation"],
    href: "#services",
  },
  {
    title: "Company",
    links: ["How It Works", "Pricing", "FAQ", "Book a Demo"],
    hrefs: ["#workflow", "#pricing", "#faq", "#contact"],
  },
  {
    title: "Connect",
    links: ["LinkedIn", "X / Twitter", "Instagram", brand.email],
    href: "#",
  },
];

/* Inline brand marks — lucide-react 1.x no longer ships brand icons. */
const socials: { label: string; icon: ReactNode }[] = [
  {
    label: "LinkedIn",
    icon: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    ),
  },
  { label: "X", icon: <path d="M4 4l16 16M20 4L4 20" /> },
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </>
    ),
  },
];

/** Footer with brand blurb, link columns, socials and legal line. */
export function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-stroke">
      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-7">
        <div className="grid grid-cols-2 gap-9 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[280px] text-[13.5px] text-muted">
              An AI automation agency building chatbots, workflows and automation systems for
              modern businesses.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                {col.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {col.links.map((label, i) => (
                  <a
                    key={label}
                    href={col.hrefs ? col.hrefs[i] : col.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-mint"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-11 flex flex-wrap items-center justify-between gap-4 border-t border-stroke pt-6">
          <p className="text-[12.5px] text-faint">
            © {new Date().getFullYear()} {brand.name} {brand.suffix}. All rights reserved. · A demo
            brand — replace with your real business details.
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="group grid h-9 w-9 place-items-center rounded-lg border border-stroke transition-colors hover:border-mint hover:bg-white/[0.04]"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted transition-colors group-hover:text-mint"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
