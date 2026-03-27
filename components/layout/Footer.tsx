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

            {/* Redes sociales */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/encuentros_en_el_amor?igsh=MXZrcG9wNTVzY3Rteg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[var(--lino)] opacity-60 hover:opacity-100 hover:text-[var(--ambar)] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ENCUENTROSENELAMOR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[var(--lino)] opacity-60 hover:opacity-100 hover:text-[var(--ambar)] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
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
