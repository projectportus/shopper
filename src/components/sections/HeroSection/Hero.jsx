import React from "react";
import Button from "@/components/shared/sharedComponents/Universals/Button";
import "../HeroSection/Hero.css";

const Herosection = () => {
  return (
    <div className="herosection w-full h-[80vh] flex flex-column items-center md:min-h-[120vh]  md:justify-end max-[768px]:justify-center">
      <div className="mask text-center w-[80vw]  md:mr-15 md:w-160 md:h-110 md:text-start flex md:justify-center items-center rounded-2xl">
        <div className="wrapper flex flex-col justify-between">
          <div className="text-content md:w-xl md:h-90 flex flex-col items-center md:items-start md:justify-between p-5 ">
            <h6 className="text-[1.5rem] w-fit md:text-lg tracking-widest font-bold ">
              New Arrival
            </h6>
            <h1 className="text-[1.5rem]  w-fit md:text-5xl md:mt-0 mt-2 text-[#B88E2F] md:flex md:justify-start justify-center flex-wrap">
              Discover Our <span>New Collection</span>{" "}
            </h1>
            <p className="text-[0.85rem]  w-fit md:text-xl md:mt-0 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="mt-5 md:mt-0">
              <Button text={"BUY NOW"} width={"222px"} height={"52px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
