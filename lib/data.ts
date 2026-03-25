// ── FACILITADORA ──────────────────────────────────────────
export const facilitadora = {
  nombre: "Carmela González",
  rol: "Facilitadora de retiros y encuentros",
  email: "encuentrosenelamor@gmail.com",
  telefono: "622 045 564",
  blog: "https://recuperarelparaiso.blogspot.com",
  tagline: "Abriendo espacios donde el Amor se hace presente",
};

// ── ACTIVIDADES ────────────────────────────────────────────
export type TipoActividad = "grupo" | "retiro" | "taller";

export interface Actividad {
  id: string;
  tipo: TipoActividad;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga?: string;
  lugar: string;
  fechaProxima: string | null;
  imagen?: string;
  sesiones?: string[];
}

export const actividades: Actividad[] = [
  {
    id: "grupos-encuentro",
    tipo: "grupo",
    nombre: "Grupos de Encuentro",
    descripcionCorta: "Nos acercamos a nuestra esencia para que brille con su mayor Luz.",
    descripcionLarga:
      "Un ciclo de 9 sesiones donde exploramos el Amor en todas sus dimensiones: desde el autoconocimiento hasta el amor en acción. Un espacio de encuentro genuino entre iguales.",
    lugar: "Candeleda (Ávila) · Online",
    fechaProxima: null,
    sesiones: [
      "El Amor en mí",
      "El Amor que nos une",
      "Mis actos de Amor en la vida cotidiana",
      "Los obstáculos en el fluir del Amor",
      "La magia del perdón",
      "Amor / Trabajo / Prosperidad",
      "El Amor en mi cuerpo",
      "Amor / Sensualidad / Sexualidad",
      "Amor y Espiritualidad. El Amor en acción.",
    ],
  },
  {
    id: "retiro-fin-semana",
    tipo: "retiro",
    nombre: "Retiro de Fin de Semana",
    descripcionCorta:
      "Una oportunidad para vivir desde el Amor en cada momento del día y compartir-nos.",
    lugar: "Por confirmar",
    fechaProxima: null,
  },
  {
    id: "retiro-profundizacion",
    tipo: "retiro",
    nombre: "Retiro de Profundización",
    descripcionCorta:
      "Nos sumergiremos en lo que significa comprender, aceptar y vivir el Amor que soy a través de los cuatro elementos y las cuatro puertas.",
    lugar: "Por confirmar",
    fechaProxima: null,
  },
  {
    id: "retiro-inmersion",
    tipo: "retiro",
    nombre: "Retiro de Inmersión",
    descripcionCorta:
      "Una experiencia de inmersión en el Amor que somos en contacto con la Naturaleza y con nuestro propio Ser. Unas vacaciones diferentes.",
    lugar: "Candeleda (Ávila) · Julio / Agosto",
    fechaProxima: null,
  },
  {
    id: "grupos-profundizacion",
    tipo: "grupo",
    nombre: "Grupos de Profundización",
    descripcionCorta:
      "¿Te imaginas vivir desde el Amor en cada momento del día a día y poderlo compartir?",
    descripcionLarga:
      "Cuatro bloques temáticos: Presencia / Consciencia / Fuerza Interior / Acción · El Arte de sentir / Sentir / Intuición · Ser / Conexión / Gratitud · Unidad / Fraternidad / Comprensión.",
    lugar: "Bergara · Guipuzcoa (Online)",
    fechaProxima: null,
  },
  {
    id: "padres-madres",
    tipo: "taller",
    nombre: "Encuentros para Padres y Madres",
    descripcionCorta:
      "Una mirada desde el Amor para acompañar a la siguiente generación.",
    lugar: "Por confirmar",
    fechaProxima: null,
  },
  {
    id: "adolescentes",
    tipo: "taller",
    nombre: "Encuentros para Adolescentes",
    descripcionCorta: "¿Qué es en realidad el Amor? Un buen momento para aclarar dudas.",
    lugar: "Por confirmar",
    fechaProxima: null,
  },
];

// ── TESTIMONIOS ────────────────────────────────────────────
export interface Testimonio {
  id: string;
  texto: string;
  nombre: string;
  actividad: string;
  fecha: string;
  destacado?: boolean;
}

