const BlogPost = ({
  searchParams,
}: {
  searchParams: {
    title: string;
    subtitle: string;
    author: string;
    image: string;
    date: string;
    content: String;
  };
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={searchParams.image} alt="" className="p-4" />
      <h3 className="text-4xl ">{searchParams.title}</h3>
      <h3 className="text-2xl ">{searchParams.subtitle}</h3>
      <p>
        by {searchParams.author}, {searchParams.date}
      </p>
      <p className="text-lg px-40 py-4 whitespace-pre-line">
        {searchParams.content}
      </p>
    </div>
  );
};

export default BlogPost;
