import { client } from '@/sanity/client'
import ContactoClient from './ContactoClient'

export const revalidate = 60

export default async function ContactoPage() {
  const facilitadora = await client.fetch(`*[_type == "facilitadora"][0]{ email, telefono, blog }`)
  return <ContactoClient facilitadora={facilitadora} />
}
