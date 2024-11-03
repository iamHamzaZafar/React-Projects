import React from "react";
import { useContext } from "react";
import { DataContext } from "../context-api/DataContext";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav className="w-4/5 mx-auto flex justify-end mb-10 mt-4">
      <p className="text-gray-600 mr-5 text-center">Pages</p>
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
            } flex items-center justify-center w-8 h-8 rounded cursor-pointer`}
          >
            <a onClick={(e) => paginate(number, e)} href="#!" className="w-full h-full flex items-center justify-center">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
