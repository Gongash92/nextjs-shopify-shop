const CardProject = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-0">
      <div className="bg-gray-100 rounded-lg  p-2 flex items-center sm:py-8">
        <div className="px-4 flex flex-col">
          <h3 className="font-semibold text-3xl text-gray-900">
            Matusadonea National Park
          </h3>
          <p className="mt-2 text-sm text-gray-500 border-b-2 pb-4">
            Phosfluorescently drive cross-media experiences via efficient
            quality vectors. Energistically mesh client-focused products for
            one-to-one.
          </p>
          <div className="max-w-sm">
            <ul
              role="list"
              className="mt-8 space-y-5  lg:space-y-0 grid grid-cols-2 lg:gap-x-2 lg:gap-y-5 items-center"
            >
              <li className=" lg:col-span-1  ">
                <h3 className="text-lg  text-gray-700">Matusadona region</h3>
              </li>
              <li className=" lg:col-span-1 border-l-2">
                <p className="ml-6">
                  {" "}
                  <span className="block text-lg  text-gray-700">
                    3000 hektars
                  </span>
                  {/* <span className="block text-gray-400">
                    Targeted population
                  </span> */}
                </p>
              </li>
            </ul>
          </div>
          <div class="inline-flex relative  pb-8 pt-8 items-center">
            <div class=" bg-gray-200  flex-1 mr-2 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-green-600 h-2.5  rounded-full "
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="text-sm text-gray-500 dark:text-white">
              80% completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
