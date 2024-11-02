import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gray-700 text-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold">Shop-Now</div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to={"/"} className="hover:text-gray-200">
            Home
          </Link>
          <Link to={"/all-products"} className="hover:text-gray-200">
            All Products
          </Link>
          <Link to={"/about"} className="hover:text-gray-200">
            About
          </Link>
          <Link to={"/cart"} className="hover:text-gray-200">
            Cart 
          </Link>
        </div>

        {/* Right Side - Cart */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart Icon */}
         <Link to={'/cart'}> <button
            className="flex items-center hover:text-gray-200 focus:outline-none"
          >
            <FaShoppingCart size={24} />
          </button></Link>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;
