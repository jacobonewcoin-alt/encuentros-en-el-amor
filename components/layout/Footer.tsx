import Link from "next/link";
import LogoSymbol from "@/components/ui/LogoSymbol";
import { facilitadora } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/actividades", label: "Actividades" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/acerca-de-mi", label: "Acerca de mí" },
  { href: "/grabaciones", label: "Grabaciones" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--tierra)] text-[var(--lino)]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Columna 1: Logo + tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <LogoSymbol size={36} variant="dark" />
              <span className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-wide text-[var(--lino)]">
                Encuentros en el Amor
              </span>
            </div>
            <p className="font-[family-name:var(--font-cormorant)] text-base font-light italic text-[var(--lino)] opacity-70 leading-relaxed max-w-[220px]">
              "{facilitadora.tagline}"
            </p>
            <div className="w-8 h-px bg-[var(--ambar)] opacity-50 mt-2" />
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] uppercase text-[var(--ambar)] mb-5">
              Navegación
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-jost)] text-sm font-light text-[var(--lino)] opacity-70 hover:opacity-100 hover:text-[var(--ambar)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] uppercase text-[var(--ambar)] mb-5">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${facilitadora.email}`}
                className="font-[family-name:var(--font-jost)] text-sm font-light text-[var(--lino)] opacity-70 hover:opacity-100 hover:text-[var(--ambar)] transition-colors duration-200"
              >
                {facilitadora.email}
              </a>
              <a
                href={`tel:${facilitadora.telefono}`}
                className="font-[family-name:var(--font-jost)] text-sm font-light text-[var(--lino)] opacity-70 hover:opacity-100 hover:text-[var(--ambar)] transition-colors duration-200"
              >
                {facilitadora.telefono}
              </a>
              <a
                href={facilitadora.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-jost)] text-sm font-light text-[var(--lino)] opacity-70 hover:opacity-100 hover:text-[var(--ambar)] transition-colors duration-200"
              >
                Blog: Recuperar el Paraíso ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--lino)] border-opacity-10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-[family-name:var(--font-jost)] text-[11px] tracking-widest uppercase text-[var(--ambar)] opacity-50">
            © {new Date().getFullYear()} Encuentros en el Amor
          </p>
          <p className="font-[family-name:var(--font-jost)] text-[11px] text-[var(--lino)] opacity-30">
            {facilitadora.nombre}
          </p>
        </div>
      </div>
    </footer>
  );
}
