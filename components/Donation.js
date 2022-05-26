import Projects from "./Projects";

const feature = [
  {
    name: "Feature one",
    description:
      "One of the major applications of paper prototyping is brainstorming in the development team, to collect and visualize ideas on how an interface might look.",
    icon: "/feature-1.png",
  },
  {
    name: "Feature two",
    description:
      "Comps are visual representations, commonly of websites, that demonstrate various aspects of the interface including fonts, colors, and logos.",
    icon: "/feature-2.png",
  },
  {
    name: "Feature three",
    description:
      "Especially in web design, paper prototypes can be used to probe the illegibility of a design: A high-fidelity design mockup of a page is printed and presented to a user.",
    icon: "/feature-3.png",
  },
  {
    name: "Feature three",
    description:
      "Especially in web design, paper prototypes can be used to probe the illegibility of a design: A high-fidelity design mockup of a page is printed and presented to a user.",
    icon: "/feature-3.png",
  },
];

const features = [
  {
    name: "Minimal and thoughtful",
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Refined details",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div>
      <section aria-labelledby="social-impact-heading" className=" mx-auto ">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/product-1.png"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative inset-0 bg-gradient-to-t from-white py-32 px-6 sm:py-40 sm:px-12 lg:px-0">
            <div className="relative max-w-6xl mx-auto flex flex-col">
              <h2
                id="social-impact-heading"
                className="text-3xl font-extrabold tracking-tight text-trava sm:text-4xl"
              >
                Exceptional materials. The most durable glass ever in a <br />
                smartphone. A beautiful new gold finish, achieved with <br /> an
                atomic level process. Precision-machined, surgical-
                <br />
                grade stainless steel bands.
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {feature.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                        <img src={feature.icon} className="h-12 w-12" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg  text-trava font-bold">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />
    </div>
  );
}
