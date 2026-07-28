type OKXLogoProps = {
  className?: string;
};

/**
 * Official OKX mark, used as-is (not redrawn) wherever we reference the
 * OKX.AI Marketplace listing. Background removed from the source asset;
 * colors are untouched.
 */
export default function OKXLogo({ className = "h-4 w-4" }: OKXLogoProps) {
  return (
    <img
      src="/okx-logo.png"
      alt="OKX"
      className={`${className} object-contain`}
      width={128}
      height={128}
      decoding="async"
    />
  );
}
