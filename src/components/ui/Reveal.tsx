import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Slide-in direction. */
  y?: number;
  className?: string;
}

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

/** Fades + slides its children in when scrolled into view (once). */
export function Reveal({ children, delay = 0, y = 32, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={y}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
