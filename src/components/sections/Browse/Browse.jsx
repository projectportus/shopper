import React from "react";
import Card from "./Card/Card";
import data from "@/assets/data/browsepart/data.js";
import "./Browse.css";

const Browsetitle = () => {
  return (
    <div className="h-full w-full flex justify-center items-center mt-15">
      <div className="box-title flex flex-col items-center w-[90%] h-[100%]">
        <div className="text-content-2 flex flex-col items-center mt-2 text-center">
          <h1 className="text-browse text-color font-black text-[2rem] md:text-4xl mb-5">
            Browse The Range
          </h1>
          <p className="text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="card-container w-[70vw] flex flex-col md:gap-5 md:flex-row md:justify-around items-center md:w-full md:h-fit mt-15">
          {data.map((item, index) => (
            <Card key={index} text={item.text} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browsetitle;
