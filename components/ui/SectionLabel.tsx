interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <p
      className={`font-[family-name:var(--font-jost)] text-[10px] font-medium tracking-[0.25em] uppercase mb-3 ${
        light ? "text-[var(--ambar)]" : "text-[var(--ambar)]"
      } ${className}`}
    >
      {children}
    </p>
  );
}
