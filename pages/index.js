import ProductList from "../components/ProductList";
import { getProductsInCollection, getTest } from "../lib/shopify";
import Hero from "../components/Hero";
import FrontFirstSection from "../components/FrontFirstSection";
import TrackYourDonation from "../components/TrackYourDonation";
import BecomeActive from "../components/BecomeActive";
import Blockqoute from "../components/Blockqoute";
import Logos from "../components/Logos";
import Faq from "../components/Faq";
import { getRecentBlogs } from "../lib/graphcms";
import RecentBlogs from "../components/RecentBlogs";

// posts and products will be populated at build time by getStaticProps()
export default function Home({ products, posts }) {
  console.log(products);

  return (
    <div className="">
      <FrontFirstSection />
      <ProductList products={products} />
      <TrackYourDonation />
      <BecomeActive />
      <Blockqoute />
      <Faq />
      <RecentBlogs posts={posts} />
    </div>
  );
}

// get products adn blog posts for index page
export async function getStaticProps() {
  const products = await getProductsInCollection();
  const posts = await getRecentBlogs();

  // will receive products and blogs as a prop at build time
  return {
    props: { products, posts },
    revalidate: 1, // check server for new data
  };
}
