import BlogsCard from "./BlogsCard";
import BlogCta from "./BlogCta";
import FeaturedPost from "./FeaturedPost";

const BlogList = ({ posts }) => {
  return (
    <div className="bg-white">
      <FeaturedPost></FeaturedPost>
			<div className="max-w-6xl mx-auto pb-24">
      <div className="mt-12   max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <BlogCta></BlogCta>

        {posts.map((post) => (
          <BlogsCard key={post.title} post={post} />
        ))}
      </div>
    </div>
		</div>
  );
};

export default BlogList;
