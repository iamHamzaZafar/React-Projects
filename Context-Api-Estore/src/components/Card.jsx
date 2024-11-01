import React, { useContext } from "react";
import { DataContext } from "../context-api/DataContext";
import { Link } from "react-router-dom";

const Card = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="no-underline">
            <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center h-[420px]">
              {/* Image container with a fixed height */}
              <div className="w-full h-[200px] flex items-center justify-center rounded-lg overflow-hidden bg-gray-100 mb-4">
                <img className="max-h-full max-w-full object-contain" src={item.image} alt={item.title} />
              </div>

              {/* Title with increased height to show two lines */}
              <h1 className="text-lg font-semibold mb-2 text-gray-800 text-center h-[48px] overflow-hidden">
                {item.title}
              </h1>

              {/* Footer with price and rating */}
              <div className="flex items-center justify-between w-full px-4 text-gray-600 mt-auto">
                <span className="text-lg font-bold">${item.price}</span>
                <span className="text-sm bg-yellow-300 px-2 py-1 rounded-md">{item.rating.rate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
