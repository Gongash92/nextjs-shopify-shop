import React, { useState } from "react";

const ProjectTabs = () => {
	// set property for open tab
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="max-w-6xl mx-auto">
      <div className=" pt-12">
        <div className="flex flex-wrap max-w-6xl mx-auto px-4 lg:px-0">
          <div className="w-full">
            <ul
              className="grid lg:grid-cols-4 items-center mb-0 list-none pt-3 pb-4 "
              role="tablist"
            >
              <li className="lg:-mb-px lg:mr-2 pb-2 last:mr-0  text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-pesak-300"
                      : "text-gray border-2 border-gray-300 ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Story
                </a>
              </li>
              <li className="lg:-mb-px lg:mr-2 pb-2 last:mr-0 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-pesak-300"
                      : "text-gray border-2 border-gray-300 ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Reports
                </a>
              </li>
              <li className="lg:-mb-px lg:mr-2 last:mr-0 pb-2 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-pesak-300"
                      : "text-gray border-2 border-gray-300")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  FAQ
                </a>
              </li>
              <li className="lg:-mb-px lg:mr-2 last:mr-0 pb-2   text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 4
                      ? "text-white bg-pesak-300"
                      : "text-gray border-2 border-gray-300")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Progress
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
              <div className=" flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="text-center py-6 max-w-2xl mx-auto">
                      <h2 className="text-3xl text-pesak-300">Story</h2>
                      <p className="text-xl  leading-8 pt-4 text-pesak-400">
                        Do you want to wear clothing that is not only
                        eco-friendly but also good for the environment? Clothing
                        made with organic, recycled materials like bamboo and
                        linen can help!
                      </p>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="text-center py-6 max-w-2xl mx-auto">
                      <h2 className="text-3xl text-pesak-300">Reports</h2>
                      <p className="text-xl leading-8 pt-4 text-pesak-400">
                        Do you want to wear clothing that is not only
                        eco-friendly but also good for the environment? Clothing
                        made with organic, recycled materials like bamboo and
                        linen can help!
                      </p>
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="text-center py-6 max-w-2xl mx-auto">
                      <h2 className="text-3xl text-pesak-300">FAQ</h2>
                      <p className="text-xl leading-8 pt-4 text-pesak-400">
                        Do you want to wear clothing that is not only
                        eco-friendly but also good for the environment? Clothing
                        made with organic, recycled materials like bamboo and
                        linen can help!
                      </p>
                    </div>
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="text-center py-6 max-w-2xl mx-auto">
                      <h2 className="text-3xl text-pesak-300">Progress</h2>
                      <p className="text-xl leading-8 pt-4 text-pesak-400">
                        Do you want to wear clothing that is not only
                        eco-friendly but also good for the environment? Clothing
                        made with organic, recycled materials like bamboo and
                        linen can help!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
