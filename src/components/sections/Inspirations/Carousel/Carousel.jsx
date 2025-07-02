import React from "react";
import arrow from "@/assets/images/Carousel/arrow.svg";
import dataImages from "@/assets/data/carousel/carousel-data.js";

const Carousel = () => {
  const [next, setNext] = React.useState(0);
  const totalSlides = 3;
  const nextCard = () => {
    setNext((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="w-[100%] max-[768px]:mt-5 md:w-[55%] h-[80%] mb-5">
      <div className="carbody md:w-[100%] h-[486px] m-left relative flex justify-between max-[768px]:flex-col items-center ">
        <div
          style={{ backgroundImage: `url(${dataImages[next]})` }}
          className="w-[80%] h-[100%] car-cards md:w-[372px] md:h-[486px] rounded-2xl bg-center bg-cover duration-500 transform origin-bottom-right hover:w-[404px] hover:h-[585px] relative group flex justify-center items-end "
        >
          <div className="infoBlock w-[60%] h-[25%] bg-white/50 backdrop-blur-md mb-5 mr-15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-center items-center">
            <p className="text-gray-400 text-md font-medium">01 —— Bed Room</p>
            <h2 className="text-black text-2xl font-semibold">Inner Peace</h2>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${dataImages[(next + 1) % totalSlides]})`,
          }}
          className="car-cards w-[372px] h-[486px] rounded-2xl transition-opacity duration-700 bg-center bg-cover max-[1024px]:hidden "
        ></div>
        <div
          className="arrow-next absolute right-[0%] top-50"
          onClick={nextCard}
        >
          <img src={arrow} alt="arrow-next" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
