// pages/blog/[id].tsx

import React from "react";
import { useRouter } from "next/router";
import { BlogPost } from "../../data/blogData";

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostPage = ({ post }: BlogPostProps) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
