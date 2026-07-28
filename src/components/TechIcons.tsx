type IconProps = {
  className?: string;
};

/**
 * Simplified, brand-colored representations of each technology's mark.
 * Drawn as inline SVG (no external logo CDN/fetch) so the section stays
 * fast and works offline. Shapes are deliberately simplified rather than
 * pixel-exact trademark reproductions.
 */

export function PythonIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.9 2c-1.6 0-3 .1-4.2.4-3.7.7-4.4 2.1-4.4 4.7v3.4h8.8v1.1H4.3C1.7 11.6 0 13.6 0 16.9c0 3.4 1.5 5.3 4.3 6.3l3.2 1c-.2-1-.3-2-.3-3.1 0-3.2 1.8-5.7 5.3-5.7h6.9c2.9 0 5.2-2.4 5.2-5.3V7.1c0-2.8-.7-4.4-4.4-5.1C19 1.5 17.4 2 15.9 2Zm-4.8 2.7c.7 0 1.3.6 1.3 1.4 0 .8-.6 1.4-1.3 1.4-.7 0-1.3-.6-1.3-1.4 0-.8.6-1.4 1.3-1.4Z"
        fill="#3776AB"
      />
      <path
        d="M16.1 30c1.6 0 3-.1 4.2-.4 3.7-.7 4.4-2.1 4.4-4.7v-3.4h-8.8v-1.1h12c2.6 0 4.3-2 4.3-5.3 0-3.4-1.5-5.3-4.3-6.3l-3.2-1c.2 1 .3 2 .3 3.1 0 3.2-1.8 5.7-5.3 5.7h-6.9c-2.9 0-5.2 2.4-5.2 5.3v4.9c0 2.8.7 4.4 4.4 5.1 1.1.2 2.7-.3 4.2-.3Zm4.8-2.7c-.7 0-1.3-.6-1.3-1.4 0-.8.6-1.4 1.3-1.4.7 0 1.3.6 1.3 1.4 0 .8-.6 1.4-1.3 1.4Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function FastAPIIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" fill="#059669" />
      <path
        d="M14.8 5 6.5 17.2h6.1L11 27l9.5-13.4h-6.2L18.5 5h-3.7Z"
        fill="#fff"
      />
    </svg>
  );
}

export function DockerIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <g fill="#2496ED">
        <rect x="6" y="14" width="4.2" height="4" rx="0.5" />
        <rect x="11" y="14" width="4.2" height="4" rx="0.5" />
        <rect x="16" y="14" width="4.2" height="4" rx="0.5" />
        <rect x="11" y="9" width="4.2" height="4" rx="0.5" />
        <rect x="16" y="9" width="4.2" height="4" rx="0.5" />
        <rect x="16" y="19" width="4.2" height="4" rx="0.5" />
        <path d="M2.5 16.5c0 4.9 3.2 8 9.3 8 8.4 0 14.2-4 16.7-11.4-2 .3-3.4 0-4.3-1-.7 1-2.4 1.4-3.9.9-.3 1-1.5 1.5-2.8 1.2-.2.9-1.3 1.5-2.6 1.3-1.6-.2-2.5-1.3-2.4-2.7-1.6.1-3-1-3.1-2.6h-6c-.6 1.9-.9 4.1-.9 6.3Z" />
      </g>
    </svg>
  );
}

export function SolidityIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <g fill="#173B6C">
        <path d="M16 2 9 14l7-4 7 4-7-12Z" opacity="0.85" />
        <path d="M9 18l7 12 7-12-7 4-7-4Z" opacity="0.85" />
        <path d="M9 14 5 18l4 4 4-4-4-4Z" opacity="0.6" />
        <path d="M23 14l4 4-4 4-4-4 4-4Z" opacity="0.6" />
      </g>
    </svg>
  );
}

export function OpenAPIIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="none" stroke="#0EA5A8" strokeWidth="2.4" />
      <circle cx="16" cy="16" r="7.5" fill="none" stroke="#0EA5A8" strokeWidth="2.4" />
      <circle cx="16" cy="16" r="2.2" fill="#0EA5A8" />
    </svg>
  );
}
