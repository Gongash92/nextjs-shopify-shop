import Link from "next/link";
import Image from "next/image";

const BlogListCard = ({ post }) => {

  return (
    <div
      key={post.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={post.image.url}
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <Link href="/blog/[blogs]" as={`/blog/${post.handle}`}>
              <a className="hover:underline">{post.title}</a>
            </Link>
          </p>
          <Link
            href="/blog/[blogs]/[article]"
            as={`/blog/${blog.handle}/${handle}`}
          >
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{post.title}</p>
              <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
            </a>
          </Link>
        </div>
        {/* <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div> */}
      </div>
    </div>
  );
};

export default BlogListCard;
