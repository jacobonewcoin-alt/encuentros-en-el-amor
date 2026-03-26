import { client } from '@/sanity/client'
import ActividadesClient from './ActividadesClient'

export const revalidate = 60

export default async function ActividadesPage() {
  const actividades = await client.fetch(`*[_type == "actividad"] | order(orden asc)`)
  return <ActividadesClient actividades={actividades} />
}
