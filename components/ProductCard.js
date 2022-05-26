import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";
import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductCard = ({ product }) => {
	// getting propertis from object
  const { handle, title, rating, productType, vendor } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="w-full bg-gray-200 overflow-hidden">
          <div className="relative group-hover:opacity-75 h-64">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="pt-10 pb-4 text-center">
          <p className="text-lg font-medium text-white">
            <span aria-hidden="true" />
            {title}
          </p>
          <div className="mt-3 flex flex-col items-center">
            <p className="sr-only">{rating} out of 5 stars</p>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    productType > rating ? "text-yellow-400" : "text-yellow-50",
                    "flex-shrink-0 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            {/* <p className="mt-1 text-sm text-gray-500">{vendor} reviews</p> */}
          </div>
          <p className="mt-4 text-base font-medium text-white">
            {formatter.format(price)}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
