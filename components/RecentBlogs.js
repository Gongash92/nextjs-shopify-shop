import BlogsCardFront from "./BlogsCardFront";

const RecentBlogs = ({ posts }) => {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div>
        <h3 className="text-5xl text-center text-pesak-300">Blogs</h3>
      </div>
      <div className="mt-12   max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post) => (
          <BlogsCardFront key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
