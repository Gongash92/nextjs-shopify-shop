// Layout and Styling for all product pages

import ProductPageContent from "../../components/ProductPageContent";
import { getAllProducts, getProduct } from "../../lib/shopify";

// Populating products at build time by getStaticProps()
export default function ProductPage({ product }) {
  console.log(product.tag);

  return (
    <div className="min-h-screen">
      <ProductPageContent product={product} />
    </div>
  );
}

// Get single product from shopify
export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const handle = String(item.node.handle);

    return {
      params: { product: handle },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

// This function gets called at build time on server-side.
export async function getStaticProps({ params }) {

  // Call an external API endpoint to get collection
  const product = await getProduct(params.product);

  // will receive `products` as a prop at build time
  return {
    props: {
      product,
    },
    revalidate: 10, // check server for new data
  };
}
