import React from "react";

const ProductCard = ({
  title,
  desc,
  price,
  image,
  offer,
  badgeStatus,
  discount,
}) => {
  let color = discount ? "#E97171" : "#2EC1AC";

  return (
    <div className="card-product w-fit bg mb-5 relative">
      {badgeStatus && (
        <div
          className="bagde absolute top-4 right-4 md:top-[24px] md:right-[24px] text-[12px] md:text-[1rem] w-[30px]  h-[30px] md:w-[40px] md:h-[40px] rounded-4xl flex justify-center items-center text-white"
          style={{ backgroundColor: color }}
        >
          {offer}
        </div>
      )}
      <img src={image} alt="imageFurn" />
      <div className="text-content flex flex-col justify-between md:h-35 p-2 gap-5 md:gap-0">
        <h1 className="md:text-pr-c text-[1.2rem] md:text-[1.8rem]">{title}</h1>
        <p className="text-gray-500 text-[1rem] md:text-[1rem]">{desc}</p>
        <h2 className="font-bold text-[#B88E2F] md:text-[1rem]">{price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
