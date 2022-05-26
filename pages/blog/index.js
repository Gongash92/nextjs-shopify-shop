// Layout and Styling for all blog posts

import React from "react";
import BlogList from "../../components/BlogList";
import Subscribe from "../../components/Subscribe";
import { getPosts } from "../../lib/graphcms";

const blog = ({ posts }) => {
  // Stavljanje vrednosti
  // const articles = node.posts.articles.edges;

  console.log(posts);
  return (
    <div>
      <style jsx>{`
        .child:nth-child(n + 3) {
          order: 2;
        }
        .child:nth-child(1) {
          order: 1;
        }
      `}</style>
      <BlogList posts={posts} />
      <Subscribe></Subscribe>
    </div>
  );
};

// get all blog posts
export async function getStaticProps() {

  // Call an external API endpoint to get collection
  const posts = await getPosts();

  // will receive `blog posts` as a prop at build time
  return {
    props: { posts },
    revalidate: 1, // will be passed to the page component as props
  };
}

export default blog;
