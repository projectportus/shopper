import React, { use, useState } from "react";
import {
  Star,
  StarHalf,
  Minus,
  Plus,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import products from "@/assets/data/productInfo/products";

const ProductDetails = () => {
  const product = products[0];

  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;

  const [quantity, setQuantity] = useState(1);

  const [selectSize, setSelectSize] = useState(null);

  const sizeSelecter = (size) => {
    setSelectSize(size);
  };

  const [selectColor, setSelectColor] = useState(null);

  const selectColors = (color) => {
    setSelectColor(color);
  };

  const [cart, setCart] = useState(false);

  const addToCart = () => {
    setCart(true);
    console.log(cart);
  };

  const quantityButtonInc = () => {
    setQuantity((prev) => prev + 1);
  };
  const quantityButtonDec = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="w-full h-fit md:h-full ">
      <div className="product-info w-full h-[70%] flex flex-col justify-between gap-4 md:items-start items-center">
        <div className="item-chars w-fit h-fit md:w-[70%] md:h-[232px] flex flex-col p-5 md:p-0 gap-10 md:gap-0 justify-between  items-center md:items-start">
          <div className="item-name text-[42px]">{product.name}</div>
          <div className="item-price text-[24px] text-gray-500 ">
            {product.price}
          </div>
          <div className="item-rating flex items-center">
            {Array(fullStars)
              .fill(null)
              .map((_, i) => (
                <Star key={i} size={18} fill="#FFC700" stroke="none" />
              ))}
            {hasHalfStar && <StarHalf size={18} fill="#FFC700" stroke="none" />}
            <div className="customers-review text-[13px] pl-2 text-gray-500 border-l-1">
              {product.reviews} Customer Review
            </div>
          </div>
          <div className="item-desc text-justify">{product.description}</div>
        </div>

        <div className="item-parametrs flex flex-col w-full items-center md:items-start md:w-fit p-5 md:p-0 gap-7  ">
          <div className="item-sizes p-5 md:p-0 w-fit h-fit   md:w-[122px] md:h-[63px] flex  items-center gap-5 md:gap-0 md:flex-col md:justify-between md:items-start">
            <div className="text-[#9F9F9F] text-[45px] md:text-[16px]">
              Size
            </div>
            <div className="flex justify-between w-full gap-5 md:gap-0">
              {product.sizes.map((size, index) => (
                <button
                  onClick={() => sizeSelecter(size)}
                  className="w-[50px] h-[50px] md:w-[30px]  md:h-[30px] font-semibold md:font-medium text-[20px] md:text-[13px] flex items-center justify-center rounded-md"
                  style={{
                    background: selectSize === size ? "#B88E2F" : "#F9F1E7",
                    color: selectSize === size ? "#FFFFFF" : "#000000",
                  }}
                  key={index}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="item-colors p-5 md:p-0 w-fit h-fit md:w-[122px] md:h-[63px] flex  items-center gap-5 md:gap-0 md:flex-col md:justify-between md:items-start">
            <div className="text-[#9F9F9F] text-[30px] md:text-[16px]">
              Color
            </div>
            <div className="flex justify-between w-full gap-5 md:gap-0">
              {product.colors.map((color, index) => (
                <button
                  className="w-[30px] h-[30px] rounded-full"
                  style={{
                    background: `${color.hex}`,
                    border: selectColor === color ? "5px double #F9F1E7" : "0",
                  }}
                  onClick={() => {
                    selectColors(color);
                  }}
                  key={index}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="item-btns w-[100vw] md:w-full  md:h-[64px] flex flex-col items-center md:flex-row  md:justify-between gap-5 ">
          <div className="btn-quantity w-[50vw] md:w-[123px] h-[8vh] md:h-full rounded-[15px] flex items-center justify-around border-2">
            <button onClick={quantityButtonDec} className="text-2xl">
              <Minus />
            </button>
            <div className="w-[6px] flex justify-center text-xl">
              {" "}
              {quantity}
            </div>
            <button onClick={quantityButtonInc} className="text-2xl">
              <Plus />
            </button>
          </div>
          <div className="add-tocard btn-quantity w-[60vw] md:w-[215px] h-[8vh] md:h-full border-2  rounded-[15px] text-[20px] flex justify-center items-center">
            <button onClick={addToCart}>Add to Cart</button>
          </div>
          <div className="compare btn-quantity w-[70vw] md:w-[215px] h-[8vh] md:h-full border-2  rounded-[15px]  text-[20px] flex justify-center items-center">
            <button>+ Compare</button>
          </div>
        </div>
      </div>

      <div className="product-r p-5 md:p-0 mt-[100px] w-full h-[20%] flex flex-col justify-end text-[16px] border-t-2 text-gray-500  md:mt-[60px]">
        <div className="SKU inline-flex items-center ">
          <div className="w-[95px]">SKU</div>
          <span className="ml-2">
            : <span className="ml-5">SS001</span>
          </span>
        </div>
        <div className="Category inline-flex items-center ">
          <div className="w-[95px]"> Category</div>
          <span className="ml-2">
            : <span className="ml-5"> Sofas </span>
          </span>
        </div>
        <div className="tags inline-flex items-center ">
          <div className="w-[95px]"> Tags</div>
          <span className="ml-2">
            : <span className="ml-5"> Sofa, Chair, Home, Shop </span>
          </span>
        </div>
        <div className="Share inline-flex items-center ">
          <div className="w-[95px]"> Share</div>
          <span className="ml-2 flex w-[120px] gap-2">
            :{" "}
            <span className="ml-5 flex justify-between  w-full">
              <Facebook /> <Linkedin /> <Twitter />{" "}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
