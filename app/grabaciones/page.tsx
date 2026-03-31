"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const videos = [
  {
    id: "FsbPh05D3TA",
    titulo: "Descansando en el Interior",
    descripcion: "Una invitación a soltar el ruido exterior y encontrar el silencio que siempre estuvo ahí.",
    tag: "Relajación Creativa",
  },
  {
    id: "JDtusIPtNdI",
    titulo: "Conciencia y Amor",
    descripcion: "Meditación guiada para despertar la presencia y conectar con el amor que somos.",
    tag: "Relajación Creativa",
  },
  {
    id: "9-WhrCfuPrQ",
    titulo: "Aliento y Latido",
    descripcion: "Respiración y pulso como puertas de entrada al momento presente.",
    tag: "Relajación Creativa",
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[var(--lino)] rounded-2xl overflow-hidden flex flex-col border-l-[3px] border-[var(--ambar)]"
    >
      {/* Vídeo YouTube */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Info */}
      <div className="p-7 flex flex-col gap-3 flex-1">
        <span
          className="self-start font-[family-name:var(--font-jost)] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border"
          style={{ color: "var(--salvia)", borderColor: "var(--salvia)" }}
        >
          {video.tag}
        </span>
        <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--tierra)]">
          {video.titulo}
        </h3>
        <p className="font-[family-name:var(--font-jost)] text-[13px] font-light text-[var(--texto-suave)] leading-relaxed">
          {video.descripcion}
        </p>
      </div>
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
            <SectionLabel>Meditaciones</SectionLabel>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(32px,5vw,56px)] font-light text-[var(--lino)] leading-tight mt-2 mb-5">
              Pausa, respira, entra
            </h1>
            <p className="font-[family-name:var(--font-jost)] text-[15px] font-light text-[var(--lino)] opacity-70 leading-relaxed">
              Relajaciones creativas para encontrarte contigo mismo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de vídeos */}
      <section className="py-20 lg:py-28" style={{ background: "var(--crema)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} />
            ))}
          </div>

          {/* Cita */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-[var(--crema-oscuro)] rounded-2xl p-7 text-center max-w-lg mx-auto border-l-[3px] border-[var(--ambar)]"
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
