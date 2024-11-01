import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg md:max-w-2xl text-center px-4 py-8 bg-white shadow-md rounded-lg">
        {/* Heading with two colors */}
        <h1 className="text-3xl font-bold">
          <span className="text-blue-600">Welcome to</span>{" "}
          <span className="text-yellow-500">Shop-Now</span>
        </h1>

        {/* Paragraph about the store */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          At Shop-Now, we are dedicated to bringing you the latest trends and highest quality products. 
          We pride ourselves on exceptional customer service and an ever-growing selection of items tailored 
          to fit your style and budget. Enjoy a seamless shopping experience with us, where satisfaction is 
          our top priority.
        </p>
      </div>
    </div>
  );
};

export default About;
