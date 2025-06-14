import React from "react";
import image from "../images/photo.jpg";

const Homepage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 leading-tight">
          Connect and Share
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
          Stories
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 lg:mb-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl leading-relaxed">
          Join our community to showcase, share, and discover images.
        </h3>
        <button className="rounded-lg h-10 sm:h-12 lg:h-14 w-32 sm:w-40 md:w-48 lg:w-56 bg-white text-black font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Homepage;
