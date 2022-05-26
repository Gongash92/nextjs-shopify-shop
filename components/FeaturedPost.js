import React, { useState, useEffect } from "react";
import { getFeaturedPosts } from "../lib/graphcms";
import Link from "next/link";

const FeaturedPost = () => {

	// hook for getting recent post
  const [featured, setFeaturedPosts] = useState([]);

	// get recent posts
  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
    });
  }, []);

  console.log(featured);
  return (
    <div>
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-24 bg-dark-krem">
          <div className="absolute inset-0"></div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 ">
            <h1 className="text-4xl text-center tracking-tight text-white md:text-5xl lg:text-6xl">
              Blog
            </h1>
            <p className="mt-6  text-center text-xl text-krem">
              Stay up to date on the latest from Space and best practices from
              the world of HR.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-6xl mx-auto relative z-10  px-4 sm:px-6 lg:px-0"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1  lg:grid-cols-1 ">
            {featured.map((featured, index) => (
              <div key={featured.title}>
                <div className="relative bg-white shadow-md p-4">
                  <div className="h-56  sm:h-72 lg:absolute  lg:w-1/2">
                    <img
                      className="w-full h-full object-cover"
                      src={featured.image.url}
                      alt="Support team"
                    />
                  </div>
                  <div className="relative max-w-7xl py-8 lg:pb-24 ">
                    <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
                      <p className="text-sm font-medium pt-10 uppercase text-gray-400">
                        <Link href="/blog/[slug]" as={`/blog/${featured.category.slug}`}>
                          <a className="hover:underline">{featured.category.name}</a>
                        </Link>
                      </p>
                      <h2 className=" text-3xl  text-gray-900 sm:text-4xl">
                        {featured.title}
                      </h2>
                      <p className=" text-lg pt-1 text-gray-500">
                        {featured.excert}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedPost;
