"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const tipoLabels: Record<string, string> = {
  grupo: "Grupo",
  retiro: "Retiro",
  taller: "Taller",
};

const tipoColors: Record<string, string> = {
  grupo: "var(--arcilla)",
  retiro: "var(--salvia)",
  taller: "var(--ambar)",
};

interface Actividad {
  _id: string;
  tipo: string;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga?: string;
  lugar: string;
  fechaProxima?: string | null;
  sesiones?: string[];
}

export default function ActividadesClient({ actividades }: { actividades: Actividad[] }) {
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
            className="max-w-2xl"
          >
            <SectionLabel>Actividades</SectionLabel>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(32px,5vw,56px)] font-light text-[var(--lino)] leading-tight mt-2 mb-5">
              Retiros, grupos y encuentros
            </h1>
            <p className="font-[family-name:var(--font-jost)] text-[15px] font-light text-[var(--lino)] opacity-70 leading-relaxed">
              Nos acercamos a nuestra esencia para que brille con su mayor Luz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de actividades */}
      <section className="py-20 lg:py-28" style={{ background: "var(--crema)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actividades.map((act, i) => (
              <motion.article
                key={act._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[var(--lino)] rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  borderTop: `3px solid ${act.tipo === "retiro" ? "var(--salvia)" : act.tipo === "grupo" ? "var(--arcilla)" : "var(--ambar)"}`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border"
                    style={{
                      color: tipoColors[act.tipo],
                      borderColor: tipoColors[act.tipo],
                      opacity: 0.9,
                    }}
                  >
                    {tipoLabels[act.tipo]}
                  </span>
                  <span
                    className="font-[family-name:var(--font-jost)] text-[10px] text-right"
                    style={{ color: act.fechaProxima ? "var(--salvia)" : "var(--texto-suave)", opacity: act.fechaProxima ? 1 : 0.6 }}
                  >
                    {act.fechaProxima ?? "Próximamente"}
                  </span>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--tierra)] mb-3">
                    {act.nombre}
                  </h2>
                  <p className="font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto-suave)] leading-relaxed">
                    {act.descripcionCorta}
                  </p>
                  {act.descripcionLarga && (
                    <p className="font-[family-name:var(--font-jost)] text-[13px] font-light text-[var(--texto-suave)] leading-relaxed mt-3 opacity-80">
                      {act.descripcionLarga}
                    </p>
                  )}
                </div>

                {act.sesiones && (
                  <div className="bg-[var(--crema-oscuro)] rounded-xl p-5">
                    <p className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.2em] uppercase text-[var(--ambar)] mb-3">
                      Itinerario
                    </p>
                    <ol className="flex flex-col gap-1.5">
                      {act.sesiones.map((s, idx) => (
                        <li key={idx} className="flex gap-3 items-baseline">
                          <span className="font-[family-name:var(--font-cormorant)] text-xs text-[var(--ambar)] opacity-70 min-w-[18px]">
                            {idx + 1}.
                          </span>
                          <span className="font-[family-name:var(--font-jost)] text-[12px] font-light text-[var(--texto-suave)]">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[var(--crema-oscuro)]">
                  <p
                    className="font-[family-name:var(--font-jost)] text-[11px] opacity-80"
                    style={{ color: act.tipo === "retiro" ? "var(--salvia)" : "var(--ambar)" }}
                  >
                    {act.lugar}
                  </p>
                  <Button href="/contacto" variant="ghost">
                    Reservar plaza →
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog externo */}
      <section className="py-16" style={{ background: "var(--crema-oscuro)" }}>
        <div className="container-site max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--tierra)] rounded-2xl p-10 flex flex-col items-center gap-5"
          >
            <SectionLabel>El blog</SectionLabel>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[var(--lino)]">
              Recuperar el Paraíso
            </h2>
            <p className="font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--lino)] opacity-70 leading-relaxed max-w-md">
              "Abro esta ventana al mundo para asomarme y ver lo que me rodea, para compartir lo que bulle en mi interior y para contribuir con ese tono mío al color del Universo."
            </p>
            <Button href="https://recuperarelparaiso.blogspot.com/" variant="secondary" external>
              Leer el blog →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
