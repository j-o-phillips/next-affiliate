import Link from "next/link";
import BlogPostCard from "../components/BlogPostCard";
import blogPosts from "../content/blogposts";

const Blog = () => {
  return (
    <div className="flex items-center flex-col">
      <h2 className="text-4xl py-4">Blog</h2>
      <div className=" w-full flex gap-4 flex-wrap justify-center">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={{
              pathname: `/blog/${post.id}`,
              query: {
                title: post.title,
                subtitle: post.subtitle,
                author: post.author,
                image: post.image,
                date: post.date,
                content: post.content,
              },
            }}
          >
            <BlogPostCard blogPost={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
