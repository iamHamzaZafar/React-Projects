import React from "react";
import { useContext } from "react";
import { DataContext } from "../context-api/DataContext";
import Card from "./Card";

const FeatureProduct = () => {
  const { data, loading, error } = useContext(DataContext);
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const featuredProducts = data.filter((data) => {
    return data.rating.rate >= 4.7;
  });

  console.log(featuredProducts) ;
  return (
    <div className="p-8">
    <h1 className="text-2xl font-bold text-center mb-8">Featured Products</h1>
    <Card products={featuredProducts} />
  </div>
  )
};

export default FeatureProduct;
