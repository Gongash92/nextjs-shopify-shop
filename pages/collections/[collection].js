// Layout and Styling for all collection pages

import { getAllCollections, getTest } from "../../lib/shopify";
import Link from "next/link";
import { formatter } from "../../utils/helpers";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

// Dynamic tailwind classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Populating collection with posts at build time by getStaticProps()
export default function ProductPage({ collection }) {
  const products = collection.products.edges;
  // const  {originalSrc, altText}  = collection.products.edges.node.images.edges[0].node
  console.log(collection, products);

  return (
    <div>
      <div className="bg-white z-0">
        {/* Header */}
        <div className="relative pb-32 ">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src={collection.image.originalSrc}
              alt=""
            />
            <div
              className="absolute inset-0  mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-center tracking-tight text-white md:text-5xl lg:text-6xl">
              {collection.title}
            </h1>
        
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="bg-white  ">
            <div className="-mx-px border-l  border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <Link
                  href={`/products/${encodeURIComponent(product.node.handle)}`}
                >
                  <div
                    key={product.id}
                    className="group relative p-4 border-r border-b  border-gray-200 sm:p-6"
                  >
                    <div className="overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                      <img
                        src={product.node.images.edges[0].node.originalSrc}
                        alt={product.node.images.edges[0].node.altText}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="pt-10 pb-4 text-center">
                      <h3 className="text-sm font-medium text-gray-900">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.node.title}
                      </h3>
                      <div className="mt-3 flex flex-col items-center">
                        <p className="sr-only">
                          {product.rating} out of 5 stars
                        </p>
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                product.node.productType > rating
                                  ? "text-yellow-400"
                                  : "text-gray-200",
                                "flex-shrink-0 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.node.vendor} reviews
                        </p>
                      </div>
                      <p className="mt-4 text-base font-medium text-gray-900">
                        {formatter.format(
                          product.node.priceRange.minVariantPrice.amount
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    
    </div>
  );
}

// get products in collection from shopify
export async function getStaticPaths() {
  const collections = await getAllCollections();


  const paths = collections.map((item) => { // get all collections
    const handle = String(item.node.handle); // handle = slug

    return {
      params: { collection: handle },
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
  const collection = await getTest(params.collection);

  // will receive collection as a prop at build time
  return {
    props: {
      collection,
    },
    revalidate: 1, // check server for new data
  };
}
