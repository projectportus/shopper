import React from "react";
import products from "@/assets/data/productInfo/products";
import ProductDetails from "./ProductDetails/ProductDetails";
import AdditionalInfo from "./AdditonalInfo/AdditionalInfo";
import Products from "../Productslist/Products";
import ClonnedFooter from "@/components/shared/sharedComponents//ClonnedFooter/ClonnedFooter";
const ProductInfo = () => {
  const product = products[0];

  return (
    <div className="">
      <div className="h-full mb-[100px] md:h-[820px] flex flex-col justify-around md:flex-row md:justify-center  md:items-center ">
        <div className="main-info-block w-[90%] h-[95%]  md:flex md:items-start md:justify-around">
          <div className="p-photos-group p-5 md:p-0 md:h-[500px] w-[100vw] mt-[20px] flex flex-col items-center md:flex-row md:justify-between   md:w-fit">
            <div className="secondary-ph flex w-full p-2 md:p-0 md:w-[76px] md:h-full md:flex-col flex-row justify-between md:justify-start gap-2 md:gap-4 order-2 md:order-1">
              {product.secondaryPhotos.map((img, index) => (
                <div
                  key={index}
                  className="photo-bl bg-[#F9F1E7] flex justify-center items-center w-[76px] h-[80px] rounded-xl"
                >
                  <img
                    src={img}
                    alt={`Secondary ${index}`}
                    className="w-full h-auto cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <div className="main-photo flex justify-center items-center w-[90vw] md:w-fit h-[80vh] md:h-full mb-4 md:mb-0 order-1 md:order-2">
              <div className="main-cont bg-[#F9F1E7] rounded-xl h-full w-full md:h-full md:w-[90%] flex justify-center items-center">
                <img
                  src={product.mainPhoto}
                  alt="Main Product"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="buy-block w-[100vw] h-fit md:w-[606px] md:h-[703px]">
            <ProductDetails />
          </div>
        </div>
      </div>
      <AdditionalInfo />
      <Products label="Related Products" />
      <div className="border-t border-gray-200 mt-[100px] p-[20px]">
        <ClonnedFooter />
      </div>
    </div>
  );
};

export default ProductInfo;
