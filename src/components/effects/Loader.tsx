import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { brand } from "@/data/content";

const messages = [
  "Initializing AI systems...",
  "Loading neural workflows...",
  "Calibrating automations...",
  "Connecting integrations...",
  "Ready.",
];

interface LoaderProps {
  onComplete: () => void;
}

/** Full-screen cinematic loader shown on first paint. */
export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 16 + 7);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 520);
        }
        return next;
      });
    }, 230);
    return () => clearInterval(interval);
  }, [onComplete]);

  const msgIndex = Math.min(messages.length - 1, Math.floor(progress / 22));

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-display text-[13px] font-extrabold uppercase tracking-[0.4em] text-mint">
        {brand.name}&nbsp;{brand.suffix}
      </div>

      <div className="h-[54px] w-[54px] animate-spin-slow rounded-full border-2 border-white/[0.07] border-r-indigo border-t-mint" />

      <div className="h-0.5 w-[230px] overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-mint to-indigo transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="min-h-[16px] font-mono text-[11px] tracking-wide text-faint">
        {messages[msgIndex]}
      </div>
      <div className="font-mono text-[11px] text-muted">{Math.floor(progress)}%</div>
    </motion.div>
  );
}
