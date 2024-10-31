import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

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
        </div>

        {/* Right Side - Cart */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart Icon */}
          <button
            onClick={toggleCart}
            className="flex items-center hover:text-gray-200 focus:outline-none"
          >
            <FaShoppingCart size={24} />
          </button>
        </div>
      </nav>

      {/* Full-Screen Cart Overlay */}
      {cartVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white z-50">
          <div className="relative w-11/12 max-w-2xl p-6 bg-white text-black rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              onClick={toggleCart}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              Close
            </button>

            {/* Cart Content */}
            <h2 className="text-xl font-semibold mb-4 text-center">
              Shopping Cart
            </h2>
            <p className="text-center">Your Cart is Empty</p>
            {/* Additional cart items or actions can be added here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
