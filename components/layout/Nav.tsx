"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LogoSymbol from "@/components/ui/LogoSymbol";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/actividades", label: "Actividades" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/acerca-de-mi", label: "Acerca de mí" },
  { href: "/grabaciones", label: "Grabaciones" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const showSolid = scrolled || !isHome || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolid ? "bg-[var(--tierra)] shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-14 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoSymbol size={32} variant="dark" />
            <span
              className="font-[family-name:var(--font-cormorant)] text-[var(--lino)] text-lg font-light tracking-wide leading-tight hidden sm:block"
            >
              Encuentros en el Amor
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-jost)] text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[var(--ambar)]"
                    : "text-[var(--lino)] opacity-80 hover:text-[var(--ambar)] hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="ml-2 font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] uppercase bg-[var(--ambar)] text-[var(--tierra)] px-4 py-2 transition-colors duration-200 hover:bg-[var(--lino)]"
            >
              Contacto →
            </Link>
          </nav>

          {/* Hamburger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block w-6 h-px bg-[var(--lino)] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[var(--lino)] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[var(--lino)] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--tierra)] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`font-[family-name:var(--font-cormorant)] text-3xl font-light transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-[var(--ambar)]"
                        : "text-[var(--lino)] hover:text-[var(--ambar)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06, duration: 0.3 }}
              >
                <Link
                  href="/contacto"
                  className="font-[family-name:var(--font-jost)] text-[11px] tracking-[0.2em] uppercase text-[var(--tierra)] bg-[var(--ambar)] px-6 py-3 mt-2 inline-block"
                >
                  Contacto →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
