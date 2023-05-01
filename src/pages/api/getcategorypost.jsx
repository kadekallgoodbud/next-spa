import { groq } from 'next-sanity';
import { getClient } from '../../utils/sanity';

const categoryQuery = groq`
  *[_type == "category" && slug.current == $slug] {
    _id,
    title,
    description
  }[0]
`;

const postsQuery = groq`
  *[_type == "post" && references($categoryRef)] {
    _id,
    title,
    slug,
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    _createdAt
  }
`;


export default async function getCategoryData(req, res) {
  const { slug } = req.query;

  try {
    const client = getClient();

    // Fetch the category data
    const category = await client.fetch(categoryQuery, { slug });

    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    // Fetch the posts related to the category
    const posts = await client.fetch(postsQuery, { categoryRef: category._id });

    res.status(200).json({ category, posts });
  } catch (error) {
    console.error('Error fetching category and posts:', error);
    res.status(500).json({ message: 'Error fetching category and posts' });
  }
}
