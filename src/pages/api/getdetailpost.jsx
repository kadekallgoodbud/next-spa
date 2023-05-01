import { groq } from "next-sanity";
import { getClient } from "../../utils/sanity";

const detailPostQuery = groq`
  *[_type == "post" && slug.current == $slug] {
    _id,
    title,
    slug,
    categories[]->{
      title,
      slug
    },
    author->{name},
    featuredImage,
    body[]{
      ...,
      asset->{
        _id,
        url
      }
    },
    publishedAt
  }[0]
`;

export default async function getPostBySlug(req, res) {
  const { slug } = req.query;
  const client = getClient();
  const post = await client.fetch(detailPostQuery, { slug });

  if (!post) {
    res.status(404).json({ message: "There's no post found for this slug" });
  } else {
    res.status(200).json(post);
  }
}
