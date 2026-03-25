import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-[family-name:var(--font-jost)] text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--tierra)] text-[var(--lino)] px-7 py-3.5 hover:bg-[var(--arcilla)] hover:translate-x-0.5",
    secondary:
      "border border-[var(--ambar)] text-[var(--ambar)] px-7 py-3.5 hover:bg-[var(--ambar)] hover:text-[var(--tierra)]",
    ghost:
      "text-[var(--ambar)] hover:text-[var(--tierra)] underline-offset-4 hover:underline p-0",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
