import React from "react";
import bg from "@/assets/images/Furnirobg/bg.svg";
const Furn = () => {
  return (
    <div
      className="w-full min-h-screen mt-[10%] flex justify-center relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="md:hidden absolute   "></div>
      <div className="wrap text-center z-2 mt-5">
        <h3 className="text-1xl md:text-xl text-gray-400">
          Share your setup with
        </h3>
        <h1 className="text-4xl md:text-4xl text-black">#FuniroFurniture</h1>
      </div>
    </div>
  );
};

export default Furn;
