import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context-api/DataContext";

const ProductDisplay = () => {
  const { data, loading, error } = useContext(DataContext);
  const { id } = useParams();
  console.log(data)
  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Find the product that matches the id
  const product = data.find((prod) => prod.id === parseInt(id));

  // Check if the product exists
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-4xl mt-10 mx-auto p-4">
      <div className="flex flex-col gap-5 md:flex-row items-center">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl mt-4 text-gray-700">Price: ${product.price}</p>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
