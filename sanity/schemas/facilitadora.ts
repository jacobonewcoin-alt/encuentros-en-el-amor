import { defineType, defineField } from 'sanity'

export const facilitadora = defineType({
  name: 'facilitadora',
  title: 'Facilitadora',
  type: 'document',
  fields: [
    defineField({ name: 'nombre', title: 'Nombre', type: 'string' }),
    defineField({ name: 'rol', title: 'Rol', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'telefono', title: 'Teléfono', type: 'string' }),
    defineField({ name: 'blog', title: 'URL del blog', type: 'url' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'bio', title: 'Biografía', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'origen', title: 'El origen del proyecto', type: 'text' }),
    defineField({ name: 'citaFinal', title: 'Cita final', type: 'text' }),
  ],
})
