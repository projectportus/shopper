import React from "react";
import Icons from "@/assets/icons/header-icons/icons";
const CompanyInfo = () => {
  return (
    <div className="bg-[#FAF3EA] h-[500px] md:h-[270px] mt-[85px] flex flex-col items-center justify-center md:justify-center md:items-center">
      <div className="features-section h-full w-full md:w-[90%] md:h-[70px] gap-[20px] md:flex-row md:justify-between md:items-start flex flex-col items-center justify-around ">
        <div className="features flex items-center w-[90%]  justify-evenly ">
          {Icons.trophy}
          <div className="f-text flex-col  w-[70%]">
            <div className="f1 font-semibold text-xl">High Quality</div>
            <div className="f2">crafted from top materials</div>
          </div>
        </div>
        <div className="features flex items-center  w-[90%]   justify-evenly ">
          {Icons.checkmark}
          <div className="f-text flex-col  w-[70%]">
            <div className="f1 font-semibold text-xl">Warranty Protection</div>
            <div className="f2">Over 2 years</div>
          </div>
        </div>
        <div className="features flex items-center  w-[90%]   justify-evenly ">
          {Icons.shipping}
          <div className="f-text flex-col  w-[70%]">
            <div className="f1 font-semibold text-xl">Free Shipping</div>
            <div className="f2">Order over 150 $</div>
          </div>
        </div>
        <div className="features flex items-center w-[90%]  justify-evenly ">
          {Icons.support}
          <div className="f-text flex-col  w-[70%]">
            <div className="f1 font-semibold text-xl">24 / 7 Support</div>
            <div className="f2">Dedicated support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
