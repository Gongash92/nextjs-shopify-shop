const incentives = [
  {
    name: "Active participation in conservation",

    imageSrc: "/front-2.png",
  },
  {
    name: "Spread awareness	with donations",

    imageSrc: "/front-3.png",
  },
  {
    name: "Eco friendly clothes save Nature",
    imageSrc: "/front-4.png",
  },
];

const FrontFirstSection = () => {
  return (
    <div>
      <div className="bg-trava">
        {/* Header */}
        <div className="relative pb-24 bg-yellow-100">
          <div className="absolute inset-0">
            <img
              src="/front-1.png"
              className="w-full h-full object-center object-cover"
            ></img>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 ">
            <div className="max-w-4xl mx-auto text-center pb-96">
              <h1 className="text-4xl text-center tracking-tight text-pesak-300 md:text-5xl lg:text-6xl">
                A brand that brings you the spirit of untamed wilderness
              </h1>
              <p className="mt-6 pb-12 max-w-3xl mx-auto  text-center text-xl text-pesak-400">
              The only African-inspired organic clothing line with a social cause. Connect the world to wildlife conservation.
              </p>{" "}
              <a
                href="/"
                className="bg-pesak border text-center border-transparent shadow-lg rounded-md py-5 px-12  text-lg font-medium text-white hover:bg-pesak-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pesak	"
              >
                Buy and donate
              </a>
            </div>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-16 max-w-6xl mx-auto relative z-10  px-4 sm:px-6 lg:px-0 "
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 sm:px-2 lg:px-4">
              <div className="max-w-2xl mx-auto px-4 lg:px-12 grid grid-cols-1 gap-28 lg:max-w-none lg:grid-cols-3">
                {incentives.map((incentive) => (
                  <div
                    key={incentive.name}
                    className="text-center sm:flex sm:text-left lg:block lg:text-center"
                  >
                    <div className="sm:flex-shrink-0">
                      <div className="flow-root">
                        <img
                          className="w-32 h-32 mx-auto"
                          src={incentive.imageSrc}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                      <h3 className="text-3xl font-medium text-trava">
                        {incentive.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrontFirstSection;
