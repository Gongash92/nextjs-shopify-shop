import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import RecommendedList from "./RecommendedList";
import Donation from "./Donation";
import { formatter } from "../utils/helpers";
import Reviews from "./Reviews";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ProductPageContent({ product }) {

	// IMAGE SLIDER
  // const images = [];

  // product.images.edges.map((image, i) => {
  //   images.push(
  //     <SwiperSlide key={`slide-${i}`}>
  //       <Image
  //         src={image.node.originalSrc}
  //         alt={image.node.altText}
  //         layout="fill"
  //         objectFit="cover"
  //       />
  //     </SwiperSlide>
  //   );
  // });

  // SwiperCore.use([Navigation, Pagination]);

  return (
    <div className="bg">
      <div className=" max-w-2xl mx-auto  lg:max-w-6xl lg:grid lg:grid-cols-3 ">
        <div className=" aspect-w-3 aspect-h-4  overflow-hidden lg:block">
          <img
            src={product.images.edges[0].node.originalSrc}
            alt={product.images.edges[0].node.altText}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="aspect-w-4 aspect-h-5  sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <img
            src={product.images.edges[3].node.originalSrc}
            alt={product.images.edges[3].node.altText}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 ">
          <div className="aspect-w-3 aspect-h-2  overflow-hidden">
            <img
              src={product.images.edges[1].node.originalSrc}
              alt={product.images.edges[1].node.altText}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2  overflow-hidden">
            <img
              src={product.images.edges[2].node.originalSrc}
              alt={product.images.edges[2].node.altText}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-6xl lg:pt-16 lg:px-0 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2  lg:pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-pesak-300 sm:text-3xl">
            {product.title}
          </h1>
        </div>

        {/* Options */}

        {/* dgfd */}
        <ProductForm product={product} />

        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-pesak-400">{product.description}</p>
            </div>
          </div>
          <Reviews></Reviews>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start 
            md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto"
      ></div>
      {/* <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      /> */}
      <div>
        {product.tags[0] === "donation" && (
          <div>
            <Donation></Donation>
          </div>
        )}
      </div>
    </div>
  );
}
