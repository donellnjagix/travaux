// pages/blog.tsx

import React from "react";
import Link from "next/link";
import { GetStaticProps } from 'next';
import blogData from '../blog/blogData';
import { BlogPost } from "../blog/blogData";
interface BlogProps {
  blogData: BlogPost[];
}

const Blog = ({ blogData }: BlogProps) => {
  return (
    <div>
      <h1>Blog</h1>
      {blogData.map((post) => (
        <div key={post.id}>
          <h2>
            <Link href={`/blog/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;


export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    // Fetch your blog data here (e.g., from an API or import from a data file)
    // For this example, we'll import the data from the mock data file
   

    return {
      props: {
        blogData,
      },
    };
  };