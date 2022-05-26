const Logos = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
					<h3 className="text-4xl text-center pb-10">Partners</h3>
          <div className="grid lg:grid-cols-3 items-center">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className=" "
                src="./logos-1.png"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className=""
                src="./logos-2.png"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className=""
                src="./logos-3.png"
                alt="StaticKit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
