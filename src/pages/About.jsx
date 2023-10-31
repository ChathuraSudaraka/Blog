import React from "react";

const About = () => {
  return (
    <div className="bg-white dark:bg-custom-blue" id="skills">
      <div className="lg:mx-12 mx-4 py-32">
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-500 dark:text-blue-300">
                Welcome to Our Story
              </h1>
              <p className="mt-4 text-xl lg:text-2xl text-gray-700 dark:text-gray-400">
                We are a passionate team of individuals dedicated to making a
                difference. Our journey started with a simple idea - to create
                something extraordinary.
              </p>
              <p className="mt-4 text-xl lg:text-2xl text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a
                href="#"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
            <div className="text-center lg:text-right">
              <img
                src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg"
                alt=""
                className="object-cover rounded-lg shadow-lg w-full max-h-96 lg:max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
