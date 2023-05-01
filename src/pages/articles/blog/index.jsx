import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Layout } from '@/layout/layout';
import BlogHero from '@/sections/Articles/Blog/HeroBlog';
import ListBlog from '@/sections/Articles/Blog/ListBlog';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/getallpost');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <>
      <Layout>
        <div className="min-h-screen">
          <div className=' mx-auto w-3/5 h-[350px]'>
            <BlogHero />
            <ListBlog data_post={posts} />
          </div>
        </div>
      </Layout>
    </>
  );
}
