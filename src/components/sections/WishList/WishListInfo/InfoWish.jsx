import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistSlice";
import { Heart } from "lucide-react";
const InfoWish = () => {
  const wishList = useSelector((state) => state.wishList.items);
  const dispatch = useDispatch();
  return (
    <div className="p-5">   
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center">
        {wishList.map((product) => (
          <div key={product.id} className="shadow rounded relative w-[250px] md:w-fit p-2">
            <img
              src={product.image}
              alt={product.title}
              className="w-fit h-fit object-cover rounded"
            />
            <h2 className="font-semibold text-[26px] mt-2">{product.title}</h2>
            <button
              onClick={() => dispatch(removeFromWishlist(product.id))}
              className="text-red-500 underline absolute top-3 left-3 cursor-pointer"
            >
              <Heart
                className="w-7 h-7 stroke-red-500 transition-all duration-300"
                style={{
                  fill: "red",
                  transition: "fill 0.6s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.fill = "transparent")
                }
                onMouseLeave={(e) => (e.currentTarget.style.fill = "red")}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoWish;
