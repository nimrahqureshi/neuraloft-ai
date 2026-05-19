/** Layered atmospheric background: drifting gradient mesh + faded grid. */
export function Background() {
  return (
    <>
      {/* drifting gradient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(620px 480px at 78% 8%, rgba(126,116,255,0.16), transparent 70%),
            radial-gradient(560px 520px at 12% 34%, rgba(70,230,201,0.13), transparent 70%),
            radial-gradient(700px 600px at 60% 96%, rgba(126,116,255,0.10), transparent 70%)`,
          animation: "drift 22s ease-in-out infinite alternate",
        }}
      />
      {/* faint grid, masked toward the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 28%, #000 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 28%, #000 0%, transparent 80%)",
        }}
      />
    </>
  );
}
