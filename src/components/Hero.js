import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative min-h-screen md:w-full bg-gradient-to-b from-gray-900 via-blue-700 to-blue-800 text-center flex flex-col items-center overflow-hidden">
        <div className=" animate-fadeIn">
          <h1 className="text-8xl font-bold text-white pt-10 animate-pulse">
            Hi!
          </h1>
          <h2 className="text-5xl font-bold text-white pt-6 ">This is Habib</h2>
        </div>
      </section>
    </div>
  );
};

export default Hero;
