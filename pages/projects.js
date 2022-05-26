import CardProject from "../components/CardProject";
import ImageSlider from "../components/ImageSlider";
import ProjectTabs from "../components/ProjectTabs";
import Subscribe from "../components/Subscribe";

// Links of projects
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

// Slider component
ImageSlider;
const Projects = () => {
  return (
    <div>
      <div className="">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/bg-projects.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto pb-64 pt-24">
            
            <blockquote className="mt-10 px-8 lg:px-0">
              <div className="relative">
                <h1 className="text-4xl tracking-tight text-pesak-400 mb-12 md:text-5xl lg:text-5xl">
                  How much is necessary<br />to become a philanthropist?
                </h1>
              </div>
              <div className="max-w-3xl relative text-2xl leading-10 font-medium text-gray-900">
                <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-10 text-indigo-600">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.111 10.1001V28.5687C35.8991 28.5687 28.4793 28.9187 28.4788 45.7796V54.5401H46.4596V90.9001H10.0996V54.5401V45.7796C10.0996 32.5235 13.5302 22.6795 21.0252 16.5206C26.21 12.2602 32.3525 10.1001 40.111 10.1001ZM84.551 10.1001V28.5687C80.3391 28.5687 72.9193 28.9187 72.9188 45.7796V54.5401H90.8996V90.9001H54.5396V54.5401V45.7796C54.5396 32.5235 57.9702 22.6795 65.4652 16.5206C70.65 12.2602 76.7925 10.1001 84.551 10.1001Z"
                    fill="#232323"
                    fill-opacity="0.1"
                  />
                </svg>
  
                <p>
                  One of the big myths about philanthropy is that it's all about donating funds for a cause. I like to look at it quite differently. Philanthropy is about 'giving' - not just in monetary terms but also in non-monetary aspects, like time, ideas, or being a volunteer. Donating money is just a small part of philanthropy.
                </p>
                <footer className="mt-8">
                  <div className="">
                    <div className="text-base font-medium font-white">
                      Pankaj Patel
                    </div>
                  </div>
                </footer>
              </div>
            </blockquote>
          </div>
        </div>

        <div className="relative -m-60 max-w-2xl mx-auto px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8 mb-2">
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

                    <h3 className="text-2xl sans font-semibold text-gray-900">
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
        </div>
        <div className="relative max-w-2xl mx-auto px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8 mb-56">
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

                    <h3 className="text-2xl sans font-semibold text-gray-900">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
