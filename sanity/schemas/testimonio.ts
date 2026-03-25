import { defineType, defineField } from 'sanity'

export const testimonio = defineType({
  name: 'testimonio',
  title: 'Testimonios',
  type: 'document',
  fields: [
    defineField({ name: 'nombre', title: 'Nombre', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'texto', title: 'Testimonio', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'actividad', title: 'Actividad / Grupo', type: 'string' }),
    defineField({ name: 'fecha', title: 'Año', type: 'string' }),
    defineField({ name: 'destacado', title: 'Destacado en portada', type: 'boolean', initialValue: false }),
  ],
})