export const testimonios: Testimonio[] = [
  {
    id: "rosa-wild",
    texto:
      "Crear un espacio para tomar conciencia de cómo vivimos y manifestamos el Amor. Parar el ruido y las prisas del día a día para escuchar el bombeo de nuestro corazón. Y conseguir que su ritmo nos marque el camino. El taller 'Encuentros en el Amor' es un oasis reflexivo, una pausa para activar lo que de verdad importa.",
    nombre: "Rosa Wild",
    actividad: "Grupo Candeleda",
    fecha: "2022",
    destacado: true,
  },
  {
    id: "ana",
    texto:
      "'Encuentros en el Amor' para mí realmente es 'encuentro con el Amor que soy'. Es una porción de tiempo en la que estoy conmigo misma, conociéndome, perdonándome, amándome... Carmela, de manera sabia y sutil, plantea el ejercicio, el canal que siempre desemboca en nuestro Ser, ayudándonos a conocernos sin traumas, de forma tranquila. Logra crear un ambiente placentero, de sosiego inmenso en el que no sientes vergüenza, culpa, sólo aceptación y Amor por ti misma. Lo que experimento y aprendo en esas dos horas de encuentro se prolonga y me acompaña de una manera increíble en el tiempo.",
    nombre: "Ana",
    actividad: "Grupo Candeleda",
    fecha: "2022",
  },
  {
    id: "ine",
    texto:
      "Encuentros en el amor es un espacio para la reflexión, guiada y en grupo, sobre el Amor como energía que nos mueve, que nos nutre y nos hace bien. Nos ayuda a poner la atención en el amor en nuestro día a día, en nuestra manera de leer y entender el mundo, en nuestras relaciones y en nuestras acciones... El resultado, en mi caso: sentirme más feliz, más conectada, más en calma, más presente. ¡Encuentros en el amor es un regalo!",
    nombre: "Ine",
    actividad: "Grupo Candeleda",
    fecha: "2022",
  },
  {
    id: "laura-1",
    texto:
      "Para mí, 'Encuentros en el Amor' es una invitación a parar, soltar el piloto automático del día a día y poner atención en una misma, reflexionando acerca de cómo es esto de dar y recibir amor, fijarse en los pequeños actos de amor que pueden pasar desapercibidos por ir con demasiada prisa.",
    nombre: "Laura",
    actividad: "Grupo Candeleda",
    fecha: "2022",
  },
  {
    id: "alejandra-1",
    texto:
      "Los 'Encuentros en el Amor' son para mí el explorar una nueva manera de estar en el mundo. Una manera que se aleja del individualismo, que se aleja del egoísmo y el pensar todo el rato en lo que falta. Para mí, la filosofía que plantea Carmela en sus talleres es la clave para revolucionar el mundo, para subirlo de nivel.",
    nombre: "Alejandra",
    actividad: "Grupo Candeleda",
    fecha: "2022",
  },
  {
    id: "beatriz",
    texto:
      "La magia de encontrarnos con nosotras mismas y con nuestro propio poder de la mano de Carmela, es un auténtico regalo.",
    nombre: "Beatriz",
    actividad: "Grupo Candeleda",
    fecha: "2022",
    destacado: true,
  },
  {
    id: "sarah",
    texto:
      "Siento que me has dado el toque de seguridad, el toque de paz y el toque de amor para mirar dentro de mí y mis conexiones. Utilidad para la vida cotidiana: 10. ¿He crecido en Amor?: sí, conmigo misma, con mi familia y con otras personas.",
    nombre: "Sarah",
    actividad: "Grupo Candeleda",
    fecha: "2022",
  },
  {
    id: "laura-2",
    texto:
      "Han significado un parón en mi mes para poder reflexionar acerca de la vida, de las diferentes facetas del amor. También la oportunidad de llevarme estos encuentros a mi día a día, poniendo más presencia. Me llevo tardes de compartir bonito y sincero en un ambiente de confianza. Utilidad: 10.",
    nombre: "Laura",
    actividad: "Grupo Candeleda",
    fecha: "2022",
  },
  {
    id: "alejandra-2",
    texto:
      "Me llevo mucho amor. En serio, mucho. Una nueva forma de ver el mundo que me hace más feliz. Utilidad para la vida cotidiana: 9. ¿He crecido en Amor?: 10.",
    nombre: "Alejandra",
    actividad: "Grupo Candeleda",
    fecha: "2022",
  },
  {
    id: "cristina",
    texto:
      "Estos encuentros me han aportado alegría, cariño, generosidad de miras. He sentido amor hacia todas mis compañeras y sus distintas preocupaciones y me he sentido enriquecida por todo lo que me han enseñado. ¡He despertado!",
    nombre: "Cristina",
    actividad: "Grupo Candeleda",
    fecha: "2023",
  },
  {
    id: "carmen",
    texto:
      "Alegría, aprendizaje, luz, amor, compañía, risas, conocernos mejor, amistades nuevas.",
    nombre: "Carmen",
    actividad: "Grupo Candeleda",
    fecha: "2023",
  },
  {
    id: "mercedes",
    texto:
      "Estos encuentros me han aportado más conocimiento sobre mis cualidades, me valoro más y he sido consciente del Amor que soy. Muchas gracias, Carmela, por estos maravillosos encuentros en el Amor.",
    nombre: "Mercedes",
    actividad: "Grupo Candeleda",
    fecha: "2023",
  },
  {
    id: "cadi",
    texto:
      "Me gustan mucho. Hay sinceridad, amistad, experiencia de otras personas, confianza, diversión. Un espacio bonito que no esperaba encontrar en Candeleda.",
    nombre: "Cadi",
    actividad: "Grupo Candeleda",
    fecha: "2023",
  },
  {
    id: "ignasi",
    texto:
      "Completar un ciclo de 3 años, con una reflexión me da la oportunidad, más que cerrar, de completar con un abrirme a las oportunidades que se me han abierto. Sin ninguna duda la mejor es la amistad cómplice que se ha forjado con temple y suavidad al mismo tiempo, al igual que tu curso. Curso lleno de simplicidad y claridad que me lleva naturalmente a un lugar profundo.",
    nombre: "Ignasi S.",
    actividad: "Retiro Vacaciones",
    fecha: "2023",
    destacado: true,
  },
  {
    id: "nathalie",
    texto:
      "Pues primero darte las gracias por ese taller que nos diste. Yo he notado una transformación en mí. Me quiero más y miro más por mí. Creo que tu taller me ha ayudado mucho a afrontar muchos momentos que he vivido en mis últimos meses tan tristes. Eres muy especial.",
    nombre: "Nathalie",
    actividad: "Retiro Vacaciones",
    fecha: "2023",
  },
];

