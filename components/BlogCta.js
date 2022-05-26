export default function BlogCta() {
  return (
    <div className="bg-white lg:col-span-3 child">
      <div className="max-w-6xl mx-auto pt-4 pb-16 ">
        <div className="bg-trava rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl  text-white sm:text-4xl">
                We are life changers
              </h2>
              <p className="mt-4 text-white text-lg leading-6">
                Get a weekly dose of insightful people strategy content, helpful
                resources, new job opportunities, and people-driven events.ec.
              </p>
              <a
                href="#"
                className="mt-8 bg-pesak border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-white font-medium  hover:bg-pesak-150"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-36"
              src="blog-cta.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
