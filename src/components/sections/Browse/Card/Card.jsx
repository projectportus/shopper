import React from "react";

const Card = ({ text, image }) => {
  return (
    <div className="group h-full mt-5 rounded-[10px]">
      <div className="img-cont overflow-hidden rounded-[10px] shadow-md transition-shadow duration-300 group-hover:shadow-[0px_10px_50px_rgba(0,0,0,0.3)]">
        <img
          src={image}
          alt="images"
          className="rounded-[10px] w-full h-auto"
        />
      </div>
      <h1 className="text-browse text-2xl text-center text-black mt-5 transition-all duration-300 group-hover:text-4xl h-[40px]">
        {text}
      </h1>
    </div>
  );
};

export default Card;
