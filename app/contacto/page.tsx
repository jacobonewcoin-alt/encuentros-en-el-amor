"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { facilitadora } from "@/lib/data";

const opciones = [
  "Una actividad concreta",
  "El proyecto en general",
  "Quiero formar un grupo en mi ciudad",
  "Colaboración",
  "Otro",
];

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulación de envío — conectar con Resend/Formspree en .env.local
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
  };

  return (
    <>
      {/* Hero interior */}
      <section
        className="pt-32 pb-0"
        style={{ background: "var(--tierra)" }}
      >
        <div className="container-site pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-sm"
          >
            <SectionLabel>Contacto</SectionLabel>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,5vw,60px)] font-light text-[var(--lino)] leading-tight mt-2">
              Hablemos
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Layout 2 columnas */}
      <section className="py-16 lg:py-24" style={{ background: "var(--crema)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Columna izquierda — info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-8"
            >
              <p className="font-[family-name:var(--font-jost)] text-[15px] font-light text-[var(--texto-suave)] leading-relaxed max-w-sm">
                Si sientes que algo dentro de ti está llamando, escríbeme. No hace falta tenerlo todo claro.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${facilitadora.email}`}
                  className="flex items-start gap-4 group"
                >
                  <span className="text-[var(--ambar)] mt-0.5 text-lg">✉</span>
                  <div>
                    <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[var(--ambar)] mb-1">
                      Email
                    </p>
                    <p className="font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto)] group-hover:text-[var(--ambar)] transition-colors duration-200">
                      {facilitadora.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${facilitadora.telefono}`}
                  className="flex items-start gap-4 group"
                >
                  <span className="text-[var(--ambar)] mt-0.5 text-lg">📞</span>
                  <div>
                    <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[var(--ambar)] mb-1">
                      Teléfono
                    </p>
                    <p className="font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto)] group-hover:text-[var(--ambar)] transition-colors duration-200">
                      {facilitadora.telefono}
                    </p>
                  </div>
                </a>

                <a
                  href={facilitadora.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <span className="text-[var(--ambar)] mt-0.5 text-lg">📝</span>
                  <div>
                    <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[var(--ambar)] mb-1">
                      Blog
                    </p>
                    <p className="font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto)] group-hover:text-[var(--ambar)] transition-colors duration-200">
                      recuperarelparaiso.blogspot.com ↗
                    </p>
                  </div>
                </a>
              </div>

              {/* Quote */}
              <div className="border-l-2 border-[var(--ambar)] pl-5 mt-4">
                <p className="font-[family-name:var(--font-cormorant)] text-xl font-light italic text-[var(--tierra)] leading-relaxed">
                  "No hace falta saber si estás listo/a.<br />
                  Solo necesitas sentir que algo dentro de ti está llamando."
                </p>
              </div>
            </motion.div>

            {/* Columna derecha — formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {sent ? (
                /* Confirmación → salvia según guía de marca */
                <div className="bg-[var(--salvia)] rounded-2xl p-10 flex flex-col items-center gap-5 text-center">
                  <div className="text-4xl text-[var(--lino)]">✦</div>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--lino)]">
                    Mensaje recibido
                  </h2>
                  <p className="font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--lino)] opacity-80 leading-relaxed">
                    Gracias por escribir. Carmela te responderá pronto.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[var(--lino)] rounded-2xl p-8 flex flex-col gap-6"
                >
                  {/* Nombre */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[var(--ambar)]">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      className="bg-transparent border-b border-[var(--crema-oscuro)] pb-2 font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto)] focus:outline-none focus:border-[var(--ambar)] transition-colors duration-200 placeholder:text-[var(--texto-suave)] placeholder:opacity-40"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[var(--ambar)]">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="bg-transparent border-b border-[var(--crema-oscuro)] pb-2 font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto)] focus:outline-none focus:border-[var(--ambar)] transition-colors duration-200 placeholder:text-[var(--texto-suave)] placeholder:opacity-40"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Asunto */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[var(--ambar)]">
                      ¿Sobre qué quieres preguntar?
                    </label>
                    <select
                      className="bg-transparent border-b border-[var(--crema-oscuro)] pb-2 font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto)] focus:outline-none focus:border-[var(--ambar)] transition-colors duration-200 cursor-pointer"
                    >
                      {opciones.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[var(--ambar)]">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="bg-transparent border-b border-[var(--crema-oscuro)] pb-2 font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto)] focus:outline-none focus:border-[var(--ambar)] transition-colors duration-200 resize-none placeholder:text-[var(--texto-suave)] placeholder:opacity-40"
                      placeholder="Cuéntame lo que quieras..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="self-start font-[family-name:var(--font-jost)] text-[11px] tracking-[0.2em] uppercase bg-[var(--tierra)] text-[var(--lino)] px-7 py-3.5 transition-colors duration-200 hover:bg-[var(--arcilla)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {sending ? "Enviando..." : "Enviar mensaje →"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
