import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface CounterProps {
  /** Numeric target, or a literal string like "24/7" rendered as-is. */
  value: number | string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

/** Counts up from 0 to `value` when it scrolls into view. */
export function Counter({ value, suffix = "", decimals = 0, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [started] = useState(true);

  // Non-numeric values (e.g. "24/7") render statically.
  const isNumeric = typeof value === "number";
  const display = useCountUp({
    target: isNumeric ? (value as number) : 0,
    decimals,
    start: isNumeric && inView && started,
  });

  return (
    <span ref={ref} className={className}>
      {isNumeric ? display : value}
      {suffix}
    </span>
  );
}
