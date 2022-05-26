import React from "react";
import Team from "../components/Team";

const about = () => {
  // Tailwind headlessUI
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className="bg">
      <div className=" pt-20 pb-16">
        <div className="flex flex-wrap max-w-6xl mx-auto px-4 lg:px-0">
          <h1 className="text-6xl text-pesak-300  mx-auto pb-20">
            Bundu Untamed for you
          </h1>
          <div className="w-full">
            <ul
              className="grid lg:grid-cols-3 items-center mb-0 list-none pt-3 pb-4 "
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-pesak-300"
                      : "text-pesak-400 ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Make a difference in the conservation of our environment
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-pesak-300"
                      : "text-pesak-400 ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Raising Awareness of Wildlife <br /> Conservation
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-pesak-300"
                      : "text-pesak-400 ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  The goal is now real, and it can be fulfilled by using
                  opportunities
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
              <div className="absolute slika">
                <img src="/shape-1.svg"></img>
              </div>
							<div className="absolute bottom-0 right-0 slikaa">
                <img src="/vector.svg"></img>
              </div>
              <div className="z-10">
                <div className=" flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <img
                        src="/zirafa.png"
                        alt=""
                        className="w-full h-full  object-center object-cover"
                      />
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <img
                        src="/zirafa.png"
                        alt=""
                        className="w-full h-full  object-center object-cover"
                      />
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <img
                        src="/zirafa.png"
                        alt=""
                        className="w-full h-full  object-center object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative   pb-10">
        <div className="max-w-3xl px-4 lg:px-0 items-center text-center mx-auto pb-20">
          <h2 className="text-5xl text-pesak-300">What we see</h2>
          <p className="pt-4 text-pesak-400 text-xl">
            Africa's environment has been in a state of chaos for decades. The
            struggle to preserve its wild life and nature conservation is an
            ongoing conflict that will only become more intense as time goes on.
          </p>
          <p className="pt-4 text-pesak-400 text-xl">
            The struggle for wild life and nature conservation in Africa is a
            complicated issue with many different factors at play. From the
            poaching of elephants, alligators, rhinos to habitat loss due
            natural disasters like fires; there are few places left where people
            can go without being threatened by human actions.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none items-center grid gap-4 grid-cols-4  lg:inset-y-0  mx-8"
        >
          <div className="w-58 h-50">
            <img
              src="/about-1.png"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="grid col-span-2">
            <div className="grid gap-4 grid-cols-3">
              <div className="">
                <img
                  src="/about-2.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex justify-end items-end col-span-2">
                <img
                  src="/about-3.png"
                  alt=""
                  className="h-5/6 w-full object-center object-cover"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="/about-4.png"
                  alt=""
                  className="h-4/5 w-full object-center object-cover"
                />
              </div>
              <div className="">
                <img
                  src="/about-5.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <img
              src="/about-6.png"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="max-w-3xl px-4 lg:px-0 items-center text-center mx-auto py-20">
          <h2 className="text-5xl text-pesak-300">
            What we offer to the world
          </h2>
          <p className="pt-4 text-pesak-400 text-xl">
          We are committed to the protection of Africa's wildlife and natural resources through education, awareness raising, community actions and donations.
          </p>

          <p className="pt-4 text-pesak-400 text-xl">
          To help the planet and its inhabitants, Bundu Untamed has also set out on a mission to make fashion solutions for all. From their design process of sustainable materials with eco-friendly production methods, right down to donating 10% of each sale back into conservation efforts--we are obligating ourselfs!
          </p>
        </div>
      </div>

      <div>
        <img
          src="/bg-about.png"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="py-20 px-8 xl:px-0 ">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-0">
        <h2 className="text-4xl mb-24 text-pesak-300 text-center">All of our donations and live actions can be tracked on the site, as well as on social media platforms! Please let us know if you have any ideas or suggestions so we might consider them too.</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="text-center">
              <div>
                <span className="inline-flex items-center justify-center p-3">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M128 64C128 99.3462 99.3462 128 64 128C28.6538 128 0 99.3462 0 64C0 28.6538 28.6538 0 64 0C99.3462 0 128 28.6538 128 64ZM45.3604 18.6396L55.5147 8.48528C60.201 3.79899 67.799 3.79899 72.4853 8.48528L82.6396 18.6396H97C103.627 18.6396 109 24.0122 109 30.6396V45L119.154 55.1543C123.841 59.8406 123.841 67.4386 119.154 72.1249L109 82.2792V96.6396C109 103.267 103.627 108.64 97 108.64H82.6396L72.4853 118.794C67.799 123.48 60.201 123.48 55.5147 118.794L45.3604 108.64H31C24.3726 108.64 19 103.267 19 96.6396V82.2792L8.84567 72.1249C4.15937 67.4386 4.15938 59.8406 8.84567 55.1543L19 45V30.6396C19 24.0122 24.3726 18.6396 31 18.6396H45.3604Z"
                      fill="#AF9D6E"
                    />
                    <path
                      d="M64 42.1383C66.8086 42.1383 69.0937 39.8638 69.0937 37.0686C69.0937 34.2734 66.8086 32 64 32C61.1914 32 58.9062 34.2734 58.9062 37.0686C58.9062 39.8638 61.1914 42.1383 64 42.1383Z"
                      fill="#008060"
                    />
                    <path
                      d="M44.9325 50.0381H44.9471C46.3031 50.0348 47.5799 49.503 48.5414 48.5414C49.5028 47.5799 50.0352 46.3037 50.0381 44.9471C50.042 43.5894 49.5163 42.3137 48.5582 41.3561C47.6006 40.3979 46.3585 39.8834 44.9661 39.8762C43.61 39.8801 42.3332 40.4114 41.3717 41.3729C40.4103 42.3345 39.879 43.6107 39.875 44.9673C39.8711 46.3255 40.3968 47.6007 41.3549 48.5594C42.3097 49.5131 43.5793 50.0381 44.9325 50.0381Z"
                      fill="#008060"
                    />
                    <path
                      d="M37.0686 69.0945C39.8638 69.0945 42.1383 66.8099 42.1383 64.0007C42.1383 61.1921 39.8638 58.907 37.0686 58.907C34.2734 58.907 32 61.1921 32 64.0007C32 66.8093 34.2734 69.0945 37.0686 69.0945Z"
                      fill="#008060"
                    />
                    <path
                      d="M41.3568 79.4414C40.3987 80.399 39.873 81.6752 39.877 83.0335C39.8809 84.3896 40.4121 85.6664 41.3737 86.6278C42.3353 87.5893 43.6114 88.1206 44.968 88.1246H44.9831C46.3358 88.1246 47.6052 87.5989 48.5601 86.6447C49.5182 85.6871 50.0434 84.4108 50.04 83.0537C50.0366 81.6976 49.5048 80.4208 48.5432 79.4594C47.5817 78.4979 46.3055 77.9655 44.9489 77.9626C43.5862 77.9738 42.3146 78.4831 41.3568 79.4414Z"
                      fill="#008060"
                    />
                    <path
                      d="M58.9062 90.9318C58.9062 93.727 61.1914 96.0004 64 96.0004C66.8086 96.0004 69.0937 93.727 69.0937 90.9318C69.0937 88.1366 66.8086 85.8621 64 85.8621C61.1914 85.8621 58.9062 88.1355 58.9062 90.9318Z"
                      fill="#008060"
                    />
                    <path
                      d="M79.4596 79.4584C78.4981 80.4199 77.9658 81.6961 77.9629 83.0527C77.959 84.4104 78.4847 85.6861 79.4428 86.6437C80.397 87.598 81.6665 88.1236 83.0198 88.1236H83.0349C84.3909 88.1197 85.6677 87.5884 86.6292 86.6269C87.5906 85.6653 88.1219 84.3891 88.1259 83.0325C88.1298 81.6743 87.6041 80.3991 86.646 79.4404C85.6884 78.4828 84.4044 77.9538 83.055 77.9605C81.6984 77.9655 80.4216 78.4969 79.4596 79.4584Z"
                      fill="#008060"
                    />
                    <path
                      d="M90.9311 58.9055C88.1359 58.9055 85.8613 61.1901 85.8613 63.9993C85.8613 66.8079 88.1359 69.093 90.9311 69.093C93.7262 69.093 95.9997 66.8079 95.9997 63.9993C95.9997 61.1907 93.7262 58.9055 90.9311 58.9055Z"
                      fill="#008060"
                    />
                    <path
                      d="M83.0526 50.0385H83.0671C84.4198 50.0385 85.6893 49.514 86.6442 48.5587C87.6023 47.6011 88.128 46.3248 88.124 44.9665C88.1201 43.6105 87.5889 42.3336 86.6273 41.3722C85.6657 40.4108 84.3896 39.8795 83.033 39.8755C81.6412 39.8626 80.3995 40.3972 79.4408 41.3553C78.4827 42.3129 77.9575 43.5892 77.961 44.9464C77.9643 46.3024 78.4961 47.5792 79.4577 48.5407C80.4197 49.5033 81.6966 50.0347 83.0526 50.0385Z"
                      fill="#008060"
                    />
                    <path
                      d="M71.4668 38.9513C73.2865 39.4937 75.0516 40.2376 76.7118 41.1639C76.8351 41.2325 76.9685 41.2654 77.1008 41.2654C77.3814 41.2654 77.6538 41.1176 77.8 40.8553C78.0159 40.4697 77.8775 39.9825 77.4914 39.7671C75.7296 38.7838 73.8569 37.9937 71.9232 37.4178C71.5002 37.2922 71.0543 37.5328 70.9282 37.9563C70.8015 38.3799 71.0432 38.8246 71.4667 38.9513L71.4668 38.9513Z"
                      fill="#008060"
                    />
                    <path
                      d="M51.2593 41.0757C51.3882 41.0757 51.5182 41.0444 51.6393 40.9791C53.3079 40.0757 55.0825 39.3541 56.9122 38.8351C57.3369 38.7146 57.5841 38.2721 57.4635 37.8474C57.3436 37.4216 56.9027 37.1761 56.4758 37.296C54.5332 37.8474 52.6505 38.613 50.8781 39.5723C50.4902 39.7827 50.3451 40.2682 50.5555 40.6566C50.6995 40.9245 50.9746 41.0757 51.2592 41.0757L51.2593 41.0757Z"
                      fill="#008060"
                    />
                    <path
                      d="M38.0563 56.9715C38.1322 56.9938 38.2092 57.005 38.2851 57.005C38.63 57.005 38.9481 56.7801 39.0513 56.433C39.5937 54.6133 40.3376 52.8481 41.2639 51.1879C41.4799 50.8023 41.3415 50.3152 40.9553 50.0998C40.5691 49.8827 40.0825 50.0222 39.8671 50.4084C38.8839 52.1701 38.0937 54.0428 37.5178 55.9765C37.3917 56.4001 37.6333 56.846 38.0563 56.9715V56.9715Z"
                      fill="#008060"
                    />
                    <path
                      d="M38.9348 70.9884C38.8143 70.5637 38.3735 70.3165 37.9471 70.437C37.5224 70.5576 37.2752 71.0001 37.3958 71.4248C37.9471 73.3673 38.7127 75.2501 39.6721 77.0225C39.8166 77.2898 40.0923 77.4416 40.3763 77.4416C40.5052 77.4416 40.6352 77.4103 40.7563 77.3451C41.1442 77.1347 41.2893 76.6492 41.0789 76.2608C40.1765 74.5922 39.455 72.8182 38.9349 70.9885L38.9348 70.9884Z"
                      fill="#008060"
                    />
                    <path
                      d="M51.2878 86.6357C50.9016 86.4186 50.415 86.5581 50.1996 86.9443C49.9837 87.3299 50.122 87.817 50.5082 88.0324C52.2699 89.0157 54.1427 89.8059 56.0764 90.3817C56.1523 90.4041 56.2293 90.4152 56.3052 90.4152C56.6501 90.4152 56.9681 90.1903 57.0714 89.8432C57.1981 89.4202 56.9564 88.9744 56.5329 88.8482C54.7126 88.3058 52.9474 87.562 51.2878 86.6357L51.2878 86.6357Z"
                      fill="#008060"
                    />
                    <path
                      d="M76.3606 86.8214C74.692 87.7249 72.9175 88.4464 71.0877 88.9654C70.6631 89.0859 70.4159 89.5285 70.5364 89.9531C70.6363 90.3053 70.9566 90.5357 71.3054 90.5357C71.3773 90.5357 71.451 90.5251 71.5235 90.5045C73.4661 89.9531 75.3489 89.1875 77.1213 88.2282C77.5091 88.0178 77.6542 87.5323 77.4438 87.1439C77.234 86.755 76.7496 86.6099 76.3607 86.8214L76.3606 86.8214Z"
                      fill="#008060"
                    />
                    <path
                      d="M89.9443 70.8285C89.5219 70.7029 89.0754 70.9434 88.9493 71.367C88.4069 73.1867 87.663 74.9518 86.7367 76.612C86.5208 76.9976 86.6592 77.4848 87.0453 77.7002C87.1687 77.7688 87.302 77.8017 87.4343 77.8017C87.715 77.8017 87.9873 77.6538 88.1335 77.3916C89.1168 75.6298 89.9069 73.7571 90.4828 71.8234C90.6089 71.3993 90.3673 70.954 89.9443 70.8284L89.9443 70.8285Z"
                      fill="#008060"
                    />
                    <path
                      d="M87.2453 50.454C86.8574 50.6644 86.7123 51.1499 86.9227 51.5383C87.8262 53.2069 88.5477 54.9814 89.0667 56.8112C89.1666 57.1633 89.4869 57.3938 89.8357 57.3938C89.9077 57.3938 89.9813 57.3832 90.0539 57.3625C90.4786 57.242 90.7258 56.7995 90.6052 56.3748C90.0539 54.4322 89.2882 52.5495 88.3289 50.777C88.1197 50.3875 87.6342 50.2424 87.2452 50.4539L87.2453 50.454Z"
                      fill="#008060"
                    />
                    <path
                      d="M63.9999 45.2812C53.6784 45.2812 45.2812 53.6786 45.2812 63.9999C45.2812 74.3213 53.678 82.7186 63.9999 82.7186C74.3219 82.7186 82.7186 74.3219 82.7186 63.9999C82.7186 53.678 74.3219 45.2812 63.9999 45.2812ZM46.8813 63.9999C46.8813 62.0925 47.2083 60.2639 47.7858 58.5496H54.5643C54.1419 60.1763 53.8857 61.9414 53.8857 63.8465C53.8857 65.8655 54.1625 67.7355 54.6129 69.4514H47.7858C47.2077 67.736 46.8812 65.9072 46.8812 63.9999H46.8813ZM55.4862 63.8454C55.4862 61.9358 55.7724 60.1679 56.2384 58.5485H63.1994V69.4503H56.2864C55.7925 67.7432 55.4862 65.8704 55.4862 63.8454V63.8454ZM71.2363 56.9496H64.8004V47.81C66.3874 49.1984 69.4874 52.3407 71.2363 56.9496ZM63.1999 47.7944V56.9496H56.7719C58.513 52.3814 61.5849 49.2236 63.1999 47.7944ZM63.1999 71.0503V80.3639C61.7926 79.0877 58.6285 75.8399 56.8199 71.0503H63.1999ZM64.8004 80.4008V71.0503H71.1877C69.3707 75.8863 66.1792 79.1507 64.8004 80.4008ZM64.8004 69.4504V58.5496H71.7676C72.2291 60.1656 72.5142 61.9336 72.5142 63.8471C72.5142 65.8711 72.2095 67.7438 71.7173 69.451L64.8004 69.4515L64.8004 69.4504ZM73.4377 58.5496H80.214C80.7922 60.2639 81.1186 62.0938 81.1186 63.9999C81.1186 65.9061 80.7916 67.736 80.214 69.4503H73.3897C73.8384 67.7342 74.1135 65.8648 74.1135 63.8464C74.114 61.9395 73.8585 60.1745 73.4377 58.5495L73.4377 58.5496ZM79.5817 56.9498H72.9584C71.3111 52.1634 68.2775 48.8091 66.3841 47.0674C72.2737 47.8933 77.2033 51.7159 79.5817 56.9498ZM61.5974 47.0703C59.6872 48.8437 56.6837 52.2009 55.046 56.9498H48.4187C50.7954 51.7214 55.7167 47.9023 61.5974 47.0703V47.0703ZM48.4193 71.0504H55.0996C56.7325 75.7976 59.6371 79.1665 61.4222 80.9026C55.6192 80.0203 50.7714 76.2269 48.4193 71.0504ZM66.6237 80.8965C68.4 79.1587 71.2856 75.7926 72.9083 71.051H79.583C77.2353 76.214 72.4067 80.0007 66.6237 80.8965Z"
                      fill="#008060"
                    />
                  </svg>
                </span>
                <p className="mt-5 text-2xl mb-4 leading-8  text-pesak-300">
                  Innovation
                </p>
              </div>
              <dd className="mt-2 text-base text-pesak-400">
                We're not just about selling clothes, we want you to be our
                customer for life and get involved in building an eco-friendly
                culture movement that will change how people think about fashion
                forever!
              </dd>
            </div>

            <div className="text-center">
              <div>
                <span className="inline-flex items-center justify-center p-3">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M128 64C128 99.3462 99.3462 128 64 128C28.6538 128 0 99.3462 0 64C0 28.6538 28.6538 0 64 0C99.3462 0 128 28.6538 128 64ZM45.3604 18.6396L55.5147 8.48528C60.201 3.79899 67.799 3.79899 72.4853 8.48528L82.6396 18.6396H97C103.627 18.6396 109 24.0122 109 30.6396V45L119.154 55.1543C123.841 59.8406 123.841 67.4386 119.154 72.1249L109 82.2792V96.6396C109 103.267 103.627 108.64 97 108.64H82.6396L72.4853 118.794C67.799 123.48 60.201 123.48 55.5147 118.794L45.3604 108.64H31C24.3726 108.64 19 103.267 19 96.6396V82.2792L8.84567 72.1249C4.15937 67.4386 4.15938 59.8406 8.84567 55.1543L19 45V30.6396C19 24.0122 24.3726 18.6396 31 18.6396H45.3604Z"
                      fill="#AF9D6E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M83.3455 56.9338C83.058 57.2212 82.6983 57.3652 82.3387 57.3652C81.979 57.3652 81.6193 57.2212 81.3319 56.9338C80.8282 56.4301 80.8282 55.4956 81.3319 54.9202L89.027 48.16H67.956C67.1649 48.16 66.6618 47.6564 66.6618 46.8658C66.6618 46.0747 67.1654 45.5716 67.956 45.5716H89.027L81.2602 38.8115C80.7566 38.3078 80.7566 37.3733 81.2602 36.7979C81.7639 36.1508 82.6984 36.2942 83.3455 36.7979L92.6223 45.859C93.1259 46.3627 93.1259 47.2972 92.6223 47.8726L83.3455 56.9338ZM56.3774 58.7316H40.0527C37.3198 58.7316 35.0188 56.4301 35.0188 53.6977V40.0339C35.0188 37.301 37.3203 35 40.0527 35H56.3774C59.1103 35 61.4113 37.3015 61.4113 40.0339V53.6977C61.4113 56.4301 59.1103 58.7316 56.3774 58.7316ZM48.1791 40.2495C44.5116 40.2495 41.5629 43.1982 41.5629 46.8657C41.5629 50.5332 44.5116 53.4819 48.1791 53.4819C51.8466 53.4819 54.7953 50.5332 54.7953 46.8657C54.7953 43.1982 51.8466 40.2495 48.1791 40.2495ZM44.6551 70.9572C45.3023 70.4535 46.1656 70.31 46.7404 70.9572C47.3158 71.6043 47.3158 72.4676 46.7404 72.9708L38.9736 79.7309H60.0447C60.8357 79.7309 61.3389 80.2346 61.3389 81.0251C61.3389 81.8162 60.8352 82.3193 60.0447 82.3193L38.9017 82.3198L46.5968 89.08C47.1722 89.7271 47.1722 90.5904 46.5968 91.0936C46.3806 91.4532 46.021 91.669 45.6613 91.669C45.3016 91.669 44.9419 91.525 44.6545 91.2375L35.3777 82.0324C34.8741 81.3853 34.8741 80.522 35.3777 80.0188L44.6551 70.9572ZM81.116 69.2311C87.6603 69.2311 92.9817 74.5529 92.9817 81.0968C92.9817 87.6412 87.6598 92.9625 81.116 92.9625C74.5716 92.9625 69.2503 87.6406 69.2503 81.0968C69.2498 74.5529 74.5717 69.2311 81.116 69.2311V69.2311Z"
                      fill="#008060"
                    />
                  </svg>
                </span>
                <p className="mt-5 text-2xl mb-4 leading-8  text-pesak-300">
                  Change approach
                </p>
              </div>
              <dd className="mt-2 text-base text-pesak-400">
                Most companies simply donate small ammount of money instead of
                actually taking action themselves with projects that matter. Not
                Bundu Untamed!
              </dd>
            </div>

            <div className="text-center">
              <div>
                <span className="inline-flex items-center justify-center p-3">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M128 64C128 99.3462 99.3462 128 64 128C28.6538 128 0 99.3462 0 64C0 28.6538 28.6538 0 64 0C99.3462 0 128 28.6538 128 64ZM45.3604 18.6396L55.5147 8.48528C60.201 3.79899 67.799 3.79899 72.4853 8.48528L82.6396 18.6396H97C103.627 18.6396 109 24.0122 109 30.6396V45L119.154 55.1543C123.841 59.8406 123.841 67.4386 119.154 72.1249L109 82.2792V96.6396C109 103.267 103.627 108.64 97 108.64H82.6396L72.4853 118.794C67.799 123.48 60.201 123.48 55.5147 118.794L45.3604 108.64H31C24.3726 108.64 19 103.267 19 96.6396V82.2792L8.84567 72.1249C4.15937 67.4386 4.15938 59.8406 8.84567 55.1543L19 45V30.6396C19 24.0122 24.3726 18.6396 31 18.6396H45.3604Z"
                      fill="#AF9D6E"
                    />
                    <path
                      d="M62.8677 80.8629C62.6651 81.0889 57.9012 86.4504 57.918 90.4393C57.9308 93.5107 60.4341 95.9995 63.5029 95.9995H63.5269C66.6056 95.9861 69.1006 93.47 69.0877 90.3907C69.0715 86.4923 64.2634 81.09 64.0587 80.8617C63.7563 80.5247 63.1724 80.5236 62.8677 80.8629Z"
                      fill="#008060"
                    />
                    <path
                      d="M46.9869 80.8626C46.7843 81.0886 42.0203 86.4502 42.0372 90.439C42.05 93.5105 44.5533 95.9993 47.622 95.9993H47.646C49.1376 95.9932 50.5371 95.4056 51.5874 94.3465C52.6382 93.2873 53.2124 91.8827 53.2063 90.3906C53.1895 86.4922 48.3826 81.0903 48.1784 80.8622C47.8748 80.5246 47.2915 80.5233 46.9869 80.8626Z"
                      fill="#008060"
                    />
                    <path
                      d="M78.7497 80.8628C78.5466 81.0894 73.7816 86.451 73.7989 90.4392C73.8112 93.5101 76.3144 96.0001 79.3843 96.0001H79.4083C82.4881 95.9867 84.9814 93.4705 84.9686 90.3912C84.9518 86.4928 80.1449 81.091 79.9407 80.8628C79.6371 80.5252 79.0527 80.5252 78.7497 80.8628Z"
                      fill="#008060"
                    />
                    <path
                      d="M63.5028 32C51.095 32 41 42.0943 41 54.5028C41 66.9096 51.0937 77.0042 63.5014 77.0042H63.5019C75.9098 77.0042 86.0047 66.9099 86.0047 54.5028C86.0047 42.095 75.9105 32 63.5019 32H63.5028ZM83.2799 61.2528H74.6661C75.2347 59.1842 75.5829 56.9325 75.5829 54.5022C75.5829 52.0698 75.2341 49.8242 74.6649 47.7662H83.2849C84.007 49.8812 84.4049 52.1457 84.4049 54.5022C84.4049 56.8638 84.0053 59.1334 83.2799 61.2528V61.2528ZM53.0228 54.5017C53.0228 52.0658 53.4029 49.8152 54.0217 47.7657H62.7031V61.2522L54.0167 61.2528C53.4012 59.1919 53.0229 56.9358 53.0229 54.5016L53.0228 54.5017ZM72.4356 46.1657H64.3039V34.7103C66.3185 36.4524 70.2548 40.4067 72.4356 46.1657ZM62.7035 46.1657H54.5718C56.7542 40.4101 60.6912 36.4581 62.7035 34.7143V46.1657ZM62.7035 62.8528V74.5079C60.6828 72.716 56.7387 68.6731 54.5601 62.8528H62.7035ZM64.3039 74.5068V62.8528H72.4389C70.2604 68.6586 66.3239 72.7093 64.3039 74.5068ZM64.3039 61.2529V47.7658H72.9775C73.5958 49.8165 73.9842 52.0621 73.9842 54.5018C73.9842 56.9377 73.5952 59.1892 72.9769 61.2524L64.3039 61.2529ZM82.6668 46.1658H74.1706C72.0122 39.9644 67.9039 35.7138 65.6059 33.7049C73.2605 34.4733 79.7075 39.3901 82.6673 46.1658H82.6668ZM61.4011 33.7054C59.1031 35.7143 54.9943 39.9643 52.8364 46.1664L44.3397 46.1658C47.299 39.3901 53.746 34.4733 61.4011 33.7054V33.7054ZM43.7211 47.7657H52.3411C51.7719 49.8237 51.4231 52.0692 51.4231 54.5017C51.4231 56.9325 51.7714 59.1835 52.34 61.2522L43.7262 61.2528C43.0007 59.1333 42.6012 56.8644 42.6012 54.5022C42.6012 52.1451 42.9991 49.8811 43.7211 47.7657V47.7657ZM44.3472 62.8528H52.8311C54.9081 68.8756 58.7965 73.1218 61.1324 75.2652C53.6017 74.4108 47.2741 69.5409 44.3467 62.8528H44.3472ZM65.8743 75.2652C68.2108 73.1218 72.0986 68.8756 74.1756 62.8528H82.6594C79.7332 69.5408 73.4056 74.4108 65.8738 75.2652H65.8743Z"
                      fill="#008060"
                    />
                  </svg>
                </span>
                <p className="mt-5 text-2xl mb-4 leading-8  text-pesak-300">
                  Multiply impact
                </p>
              </div>
              <dd className="mt-2 text-base text-pesak-400">
                Energistically matrix excellent total linkage via collaborative
                supply chains. Dynamically conceptualize progressive alignments
                for go forward interfaces.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <Team />
    </div>
  );
};

export default about;