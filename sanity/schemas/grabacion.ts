import { defineType, defineField } from 'sanity'

export const grabacion = defineType({
  name: 'grabacion',
  title: 'Grabaciones',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 }),
    defineField({ name: 'duracion', title: 'Duración (ej: 12 min)', type: 'string' }),
    defineField({
      name: 'tag',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Meditación', value: 'Meditación' },
          { title: 'Reflexión', value: 'Reflexión' },
          { title: 'Fragmento', value: 'Fragmento' },
        ],
      },
    }),
    defineField({
      name: 'archivo',
      title: 'Archivo de audio',
      type: 'file',
      options: { accept: 'audio/*' },
    }),
  ],
})
