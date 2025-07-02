import React from "react";
import ProductCard from "./PrCard/Productcard";
import "./Products.css";
import Button from "@/components/shared/sharedComponents/Universals/Button";
import data from "@/assets/data/products-list/productsdata.js";

const Products = ({ label }) => {
  const [visibleProducts, setVisibleProducts] = React.useState(4);

  const loadMorePage = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className="w-full h-full mt-20 flex flex-col justify-between items-center">
      <h1 className="title-pr text-[30px] md:text-5xl  text-black">{label}</h1>
      <div className="product-cont h-[95%] w-[100vw] md:w-[80%] mt-[32px] grid gap-5 grid-cols-2 md:grid-cols-4 p-5 md:p-0 ">
        {data.slice(0, visibleProducts).map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            desc={item.desc}
            price={item.price}
            image={item.image}
            badgeStatus={item.bagdeStatus}
            offer={item.offer}
            discount={item.discount}
          />
        ))}
      </div>

      {visibleProducts < data.length && (
        <Button text={"Show More"} onClick={loadMorePage} />
      )}
    </div>
  );
};

export default Products;
