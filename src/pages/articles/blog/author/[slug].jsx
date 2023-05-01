import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link"

const fetcher = (url) => axios.get(url).then((res) => res.data);

function AuthorPage() {
  const router = useRouter();
  const { slug } = router.query;


  const { data: author, error: authorError } = useSWR(`/api/getauthorpost?slug=${slug}`, fetcher)

  if (authorError) return <div>Failed to load author data</div>
  if (!author) return <div>Loading...</div>

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
      <h2>Posts</h2>
      <ul>
        {author.posts.map((post) => (
          <li key={post.slug.current}>
            <Link href={`/articles/blog/${post.slug.current}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.publishedAt}</p>
            <p>{post.author.name}</p>
            <ul>
              {post.categories.map((category) => (
                <li key={category.slug}>{category.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorPage;
