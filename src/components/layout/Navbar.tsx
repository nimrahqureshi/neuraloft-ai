import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/** Fixed navigation bar — turns to glass on scroll, collapses to a sheet on mobile. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-stroke bg-bg-2/80 py-3 backdrop-blur-xl"
          : "border-transparent py-[18px]",
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 sm:px-7">
        <Logo />

        {/* desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <Button href="#demo" variant="ghost" className="hidden sm:inline-flex">
            Watch Demo
          </Button>
          <Button href="#contact" className="hidden sm:inline-flex">
            Book Demo
          </Button>

          {/* mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-stroke bg-white/[0.04] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-stroke bg-bg-2/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[15px] font-medium text-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-3">
                <Button href="#demo" variant="ghost" full onClick={() => setOpen(false)}>
                  Watch Demo
                </Button>
                <Button href="#contact" full onClick={() => setOpen(false)}>
                  Book Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
