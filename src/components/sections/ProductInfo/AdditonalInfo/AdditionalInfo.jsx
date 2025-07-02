import React, { useState } from 'react'
import products from '@/assets/data/productInfo/products';
const AdditionalInfo = () => {
  const product = products[0]; 

  const [select, setSelect] = useState("Description");

  const selectOption = (option) => {
    setSelect(option);
  };

  const ContentT1Returnus = () => {
    switch (select) {
      case "Description":
        return (
          <div>
            {product.options.desc.t1}
          </div>
        );
      case "Additional Information":
        return (
          <div>
            {product.options.add.t1}
          </div>
        );
      case "Reviews [5]":
        return (
          <div>
            {product.options.rev.t1}
          </div>
        );
      default:
        return <p>No data available</p>;
    }
  };

  const ContentT2Returnus = () => {
    switch (select) {
      case "Description":
        return (
          <div>
            {product.options.desc.t2}
          </div>
        );
      case "Additional Information":
        return (
          <div>
            {product.options.add.t2}
          </div>
        );
      case "Reviews [5]":
        return (
          <div>
            {product.options.rev.t2}
          </div>
        );
      default:
        return <p>No data available</p>;
    }
  };

  return (
    <div className="additional-info h-fit md:h-[744px] flex flex-col items-center">
        <div className="options-block md:p-0 md:gap-0 p-5 gap-5 w-fit h-fit md:w-[649px] text-[16px]  md:text-[24px] md:h-[36px] font-semibold flex justify-between md:mt-[48px]">
          {
            ["Description","Additional Information","Reviews [5]"].map( (option) => (
              
                <button onClick={() => selectOption(option)} className={`text-[${select === option ? "#000000" : "#9F9F9F"}]`}>
                  {option}
                </button>
              
              )) 
          }
        </div>
        <div className="transitional-text h-fit  md:h-[174px] w-[80%] mt-[37px] flex flex-col  justify-between text-[16px] text-gray-500">
          <div className="t1 text-justify transition ease-in duration-300">
            {ContentT1Returnus()}
          </div>
          <div className="t2 text-justify transition ease-in duration-300">
            {ContentT2Returnus()}
          </div>
        </div>
        <div className="banner-img flex-col md:flex-row h-fit md:h-[348px]  mt-[36px] flex gap-[20px]">
          {product.additionalPhotos.map((img, index) => (
            <div key={index} className='w-[80vw] md:w-[605px] bg-[#F9F1E7] rounded-2xl'> 
              <img src={img}  className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
      </div>
  )
}

export default AdditionalInfo
