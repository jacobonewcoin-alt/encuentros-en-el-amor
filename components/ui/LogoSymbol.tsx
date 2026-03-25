interface LogoSymbolProps {
  size?: number;
  variant?: "light" | "dark";
  className?: string;
}

export default function LogoSymbol({ size = 48, variant = "light", className = "" }: LogoSymbolProps) {
  const amber = "#C49A6C";
  const clay = "#8B5E52";
  const tierra = "#5A3E2B";
  const lino = "#E8D8C0";
  const centerFill = variant === "dark" ? lino : tierra;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="45" cy="45" r="40" fill="none" stroke={amber} strokeWidth="0.8" opacity="0.4" />
      <path
        d="M45,18 C28,24 26,40 45,48 C26,56 28,68 45,72 C28,68 22,52 26,36 Z"
        fill={amber}
        opacity="0.5"
      />
      <path
        d="M45,18 C62,24 64,40 45,48 C64,56 62,68 45,72 C62,68 68,52 64,36 Z"
        fill={clay}
        opacity="0.5"
      />
      <circle cx="45" cy="50" r="6" fill={centerFill} opacity="0.9" />
      <circle cx="45" cy="50" r="3" fill={amber} />
      <circle cx="45" cy="22" r="3" fill={amber} opacity="0.9" />
    </svg>
  );
}
