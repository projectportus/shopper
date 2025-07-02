import React from "react";
import Icons from "@/assets/icons/shared/ui-icons/Icons";
const Navbar = () => {
  return (
    <div className="w-full h-auto md:h-[100px] flex flex-wrap items-center justify-center md:justify-start bg-[#F9F1E7] p-4 mt-[14px]">
      <h3 className="flex flex-wrap items-center gap-2 text-[14px] md:text-[16px] md:ml-[100px] text-center md:text-left">
        <span className="font-[500]">Home</span> {Icons.chevron__right}
        <span>Shop</span> {Icons.chevron__right}
        <span className="border-l px-3 md:ml-2 md:px-4 text-xl md:text-xl">
          Asgaard sofa
        </span>
      </h3>
    </div>
  );
};

export default Navbar;
