import React, { useContext } from "react";
import { CartContext } from "../context-api/CartContext";
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 flex flex-col md:flex-row justify-between">
      {/* Cart Items Section */}
      <div className="w-full md:w-3/5">
        <h2 className="text-4xl font-bold text-gray-700 mb-6">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                {/* Product Image */}
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Product Details */}
                <div className="flex flex-col flex-grow pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-blue-600 hover:underline mt-2 text-sm"
                  >
                    Remove
                  </button>
                </div>
                {/* Product Price */}
                <div className="text-xl font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Summary Section */}
      {cart.length == 0 ? (
        " "
      ) : (
        <div className="w-full md:w-1/3 mt-10 md:mt-0 md:ml-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-800">
                ${calculateTotal()}
              </span>
            </div>
            {/* Order Total */}
            <div className="border-t mt-4 pt-4 flex justify-between">
              <span className="text-lg font-semibold text-gray-700">
                Order Total
              </span>
              <span className="text-lg font-semibold text-gray-800">
                ${calculateTotal()}
              </span>
            </div>
          </div>
          {/* Checkout/Login Button */}
          <button
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold"
            disabled={cart.length === 0}
          >
            {/* 
             */}
             Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
