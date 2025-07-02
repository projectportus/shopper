import React from "react";
import { useNavigate } from "react-router-dom";
import Icons from '@/assets/icons/shared/ui-icons/Icons.jsx'
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { useSelector } from "react-redux";
import { toggleWishlist } from "@/store/wishlistSlice";
import { CircleCheck } from "lucide-react";
import { Heart } from "lucide-react";
import { HeartCrack } from "lucide-react";

const productСard = ({ product, offer, bagdeStatus, discount }) => {
  let color = discount ? "#E97171" : "#2EC1AC";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlist = useSelector((state) => state.wishList);
  const isInWishlist = wishlist.items.some((item) => item.id === product.id);

  const handleClick = () => {
    navigate("/single-product", { state: { product }, replace: true });
  };

  const showWishlistToast = (title, isInWishlist) => {
    toast(
      <div className="w-fit h-fit min-w-[200px] flex gap-2 text-[#B88E2F] bg-[#FFF3E3] font-semibold rounded-[5px] shadow-md px-4 py-2 text-center truncate">
        {isInWishlist ? (
          <HeartCrack className="text-[#B88E2F]" />
        ) : (
          <Heart className="text-[#B88E2F]" />
        )}
        {isInWishlist ? `Removed from Wish List` : `Added to Wish List`}
      </div>,
      {
        icon: false,
        closeButton: false,
        style: {
          background: "transparent",
          boxShadow: "none",
          padding: 0,
          width: "auto",
          height: "auto",
        },
        bodyStyle: { padding: 0, margin: 0 },
      }
    );
  };

  const handleAddtoCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        desc: product.desc,
        price: product.price,
        image: product.image,
      })
    );

    toast(
      <div className="w-fit h-fit min-w-[250px]  flex gap-2 text-[#B88E2F] bg-[#FFF3E3] font-semibold rounded-[5px] shadow-md px-4 py-2 text-center truncate">
        <CircleCheck className="text-[#B88E2F]" />
        {product.title} added to cart
      </div>,
      {
        icon: false,
        closeButton: false,
        style: {
          background: "transparent",
          boxShadow: "none",
          padding: 0,
          width: "auto",
          height: "auto",
        },
        bodyStyle: { padding: 0, margin: 0 },
      }
    );
  };

  return (
    <div className="card-product new mb-5 relative">
      <div onClick={handleClick} className="overlay"></div>

      {bagdeStatus && (
        <div
          className="badge absolute top-[24px] right-[24px] w-[48px] h-[48px] rounded-4xl flex justify-center items-center text-white"
          style={{ backgroundColor: color }}
        >
          {offer}
        </div>
      )}

      <div className="hover-content text-white text-center ">
        <button
          onClick={handleAddtoCart}
          className="bg-white text-[#B88E2F] w-[200px] h-[50px] md:w-[200px] md:h-[50px] font-semibold cursor-pointer hover:bg-[#B88E2F] hover:text-white transition-all ease-in-out duration-200 "
        >
          Add to cart
        </button>
        <div className="flex justify-around mt-5 items-center">
          <button className="flex items-center font-semibold gap-1 cursor-pointer">
            {Icons.share}Share
          </button>
          <button
            onClick={() => {
              dispatch(toggleWishlist(product));
              showWishlistToast(product.title, isInWishlist);
            }}
            className="flex items-center font-semibold gap-1 cursor-pointer"
          >
            {Icons.like}
            {isInWishlist ? "Unlike" : "Like"}
          </button>
        </div>
      </div>

      <img src={product.image} alt="" />
      <div className="text-content flex flex-col justify-between h-35 p-2">
        <h1 className="text-pr-c text-4xl text-amber-50">{product.title}</h1>
        <p>{product.desc}</p>
        <h2 className="font-bold">Rp {product.price}</h2>
      </div>
    </div>
  );
};

export default productСard;
