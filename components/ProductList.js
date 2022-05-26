import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="lg:py-16 py-6 bg-trava">
      <div className=" mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-0 ">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Choose eco friendly and organic clothing
            </h2>
            <p className="pb-8 text-krem">
              Do you want to wear clothing that is not only eco-friendly but
              also good for the environment? Clothing made with organic,
              recycled materials like bamboo and linen can help!
            </p>
            <div className="grid">
            <a href="/collections/women" className="bg-pesak border text-center border-transparent rounded-md py-3 px-8  text-base font-medium text-white hover:bg-pesak-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pesak mb-2">
              View all for woman
            </a>
            <a href="/collections/man" className="bg-pesak border text-center border-transparent rounded-md py-3 px-8  text-base font-medium text-white hover:bg-pesak-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pesak">
              View all for man
            </a>
            </div>
          </div>
          <div className="col-span-2 ">
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  gap-4">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
