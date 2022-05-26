// Layout and Styling for all single blog pages

import Link from "next/link";
import Image from "next/image";
import { getCategorys, getCategory } from "../../../lib/graphcms";

const index = ({ posts }) => {
  const articles = posts.post;
  console.log(posts);
  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl uppercase tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {posts.name}
          </h1>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articles.map((article) => (
            <div>
              <div
                key={article.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={article.image.url}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link
                      href="/blog/[slug]/[handle]"
                      as={`/blog/${article.category.slug}/${article.handle}`}
                    >
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {article.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {article.excert}
                        </p>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// get category of blogs
export async function getStaticPaths() {
  const posts = await getCategorys();

  const paths = posts.map((item) => {
    const handle = String(item.slug);

    return {
      params: { primary: "blog/test", slug: handle },
    };
  });

  return {
    paths,
    fallback: "blocking", // wait for hthl to be generated and then be cached
  };
}

// This function gets called at build time on server-side.
export async function getStaticProps({ params }) {

	// Call an external API endpoint to get collection
  const data = await getCategory(params.slug);

	// will be passed to the page component as props
  return {
    props: {
      posts: data,
    },
    revalidate: 1, // check server for new data
  };
}

export default index;
