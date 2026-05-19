import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * Soft neon glow that trails the cursor with easing.
 * Hidden on touch devices where there is no pointer.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const hasPointer = useMediaQuery("(hover: hover) and (pointer: fine)");

  useEffect(() => {
    if (!hasPointer) return;
    const el = ref.current;
    if (!el) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const render = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      el.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    render();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [hasPointer]);

  if (!hasPointer) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(70,230,201,0.10) 0%, rgba(126,116,255,0.06) 35%, transparent 70%)",
      }}
    />
  );
}
