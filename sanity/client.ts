import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'igwh1bnp',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
