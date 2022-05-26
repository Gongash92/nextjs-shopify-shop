// Layout and Styling for all single blog pages

import { getPostsDetails, getPosts } from "../../../lib/graphcms";
import moment from "moment";
import Markdown from "markdown-to-jsx";

// posts will be populated at build time by getStaticProps()
const postDet = ({ posts }) => {
  console.log(posts);
  return (
    <div className=" py-20 px-4 sm:px-0">
      <div className="relative max-w-5xl mx-auto">
        <div>
          <div className="">
            <h1 className="text-5xl pb-3 text-center text-ink-400 font-medium">
              {posts.title}
            </h1>
            <div className="text-sm text-center  text-gray-500">
              <time dateTime={posts.createdAt}>
                {moment(posts.createdAt).format("MMM DD, YYYY")}
              </time>
              <div className="my-4">
                <img
                  className="h-full w-full object-cover rounded-lg "
                  src={posts.image.url}
                  alt=""
                />
              </div>
            </div>

            <article className="prose lg:prose-xl px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
              <Markdown id="test">{posts.content}</Markdown>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

// get blog post by slug
export async function getStaticPaths() {
  const test = await getPosts();
  const paths = test.map((item) => {
    const handle = String(item.handle);

		//set default path because on production we get error
    const path = "slug-test";
    return {
      params: { primary: "lorem-lorem", handle: "lorem-lorem", slug: path },
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
  const data = await getPostsDetails(params.handle);
  return {
		// will be passed to the page component as props
    props: {
      posts: data,
    },
    revalidate: 1, // check server for new data
  };
}

export default postDet;
