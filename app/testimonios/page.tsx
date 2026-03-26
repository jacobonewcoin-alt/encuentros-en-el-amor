import { client } from '@/sanity/client'
import TestimoniosClient from './TestimoniosClient'

export const revalidate = 60

export default async function TestimoniosPage() {
  const [destacados, resto] = await Promise.all([
    client.fetch(`*[_type == "testimonio" && destacado == true] | order(_createdAt asc)`),
    client.fetch(`*[_type == "testimonio" && (destacado == false || !defined(destacado))] | order(_createdAt asc)`),
  ])

  return <TestimoniosClient destacados={destacados} resto={resto} />
}
