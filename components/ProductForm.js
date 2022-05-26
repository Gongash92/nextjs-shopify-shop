import { useState, useContext } from "react";
import { formatter } from "../utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "../context/shopContext";
import { StarIcon } from "@heroicons/react/solid";
import MyDialog from "./MyDialog";

// Tailwind headlessUI
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductForm({ product }) {

	// define funciton add to cart
  const { addToCart } = useContext(CartContext);

	// get variant of product
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    // Mapping of the selected options
    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    // Show selected options
    return {
      tags: product.tags,
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

	//select product variants size color of product
  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="pb-8 lg:mt-0 lg:row-span-3">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl text-gray-900">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </p>

      <p className="sr-only">{product.rating} out of 5 stars</p>
      <div className="flex items-center pt-2">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                product.productType > rating ? "text-yellow-400" : "text-white",
                "flex-shrink-0 h-5 w-5"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="ml-3 text-sm text-gray-500">{product.vendor} reviews</p>
        <MyDialog />
      </div>

      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className="mt-5 w-full bg-pesak border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-pesak-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pesak-150"
      >
        Add to Cart
      </button>
    </div>
  );
}
