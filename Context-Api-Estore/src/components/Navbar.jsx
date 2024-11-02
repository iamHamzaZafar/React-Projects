import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context-api/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Get the current route
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-700 text-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-gray-300 transition duration-200">
          <Link className="text-yellow-500" to="/">Easy-Shop</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/"
            className={`hover:text-gray-300 transition duration-200 ${
              isActive("/") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/all-products"
            className={`hover:text-gray-300 transition duration-200 ${
              isActive("/all-products") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            All Products
          </Link>
          <Link
            to="/about"
            className={`hover:text-gray-300 transition duration-200 ${
              isActive("/about") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/cart"
            className={`hover:text-gray-300 transition duration-200 ${
              isActive("/cart") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            Cart
          </Link>
        </div>

        {/* Right Side - Cart Icon with Item Count */}
        <div className="relative flex items-center space-x-4">
          <Link to="/cart">
            <button className="flex items-center hover:text-gray-300 focus:outline-none transition duration-200">
              <FaShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {cartItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
