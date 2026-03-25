"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const trayectoria = [
  {
    titulo: "Maestra y educadora (40 años)",
    texto:
      "Formación en la Escuela de Magisterio, especialidad en Educación Infantil. Psicopedagogía en la Universidad Complutense de Madrid. Desde 1977, dedicada a estar con los más pequeños en la etapa en que descubrimos el mundo. Ha trabajado en la Escuela Pública de Granada, Comunidad de Madrid, Extremadura y Andorra. Coordinó equipos, lanzó iniciativas innovadoras como las aulas abiertas, trabajó en el Plan de Integración de NEE, dirigió Escuelas Infantiles Rurales, fue asesora de Educación Infantil y colaboró con el Máster de Atención Temprana de la UCM.",
  },
  {
    titulo: "Autora y escritora",
    texto:
      "Coautora del libro «Atención Temprana» (Universidad Complutense). Artículos en revistas como Conciencia Global. Poemario «Tres diosas y un gato» junto a Beatriz Hornero (poeta) y Almudena Arias (pintora). En proceso: segundo libro de poemas «Latido de Vida» y memorias «Memorias de una estrella fugaz».",
  },
  {
    titulo: "Camino de desarrollo personal",
    texto:
      "Desde los 30 años, ha profundizado en el conocimiento de sí misma: Psicología, Yoga, Tai-Chi, Danza, Expresión Corporal, Masaje Sensitivo Gestáltico, Psicomotricidad, Meditación Vipassana, Zen, Vichara, Tantra. Ha dado formación en «El Arte de Vivir Feliz» junto a su maestra Mary Llamazares, animado el «Seminario sobre el Amor» y facilitado «Tantra y masaje para parejas» con su compañero Philippe Després.",
  },
  {
    titulo: "Blog: Recuperar el Paraíso",
    texto:
      "Mantiene el blog Recuperar el Paraíso donde publica sus escritos y comparte lo que le mueve. Un espacio de reflexión abierto al mundo.",
  },
];

export default function AcercaDeMiPage() {
  return (
    <>
      {/* Hero / Presentación */}
      <section
        className="pt-32 pb-20 lg:pb-28"
        style={{ background: "var(--crema)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Sobre mí</SectionLabel>
              <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,5vw,60px)] font-light text-[var(--tierra)] leading-tight mt-2 mb-2">
                Carmela González
              </h1>
              <p className="font-[family-name:var(--font-jost)] text-[11px] tracking-[0.18em] uppercase text-[var(--ambar)] mb-8">
                Facilitadora de retiros y encuentros
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Si tuviera que destacar algún rasgo identificativo, diría que me guía la curiosidad, las ganas de aprender y la pasión por vivir.",
                  "Agradezco cada día esta experiencia humana tan rica, diversa y estimulante.",
                  "Me siento al servicio de la Vida y en este momento, conectada con el Amor que soy y que es la energía que sostiene el universo.",
                  "Procurar los «Encuentros en el Amor» es mi tarea y mi gozo. Llamar a la puerta de los corazones y mostrarles que son Puro Amor. Compartir la alegría de este descubrimiento en nuestras vidas, me hace feliz.",
                  "Admiro la grandeza del ser humano y me produce ternura su pequeñez.",
                  "Siento que estoy en el momento adecuado y en el lugar correcto. Aquí y ahora.",
                ].map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                    className="font-[family-name:var(--font-jost)] text-[15px] font-light text-[var(--texto-suave)] leading-relaxed"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Decoración visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex flex-col items-center justify-center min-h-[400px]"
            >
              <div
                className="w-full rounded-3xl flex flex-col items-center justify-center gap-6 p-12"
                style={{ background: "var(--tierra)" }}
              >
                <svg width="80" height="80" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="45" cy="45" r="40" fill="none" stroke="#C49A6C" strokeWidth="0.8" opacity="0.4"/>
                  <path d="M45,18 C28,24 26,40 45,48 C26,56 28,68 45,72 C28,68 22,52 26,36 Z" fill="#C49A6C" opacity="0.5"/>
                  <path d="M45,18 C62,24 64,40 45,48 C64,56 62,68 45,72 C62,68 68,52 64,36 Z" fill="#8B5E52" opacity="0.5"/>
                  <circle cx="45" cy="50" r="6" fill="#E8D8C0" opacity="0.9"/>
                  <circle cx="45" cy="50" r="3" fill="#C49A6C"/>
                  <circle cx="45" cy="22" r="3" fill="#C49A6C" opacity="0.9"/>
                </svg>
                <p className="font-[family-name:var(--font-cormorant)] text-xl font-light italic text-[var(--lino)] text-center leading-relaxed opacity-80">
                  "A mis 74 años, sé que, mientras tenga fuerza y salud, seguiré aprendiendo de la Vida y compartiendo la maravilla de esta experiencia humana."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* El origen */}
      <section className="py-20 lg:py-28" style={{ background: "var(--tierra)" }}>
        <div className="container-site max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>El origen</SectionLabel>
            <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(24px,4vw,40px)] font-light italic text-[var(--lino)] leading-relaxed my-6">
              "El Universo se mueve por Amor"
            </blockquote>
            <p className="font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--lino)] opacity-70 leading-relaxed">
              A los 15 años tuve una experiencia de revelación que traía este mensaje. Desde ese momento, mi vida ha estado girando en torno a esta verdad. Hoy, el ciclo se cierra y siento la llamada a compartir mi experiencia vital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trayectoria — lino como fondo de sección alternativo */}
      <section className="py-20 lg:py-28" style={{ background: "var(--lino)" }}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionLabel>Trayectoria</SectionLabel>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(26px,4vw,40px)] font-light text-[var(--tierra)]">
              Una vida en continuo aprendizaje
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trayectoria.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--crema)] rounded-2xl p-8 border-l-[3px] border-[var(--salvia)]"
              >
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--tierra)] mb-4">
                  {item.titulo}
                </h3>
                <p className="font-[family-name:var(--font-jost)] text-[13px] font-light text-[var(--texto-suave)] leading-relaxed">
                  {item.texto}
                </p>
                {item.titulo.includes("Blog") && (
                  <div className="mt-4">
                    <Button href="https://recuperarelparaiso.blogspot.com" variant="ghost" external>
                      Visitar el blog →
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cita final + CTA */}
      <section className="py-20 lg:py-28" style={{ background: "var(--crema-oscuro)" }}>
        <div className="container-site max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6"
          >
            <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(18px,2.5vw,26px)] font-light italic text-[var(--tierra)] leading-relaxed">
              "A mis 74 años, sé que, mientras tenga fuerza y salud, seguiré aprendiendo de la Vida y compartiendo la maravilla de esta experiencia humana, con pasión y gratitud."
            </blockquote>
            <cite className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] uppercase text-[var(--ambar)] not-italic">
              — Carmela González
            </cite>
            <div className="w-8 h-px bg-[var(--ambar)] opacity-50" />
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--tierra)]">
              ¿Quieres conocerme antes de apuntarte?
            </h3>
            <p className="font-[family-name:var(--font-jost)] text-[14px] font-light text-[var(--texto-suave)]">
              Puedes escribirme directamente. Me alegra hablar contigo.
            </p>
            <Button href="/contacto" variant="primary">
              Escribir a Carmela →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
