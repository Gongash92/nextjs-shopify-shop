const supportLinks = [
  {
    name: "Nkhotakota Wildlife Reserve Malawi",
    href: "#",
    description:
      "Phosfluorescently drive cross-media experiences via efficient quality vectors. Energistically mesh client-focused products for one-to-one.",
    image: "/first-3.png",
    region: "Nakuru region",
    hektars: "3000",
    width: "90%",
  },
  {
    name: "Matusadonea National Park",
    href: "#",
    description:
      "Phosfluorescently drive cross-media experiences via efficient quality vectors. Energistically mesh client-focused products for one-to-one.",
    image: "/first-4.png",
    region: "Matusadona region",
    hektars: "7000",
    width: "75%",
  },
];

const Projects = () => {
  return (
    <div className="bg-trava py-40">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-white text-4xl pb-20 text-center ">
          Supporting project
        </h3>
        <div className="grid grid-cols-1 pt-10 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
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
                    <h3 className="text-lg  text-gray-700">{link.region}</h3>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
