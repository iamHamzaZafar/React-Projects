import React from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../../src/assets/hero1.webp';
import hero2 from '../../src/assets/hero2.webp';

const Banner = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center md:items-start justify-evenly w-full max-w-6xl mx-auto p-4">
      {/* Text Section */}
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl md:text-6xl font-mono text-gray-700 font-bold leading-tight">
          We are changing the <br /> way people <br /> shop.
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum obcaecati ullam, dicta
          praesentium harum odit quo adipisci exercitationem magni unde sequi nam corporis hic
          tenetur nostrum nesciunt voluptate asperiores consequuntur.
        </p>
        <Link to="/all-products">
          <button className="px-6 py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
            Our Products
          </button>
        </Link>
      </div>

      {/* Image Section - Hidden on Small Devices */}
      <div className="hidden md:flex space-x-4 w-full max-w-lg">
        <div className="flex-grow">
          <img src={hero1} alt="Hero image 1" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="flex-grow flex flex-col space-y-4">
          <img src={hero2} alt="Hero image 2" className="w-full h-1/2 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
