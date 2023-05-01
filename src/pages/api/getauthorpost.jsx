import { groq } from "next-sanity";
import { getClient } from "../../utils/sanity";

const authorQuery = groq`
  *[_type == "author" && slug.current == $slug] {
    _id,
    name,
    image,
    bio,
  }[0]
`;

const postsQuery = groq`
  *[_type == "post" && author->_id == $authorId] {
    _id,
    title,
    slug,
    categories[]->{
      title,
      slug
    },
    author->{name},
    publishedAt
  }
`;

export default async function getAuthor(req, res) {
  const { slug } = req.query;
  const client = getClient();

  // Fetch the author's data
  const author = await client.fetch(authorQuery, { slug });

  if (!author) {
    res.status(404).json({ message: "Author not found" });
    return;
  }

  // Fetch the author's related posts
  const posts = await client.fetch(postsQuery, { authorId: author._id });

  res.status(200).json({ author, posts });
}
