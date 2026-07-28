/**
 * Restrained background treatment for the light, docs-style theme: a flat
 * canvas color with a very soft brand-colored glow anchored behind the
 * hero, plus a faint dot grid for texture. No blur-heavy glassmorphism,
 * no motion — this sits behind all content and stays quiet.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      <div
        className="absolute -top-48 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full opacity-[0.10] blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse, #3b82f6 0%, #0ea5a8 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(#d9e2ec 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 55%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 55%)",
        }}
      />
    </div>
  );
}
