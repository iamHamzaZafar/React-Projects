import React, { useState } from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { DataContext } from "../context-api/DataContext";
import Pagination from "../components/Pagination";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const { data, loading, error } = useContext(DataContext);
  console.log("data length", data.length) ;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log("current posts are" , currentPosts , currentPage);
  console.log()
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <>
      {/* <Card products={data}  /> */}
      <Card products={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default AllProducts;
