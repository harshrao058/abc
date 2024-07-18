import React from 'react';
import { RiBuilding2Line } from "react-icons/ri";

const HeroSection = ({text}) => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Your Trusted Partner in {text} Architecture</h1>
        <p className="text-lg mb-8 text-white ">Transforming visions into iconic architecture 
        </p>
        <h1 className="bg-white text-gray-900 py-2 px-6 rounded-full uppercase w-40 m-auto font-semibold hover:bg-gray-300 transition duration-300">
          Learn More
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
