import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { DataContext } from "../context-api/DataContext";
import Pagination from '../components/Pagination'

const AllProducts = () => {
  const { data, loading, error } = useContext(DataContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;


  return (
    <>
    <Card products={data}  />
    <Pagination />
    </>
    
  );
};

export default AllProducts;
