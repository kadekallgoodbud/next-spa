import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";


const fetcher = (url) => axios.get(url).then((res) => res.data);

function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const { data: post, error, isLoading } = useSWR(`/api/getdetailpost?slug=${slug}`, fetcher);

  if (error) return <div>Failed to load post</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      {post.body.map((content) => (
        <div key={content._key}>
          {content._type === "block" && (
            <>
              <p>{content.children[0].text}</p>
            </>
          )}
          {content._type === "image" && (
            <img src={content.asset.url} alt={content.alt} />
          )}
        </div>
      ))}
    </div>
  );
}

export default BlogPost;
