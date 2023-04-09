import { groq } from 'next-sanity'
import { getClient } from '../../utils/sanity'

const allProjectsQuery = groq`*[_type == "project"] | order(_createdAt asc){
  id,
  title,
  desc,
  stack,
  link
}`

export default async function sanityGetProject(req, res) {
  const client = getClient()
  const allProjects = await client.fetch(allProjectsQuery)

  res.status(200).json(allProjects)
}
