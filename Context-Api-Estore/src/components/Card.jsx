import React from "react";
import { useContext } from "react";
import { DataContext } from "../context-api/DataContext";

const Card = () => {
  const { data, loading, error } = useContext(DataContext);
  function showData() {
    console.log("Data", data);
    console.log("Loading", loading);
    console.log("Error", error);
  }
  return (
    <div className="flex flex-wrap  gap-5" >
      {data.map((item) => {
        return (
          <div className="border w-[300px] h-[300px]" key={item.id}>
            <h1>{item.title}</h1>
            <div>
              <img className="w-[50%]" src={item.image} alt="" />
            </div>
            <p>{item.description}</p>
            <div>
              <span>{item.price}</span>
              <span>{item.rating.rate}</span>
            </div>
          </div>
        );
      })}
      <button onClick={showData}>show data</button>
    </div>
  );
};

export default Card;
