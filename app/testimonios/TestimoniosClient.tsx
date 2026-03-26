"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { palabrasRetiro } from "@/lib/data";

interface Testimonio {
  _id: string;
  texto: string;
  nombre: string;
  actividad: string;
  fecha: string;
  destacado?: boolean;
}

interface Props {
  destacados: Testimonio[];
  resto: Testimonio[];
}

export default function TestimoniosClient({ destacados, resto }: Props) {
  return (
    <>
      {/* Hero interior */}
      <section
        className="pt-32 pb-16 lg:pb-20"
        style={{ background: "var(--crema-oscuro)" }}
      >
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <SectionLabel>Testimonios</SectionLabel>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(32px,5vw,56px)] font-light italic text-[var(--tierra)] leading-tight mt-2">
              Lo que dicen quienes han estado
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Testimonios destacados */}
      <section className="py-20 lg:py-28" style={{ background: "var(--arcilla)" }}>
        <div className="container-site flex flex-col gap-16">
          {destacados.map((t, i) => (
            <motion.div
              key={t._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(20px,2.8vw,28px)] font-light italic text-[var(--lino)] leading-relaxed mb-6">
                "{t.texto}"
              </blockquote>
              <p className="font-[family-name:var(--font-jost)] text-sm font-medium text-[var(--lino)]">
                {t.nombre}
              </p>
              <p className="font-[family-name:var(--font-jost)] text-[11px] text-[var(--lino)] opacity-50 mt-1">
                {t.actividad} · {t.fecha}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Grid resto testimonios */}
      <section className="py-20 lg:py-28" style={{ background: "var(--crema)" }}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionLabel>Más voces</SectionLabel>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
            {resto.map((t, i) => (
              <motion.div
                key={t._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[var(--lino)] rounded-xl p-6 mb-5 break-inside-avoid"
              >
                <blockquote className="font-[family-name:var(--font-cormorant)] text-lg font-light italic text-[var(--tierra)] leading-relaxed mb-4">
                  "{t.texto}"
                </blockquote>
                <div className="border-t border-[var(--arcilla)] border-opacity-20 pt-3">
                  <p className="font-[family-name:var(--font-jost)] text-[12px] font-medium text-[var(--arcilla)]">
                    {t.nombre}
                  </p>
                  <p className="font-[family-name:var(--font-jost)] text-[10px] text-[var(--texto-suave)] mt-0.5">
                    {t.actividad} · {t.fecha}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Palabras del retiro de Elosua */}
      <section className="py-20 lg:py-28" style={{ background: "var(--crema-oscuro)" }}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionLabel>Retiro de Elosua — Bergara, 2023</SectionLabel>
            <p className="font-[family-name:var(--font-jost)] text-[13px] font-light text-[var(--texto-suave)] mt-1">
              "Expresa con una palabra o frase lo que sientes que ha sido para ti este retiro"
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {palabrasRetiro.map((palabra, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="font-[family-name:var(--font-cormorant)] italic text-[var(--tierra)] bg-[var(--lino)] rounded-full px-5 py-2.5"
                style={{ fontSize: `${Math.max(14, 14 + (palabra.length < 15 ? 4 : 0))}px` }}
              >
                {palabra}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--salvia)" }}>
        <div className="container-site text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(24px,4vw,36px)] font-light text-[var(--lino)]">
              ¿Sientes que esto es para ti?
            </h2>
            <Button href="/contacto" variant="primary">
              Escríbeme →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