// Palabras del retiro de Elosua (para mostrar como nube poética)
export const palabrasRetiro = [
  "Conexión con lo que soy en esencia. ¡Felicidad!",
  "Hermoso",
  "Una fiesta de hermandad",
  "Descubrimiento. Conexión. Plenitud.",
  "Quiérete. Autoamor. Soy Puro Amor.",
  "Yosotras",
  "Reencuentro",
  "Apertura",
  "Calma. Descanso. Confianza.",
  "Alquimia. Renacer. Fuerza. Revelador.",
  "Unicidad = Unidad",
  "Amor, consciencia y crecer.",
  "Una invitación a elegir la paz. Una caricia para el corazón.",
];

// ── GRABACIONES (placeholder) ──────────────────────────────
export interface Grabacion {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: string;
  tag: "Meditación" | "Reflexión" | "Fragmento";
  archivo: string;
}

export const grabaciones: Grabacion[] = [
  {
    id: "meditacion-amor",
    titulo: "Meditación: El amor que soy",
    descripcion: "Una invitación a encontrarte con la esencia de amor que ya eres.",
    duracion: "12 min",
    tag: "Meditación",
    archivo: "/audio/meditacion-amor.mp3",
  },
  {
    id: "reflexion-perdon",
    titulo: "Reflexión: La magia del perdón",
    descripcion: "Fragmento del encuentro sobre el perdón como acto de amor hacia uno mismo.",
    duracion: "8 min",
    tag: "Reflexión",
    archivo: "/audio/reflexion-perdon.mp3",
  },
  {
    id: "fragmento-encuentro",
    titulo: "Fragmento de encuentro grupal",
    descripcion: "Un momento de uno de nuestros grupos de Candeleda. La voz de Carmela acompañando.",
    duracion: "15 min",
    tag: "Fragmento",
    archivo: "/audio/fragmento-encuentro.mp3",
  },
];
