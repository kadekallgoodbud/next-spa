import { groq } from "next-sanity";
import { getClient } from "../../utils/sanity";

const allPostQuery = groq`
  *[_type == "post"] {
    _id,
    title,
    slug,
    categories[]->{
      title,
      slug
    },
    author->{
      name,
      slug,
      image{
        asset->{
          url
        }
      }
    },
    featuredImage,
    body[]{
      ...,
      asset->{
        _id,
        url
      }
    },
    _createdAt
  } | order(_createdAt desc)
`;

export default async function getallpost(req, res) {
  const client = getClient();
  const allPost = await client.fetch(allPostQuery);

  res.status(200).json(allPost);
}
