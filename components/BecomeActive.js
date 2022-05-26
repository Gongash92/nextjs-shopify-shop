import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "Nkhotakota Wildlife Reserve Malawi",
    href: "#",
    description:
      "Phosfluorescently drive cross-media experiences via efficient quality vectors. Energistically mesh client-focused products for one-to-one.",
    image: "./first-3.png",
    region: "Nakuru region",
    hektars: "3000",
    width: "90%",
  },
  {
    name: "Matusadonea National Park",
    href: "#",
    description:
      "Phosfluorescently drive cross-media experiences via efficient quality vectors. Energistically mesh client-focused products for one-to-one.",
    image: "./first-4.png",
    region: "Matusadona region",
    hektars: "7000",
    width: "75%",
  },
];

const BecomeActive = () => {
  return (
    <div className="pt-20">
      <div>
        {/* Header */}
        <div className="relative  bg-trava">
          <div className="absolute inset-0"></div>
          <div className="relative max-w-6xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-0 ">
            <div className="text-center max-w-3xl mx-auto">
              <div>
                <h3 className="text-5xl pb-4  tracking-tight text-white ">
                  Become an active member of the global community
                </h3>
              </div>
              <div>
                <p className=" text-krem pb-8">
                  There are so many opportunities to get involved with projects
                  that will help make Africa better. You can watch the actions
                  being planned or even take part yourself!.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 pt-10 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
              {supportLinks.map((link) => (
                <a href="/project">
                  <div
                    key={link.name}
                    className="flex flex-col px-6 pt-6 bg-white rounded-md shadow-xl"
                  >
                    <div className="flex-1 relative  ">
                      <div className="mb-4  ">
                        <img
                          src={link.image}
                          alt=""
                          className="w-full h-full rounded-md object-center object-cover"
                        />
                      </div>
                      <p className="inline-block bg-gray-100 px-4 py-2 mb-2">
                        Project
                      </p>

                      <h3 className="text-xl sans font-semibold text-gray-900">
                        {link.name}
                      </h3>
                      <p className="mt-4 text-base text-gray-500 border-b-2 pb-4 ">
                        {link.description}
                      </p>
                    </div>

                    <div className="flex-1 relative pt-1">
                      <ul
                        role="list"
                        className="mt-8 space-y-5  lg:space-y-0 grid grid-cols-2 lg:gap-x-2 lg:gap-y-5 items-center"
                      >
                        <li className=" lg:col-span-1  ">
                          <h3 className="text-lg  text-gray-700">
                            {link.region}
                          </h3>
                        </li>
                        <li className=" lg:col-span-1 border-l-2">
                          <p className="ml-6">
                            {" "}
                            <span className="block text-lg  text-gray-700">
                              {link.hektars} hektars
                            </span>
                            <span className="block text-gray-400">
                              Targeted population
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div class="inline-flex relative  pb-8 pt-8 items-center">
                      <div class=" bg-gray-200  flex-1 mr-2 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-green-600 h-2.5  rounded-full "
                          style={{ width: link.width }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-white">
                        {link.width} completed
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center max-w-3xl mx-auto pt-16">
              {" "}
              <a className="bg-pesak border text-center border-transparent rounded-md py-5 px-12  text-lg font-medium text-white hover:bg-pesak-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                View all projects
              </a>
            </div>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className=" max-w-6xl mx-auto relative z-10  px-4 sm:px-6 lg:px-0"
          aria-labelledby="contact-heading"
        ></section>
      </div>
    </div>
  );
};

export default BecomeActive;
