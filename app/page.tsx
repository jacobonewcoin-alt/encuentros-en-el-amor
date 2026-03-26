import { client } from '@/sanity/client'
import HomeClient from './HomeClient'

export const revalidate = 60

export default async function Home() {
  const [actividadesPreview, testimonioDestacado] = await Promise.all([
    client.fetch(`*[_type == "actividad"] | order(orden asc)[0...3]`),
    client.fetch(`*[_type == "testimonio" && destacado == true][0]`),
  ])

  return (
    <HomeClient
      actividadesPreview={actividadesPreview}
      testimonioDestacado={testimonioDestacado}
    />
  )
}
