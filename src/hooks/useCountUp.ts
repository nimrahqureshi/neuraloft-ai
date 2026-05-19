import { useEffect, useRef, useState } from "react";

interface Options {
  /** Final value to count to. */
  target: number;
  /** Animation duration in ms. */
  duration?: number;
  /** Decimal places to keep. */
  decimals?: number;
  /** When true, the count animation starts. */
  start: boolean;
}

/**
 * Animates from 0 to `target` with an ease-out curve once `start` is true.
 * Returns the current display value as a string.
 */
export function useCountUp({ target, duration = 1600, decimals = 0, start }: Options): string {
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(target * eased);
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [target, duration, start]);

  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
