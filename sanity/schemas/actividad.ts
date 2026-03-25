import { defineType, defineField } from 'sanity'

export const actividad = defineType({
  name: 'actividad',
  title: 'Actividades',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tipo',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: 'Grupo', value: 'grupo' },
          { title: 'Retiro', value: 'retiro' },
          { title: 'Taller', value: 'taller' },
        ],
      },
    }),
    defineField({ name: 'descripcionCorta', title: 'Descripción corta', type: 'text', rows: 2 }),
    defineField({ name: 'descripcionLarga', title: 'Descripción larga', type: 'text', rows: 4 }),
    defineField({ name: 'lugar', title: 'Lugar', type: 'string' }),
    defineField({ name: 'fechaProxima', title: 'Fecha próxima', type: 'string' }),
    defineField({
      name: 'sesiones',
      title: 'Sesiones / Itinerario',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'orden', title: 'Orden de aparición', type: 'number' }),
  ],
  orderings: [{ title: 'Orden', name: 'ordenAsc', by: [{ field: 'orden', direction: 'asc' }] }],
})
