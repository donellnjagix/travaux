// data/blogData.ts

export interface BlogPost {
    id: number;
    title: string;
    content: string;
  }
  
  const blogData: BlogPost[] = [
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the content of the first blog post.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "This is the content of the second blog post.",
    },
    // Add more blog posts as needed
  ];
  
  export default blogData;
  