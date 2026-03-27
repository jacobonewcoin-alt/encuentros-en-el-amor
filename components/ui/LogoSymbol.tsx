interface LogoSymbolProps {
  size?: number;
  variant?: "light" | "dark";
  className?: string;
}

export default function LogoSymbol({ size = 48, variant = "light", className = "" }: LogoSymbolProps) {
  const amber = "#C49A6C";
  const flameStroke = variant === "dark" ? "#E8D8C0" : "#5A3E2B";
  const flameOpacity = variant === "dark" ? "0.55" : "0.68";
  const dotFill = variant === "dark" ? "#E8D8C0" : "#5A3E2B";

  // viewBox natural del SVG es 90×140, lo escalamos manteniendo proporción
  const height = Math.round(size * 140 / 90);

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 90 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Llama exterior */}
      <path
        d="M45,132 C24,132 12,116 12,96 C12,78 20,62 28,46 C34,34 40,22 45,6
           C50,22 56,34 62,46 C70,62 78,78 78,96 C78,116 66,132 45,132 Z"
        fill="none"
        stroke={flameStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={flameOpacity}
      />
      {/* Espiral interior gruesa */}
      <path
        d="M45,118 C40,118 36,114 36,109 C36,104 40,100 45,100
           C51,100 57,104 59,110 C63,120 57,132 45,132
           C30,132 18,122 16,107 C14,90 22,74 34,60
           C42,50 52,42 56,30 C60,18 56,8 45,6"
        fill="none"
        stroke={amber}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Espiral interior fina */}
      <path
        d="M45,100 C51,100 57,104 59,110 C63,120 57,132 45,132
           C30,132 18,122 16,107 C14,90 22,74 34,60
           C42,50 52,42 56,30 C60,18 56,8 45,6"
        fill="none"
        stroke={amber}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Punto central */}
      <circle cx="45" cy="118" r="3.5" fill={dotFill} opacity="0.9" />
      <circle cx="45" cy="118" r="1.8" fill={amber} />
    </svg>
  );
}
