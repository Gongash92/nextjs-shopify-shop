const TrackYourDonation = () => {
  return (
    <div className="pb-16  pt-32">
      <div className="max-w-7xl mx-auto  sm:px-2 pb-8 lg:px-0">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="  overflow-hidden">
              <img
                src="./africa.png"
                alt=""
                className="object-center object-cover"
              />
            </div>
            <div className="relative">
              <h2 className="text-5xl  tracking-tight text-pesak-300">
                Track your <br /> donation with ease
              </h2>
              <p className="mt-4 mb-8 text-xl leading-8 text-pesak-400">
                We want to make it as easy and streamlined for you, our donors!
                Scanning will take care not only where your money went but also
                show how much progress has been made in a project just by
                scanning its barcode
              </p>
              <a
                href="/projects"
                className="bg-pesak border text-center border-transparent rounded-md py-5 px-12 text-lg font-medium text-white hover:bg-pesak-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pesak"
              >
                View all projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackYourDonation;
