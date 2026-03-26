"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LogoSymbol from "@/components/ui/LogoSymbol";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { actividades, testimonios } from "@/lib/data";


const pilares = [
  {
    icon: "◎",
    titulo: "Presencia",
    texto:
      "Cada elemento invita a detenerse. No es un taller de autoayuda: es un espacio donde lo esencial puede emerger.",
  },
  {
    icon: "◑",
    titulo: "Encuentro",
    texto:
      "Contigo mismo y con el otro. Desde la igualdad, sin jerarquías, donde el Amor se hace presente.",
  },
  {
    icon: "◐",
    titulo: "Transformación",
    texto:
      "Lenta, real, profunda. Como los procesos de la naturaleza: sin prisa, sin forzar.",
  },
];

export default function Home() {
  const testimonioDestacado = testimonios.find((t) => t.id === "rosa-wild")!;
  const actividadesPreview = actividades.slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "var(--tierra)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 110%, rgba(196,154,108,0.13) 0%, transparent 70%),
              radial-gradient(ellipse 60% 40% at 20% 0%, rgba(139,94,82,0.1) 0%, transparent 60%)
            `,
          }}
        />

        <div className="relative z-10 container-site text-center flex flex-col items-center gap-6 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <LogoSymbol size={72} variant="dark" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[var(--ambar)]"
          >
            Retiros · Encuentros · Comunidad
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(38px,7vw,72px)] font-light italic text-[var(--lino)] leading-[1.15] max-w-3xl"
          >
            Abriendo espacios donde<br />
            <em style={{ fontStyle: "italic" }}>el Amor se hace presente</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-[family-name:var(--font-jost)] text-[15px] font-light text-[var(--lino)] opacity-70 max-w-lg leading-relaxed"
          >
            Un espacio de encuentro entre iguales para adultos en búsqueda.
            <br />
            Presencia · Vínculo · Transformación interior.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 mt-2"
          >
            <Button href="/actividades" variant="secondary">
              Ver próximas actividades →
            </Button>
            <Button href="/acerca-de-mi" variant="secondary">
              Conoce el proyecto
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-px h-8 bg-[var(--ambar)] opacity-40 animate-pulse" />
            <span className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.2em] uppercase text-[var(--ambar)] opacity-50">
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── PILARES ──────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "var(--crema-oscuro)" }}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>La esencia</SectionLabel>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(26px,4vw,40px)] font-light text-[var(--tierra)]">
              ¿Qué son los Encuentros en el Amor?
            </h2>
          </motion.div>

          {/* Tarjetas sobre lino — guía: "tarjetas de contenido, fondos alternativos" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((p, i) => (
              <motion.div
                key={p.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--lino)] rounded-2xl p-8 border-l-[3px] border-[var(--ambar)]"
              >
                <div className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--ambar)] mb-4 leading-none">
                  {p.icon}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--tierra)] mb-3">
                  {p.titulo}
                </h3>
                <p className="font-[family-name:var(--font-jost)] text-[13px] font-light text-[var(--texto-suave)] leading-relaxed">
                  {p.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRASE DE MARCA ───────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "var(--tierra)" }}>
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-8 h-px bg-[var(--ambar)] opacity-50 mx-auto mb-10" />
            <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(22px,3.5vw,34px)] font-light italic text-[var(--lino)] leading-relaxed mb-6">
              "Llamar a la puerta de los corazones y mostrarles que son Puro Amor."
            </blockquote>
            <cite className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] uppercase text-[var(--ambar)] not-italic">
              — Carmela González
            </cite>
            <div className="w-8 h-px bg-[var(--ambar)] opacity-50 mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIO DESTACADO ─────────────────── */}
      {/* Arcilla = color asignado a testimonios según guía de marca */}
      <section className="py-20 lg:py-28" style={{ background: "var(--arcilla)" }}>
        <div className="container-site max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <SectionLabel className="opacity-80">Testimonios</SectionLabel>
            <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(20px,3vw,30px)] font-light italic text-[var(--lino)] leading-relaxed mb-6 mt-4">
              "{testimonioDestacado.texto}"
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <p className="font-[family-name:var(--font-jost)] text-sm font-medium text-[var(--lino)]">
                {testimonioDestacado.nombre}
              </p>
              <p className="font-[family-name:var(--font-jost)] text-[11px] text-[var(--lino)] opacity-60 tracking-wide">
                {testimonioDestacado.actividad} · {testimonioDestacado.fecha}
              </p>
            </div>
            <div className="mt-8">
              <Button href="/testimonios" variant="secondary">
                Leer más testimonios →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PREVIEW ACTIVIDADES ──────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "var(--blanco)" }}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <SectionLabel>Actividades</SectionLabel>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(26px,4vw,40px)] font-light text-[var(--tierra)]">
                Próximas propuestas
              </h2>
            </div>
            <Button href="/actividades" variant="ghost">
              Ver todas →
            </Button>
          </motion.div>

          {/* Tarjetas sobre lino — guía: "tarjetas de contenido" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actividadesPreview.map((act, i) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--lino)] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="flex items-center justify-between">
                  {/* grupo→arcilla, retiro→salvia, taller→ambar según guía */}
                  <span
                    className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border"
                    style={{
                      color: act.tipo === "grupo" ? "var(--arcilla)" : act.tipo === "retiro" ? "var(--salvia)" : "var(--ambar)",
                      borderColor: act.tipo === "grupo" ? "var(--arcilla)" : act.tipo === "retiro" ? "var(--salvia)" : "var(--ambar)",
                    }}
                  >
                    {act.tipo}
                  </span>
                  {act.fechaProxima ? (
                    <span className="font-[family-name:var(--font-jost)] text-[10px] text-[var(--salvia)]">
                      {act.fechaProxima}
                    </span>
                  ) : (
                    <span className="font-[family-name:var(--font-jost)] text-[10px] text-[var(--texto-suave)] opacity-60">
                      Próximamente
                    </span>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--tierra)] group-hover:text-[var(--arcilla)] transition-colors duration-200">
                  {act.nombre}
                </h3>
                <p className="font-[family-name:var(--font-jost)] text-[13px] font-light text-[var(--texto-suave)] leading-relaxed flex-1">
                  {act.descripcionCorta}
                </p>
                <p className="font-[family-name:var(--font-jost)] text-[11px] text-[var(--ambar)] opacity-70">
                  {act.lugar}
                </p>
                <Link
                  href="/actividades"
                  className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[var(--tierra)] hover:text-[var(--ambar)] transition-colors duration-200 mt-auto"
                >
                  Más información →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "var(--crema-oscuro)" }}>
        <div className="container-site text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-5"
          >
            <SectionLabel>¿Sientes que es para ti?</SectionLabel>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(28px,4vw,44px)] font-light text-[var(--tierra)]">
              Escríbeme. Hablamos.
            </h2>
            <p className="font-[family-name:var(--font-jost)] text-[15px] font-light text-[var(--texto-suave)] leading-relaxed">
              No hace falta saber si estás listo/a.
              <br />
              Solo necesitas sentir que algo dentro de ti está llamando.
            </p>
            <Button href="/contacto" variant="primary">
              Contactar →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
