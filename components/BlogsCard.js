import Link from "next/link";
import Image from "next/image";

const BlogsCard = ({ post }) => {
  const { handle, title, excert, category, image } = post.node;

  return (
    <div key={title} className="flex flex-col p-4 shadow-lg overflow-hidden sm:p-6 child bg-white">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image.url} alt="" />
      </div>
      <div className="flex-1 bg-white pt-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex space-x-2">
            <div>
              <p className="text-sm font-medium uppercase text-gray-400">
                <Link href="/blog/[slug]" as={`/blog/${category.slug}`}>
                  <a className="hover:underline">{category.name}</a>
                </Link>
              </p>
            </div>
            <div>
              {/* <p className="text-sm font-medium uppercase text-gray-400 ">
                2min
              </p> */}
            </div>
          </div>
          <Link
            href="/blog/[slug]/[handle]"
            as={`/blog/${category.slug}/${handle}`}
          >
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{excert}</p>
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

export default BlogsCard;
