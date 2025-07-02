import React from "react";
import Button from "@/components/shared/sharedComponents/Universals/Button";
import Karousel from "./Carousel/Karousel";
import "./Inspiration.css";
const Inspirations = () => {
  return (
    <div className="banner-a w-full min-h-screen mt-20 flex justify-around  items-center max-[768px]:flex-col max-[768px]:justify-around gap-20">
      <div className="text-content md:text-start text-center md:h-[47%] md:w-[30%] flex flex-col justify-between mt-[10vh] items-center md:items-start md:ml-[5%]">
        <h1 className="text-tle text-[2rem] md:text-5xl mt-5 md:mt-0">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="w-[70%] text-[1rem] mt-5 md:mt-0">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Button text="Explore More" width={"222px"} height={"52px"} />
      </div>
      <Karousel></Karousel>
    </div>
  );
};

export default Inspirations;
