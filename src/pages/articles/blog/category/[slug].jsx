import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link';

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data: categoryData, error: categoryError } = useSWR(`/api/getcategorypost?slug=${slug}`, fetcher);

  if (categoryError) {
    return <div>Error fetching category data</div>;
  }

  if (!categoryData) {
    return <div>Loading...</div>;
  }
  console.log(categoryData);
  const { category, posts } = categoryData;

  return (
    <div>
      <h1>Category: {category.title}</h1>
      <h2>Description: {category.description}</h2>

      <h3>Posts:</h3>
      <ul>
        {posts.map((post) => (
          <>
            <Link href={`/articles/blog/${post.slug.current}`}>
              <li key={post._id}>{post.title}</li>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
}
