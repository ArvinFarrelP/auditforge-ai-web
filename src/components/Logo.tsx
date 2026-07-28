type LogoProps = {
  className?: string;
};

/**
 * Official AuditForge AI mark. Sourced from a 1254x1254 master asset with
 * the background removed, so it stays crisp at any display size — the
 * <img> is served at native resolution and scaled down via CSS, which
 * keeps it sharp on retina displays.
 */
export default function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <img
      src="/logo-transparent.png"
      alt="AuditForge AI logo"
      className={`${className} object-contain`}
      width={512}
      height={512}
      decoding="async"
    />
  );
}
