"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { grabaciones } from "@/lib/data";

// Meditación/bienestar → salvia; Reflexión → arcilla; Fragmento → ambar (guía de marca)
const tagColors: Record<string, string> = {
  "Meditación": "var(--salvia)",
  "Reflexión":  "var(--arcilla)",
  "Fragmento":  "var(--ambar)",
};

function AudioCard({ grabacion, index }: { grabacion: typeof grabaciones[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
  };

  const onEnded = () => {
    setPlaying(false);
    setProgress(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[var(--lino)] rounded-2xl p-7 flex flex-col gap-5"
    >
      {/* Tag */}
      <span
        className="self-start font-[family-name:var(--font-jost)] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border"
        style={{ color: tagColors[grabacion.tag], borderColor: tagColors[grabacion.tag] }}
      >
        {grabacion.tag}
      </span>

      {/* Info */}
      <div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--tierra)] mb-2">
          {grabacion.titulo}
        </h3>
        <p className="font-[family-name:var(--font-jost)] text-[13px] font-light text-[var(--texto-suave)] leading-relaxed">
          {grabacion.descripcion}
        </p>
      </div>

      {/* Player */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer flex-shrink-0"
            style={{ background: "var(--ambar)" }}
            aria-label={playing ? "Pausar" : "Reproducir"}
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="1" width="4" height="12" fill="var(--tierra)" rx="1"/>
                <rect x="8" y="1" width="4" height="12" fill="var(--tierra)" rx="1"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 1.5L12 7L2 12.5V1.5Z" fill="var(--tierra)"/>
              </svg>
            )}
          </button>

          {/* Barra de progreso */}
          <div className="flex-1 h-px bg-[var(--crema-oscuro)] relative">
            <div
              className="absolute left-0 top-0 h-full transition-all duration-200"
              style={{ width: `${progress}%`, background: "var(--ambar)" }}
            />
          </div>

          <span className="font-[family-name:var(--font-jost)] text-[11px] text-[var(--texto-suave)] opacity-60">
            {grabacion.duracion}
          </span>
        </div>

        {/* Nota si el archivo no existe */}
        <p className="font-[family-name:var(--font-jost)] text-[10px] text-[var(--texto-suave)] opacity-40 italic">
          Archivo de audio próximamente disponible
        </p>
      </div>

      <audio
        ref={audioRef}
        src={grabacion.archivo}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
        preload="none"
      />
    </motion.div>
  );
}

export default function GrabacionesPage() {
  return (
    <>
      {/* Hero interior */}
      <section
        className="pt-32 pb-16 lg:pb-20"
        style={{ background: "var(--tierra)" }}
      >
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <SectionLabel>Grabaciones</SectionLabel>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(32px,5vw,56px)] font-light text-[var(--lino)] leading-tight mt-2 mb-5">
              Escucha, pausa, respira
            </h1>
            <p className="font-[family-name:var(--font-jost)] text-[15px] font-light text-[var(--lino)] opacity-70 leading-relaxed">
              Meditaciones, reflexiones y fragmentos de encuentros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de audios */}
      <section className="py-20 lg:py-28" style={{ background: "var(--crema)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grabaciones.map((g, i) => (
              <AudioCard key={g.id} grabacion={g} index={i} />
            ))}
          </div>

          {/* Nota */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-[var(--crema-oscuro)] rounded-2xl p-7 text-center max-w-lg mx-auto"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-lg font-light italic text-[var(--tierra)] leading-relaxed">
              "Una vez escuches, algo en ti ya no será igual."
            </p>
            <p className="font-[family-name:var(--font-jost)] text-[11px] text-[var(--ambar)] mt-3 tracking-widest uppercase">
              Carmela González
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA — salvia: "¿quieres vivir la experiencia?" = mensaje positivo/bienestar */}
      <section className="py-16" style={{ background: "var(--salvia)" }}>
        <div className="container-site text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(24px,3.5vw,36px)] font-light text-[var(--lino)]">
              ¿Quieres vivir la experiencia en persona?
            </h2>
            <Button href="/actividades" variant="secondary">
              Ver próximas actividades →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
