interface BlogPostCardProps {
  blogPost: {
    id: number;
    title: string;
    subtitle: string;
    author: string;
    image: string;
    date: string;
    content: string;
  };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ blogPost }) => {
  return (
    <div className="flex w-[600px] bg-neutral-600 h-[200px] rounded-lg ">
      <img src={blogPost.image} alt="" className="" />
      <div className="flex flex-col text-white m-3 w-full justify-around">
        <h3 className="text-2xl">{blogPost.title}</h3>
        <h4 className="text-lg text-neutral-200">{blogPost.subtitle}</h4>
        <div className="flex gap-2 text-neutral-200">
          <h5 className="text-sm">Author: {blogPost.author}</h5>
          <h5 className="text-sm">{blogPost.date}</h5>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
