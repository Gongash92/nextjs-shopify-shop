const Blockqoute = () => {
  return (
    <section aria-labelledby="social-impact-heading" className=" mx-auto ">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bg-front-1.png"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto py-80">
          <blockquote className="mt-10 px-8 lg:px-0">
            <div className="max-w-3xl relative  text-4xl leading-10 font-medium text-gray-900">
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
                Like music and art, love of nature is a common language that
                can transcend political or social boundaries.
              </p>
              <footer className="mt-8">
                <div className="">
                  <div className="text-base font-medium font-white">
                    Jimmy Carter
                  </div>
                </div>
              </footer>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Blockqoute;
