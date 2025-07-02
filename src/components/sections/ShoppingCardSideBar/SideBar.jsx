import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { CircleX } from "lucide-react";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import { sub } from "framer-motion/client";

const SideBar = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      const timeout = setTimeout(() => {
        document.documentElement.style.overflow = "";
        document.body.style.paddingRight = "";
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed inset-0 bg-[rgba(49,49,49,0.8)] z-50 
        transition-opacity duration-400 ease
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`sidebar bg-white w-[100vw] 
      md:max-w-[417px] h-[100vh] md:h-[90vh] 
      z-51 rounded-bl-[20px] absolute right-0 
      flex flex-col justify-between 
      transform transition-transform duration-200 ease
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="shop-cart-info w-full p-5 flex-1 overflow-hidden ">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-[24px] font-semibold">Shopping Cart</h2>
            <button onClick={() => setOpen(false)}>
              <ShoppingBag />
            </button>
          </div>
          <hr className="border-t border-gray-300" />

          <div className="shopBLock max-h-[90%] py-5 px-2 flex flex-col gap-4  overflow-y-auto">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="singleShopEl flex justify-between gap-5 items-center bg-white rounded-xl shadow-lg p-4"
              >
                <div className="product-pic w-[98px] h-[90px]  rounded-xl flex justify-center items-center">
                  <img
                    className="rounded-xl w-22 h-22 object-cover "
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="pr-info flex flex-col justify-between">
                  <span className="item-name">{item.title}</span>
                  <div className="total-price flex items-center">
                    <span className="quantity">{item.quantity}</span>
                    <X size={16} />
                    <span className="price text-[15px] text-[#B88E2F] font-semibold">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                >
                  <CircleX
                    className="hover:text-[#B88E2F] transition-all ease-in-out duration-300 cursor-pointer"
                    size={30}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="final-block p-5 border-t border-gray-300">
          <div className="subtotal flex justify-between mb-4">
            <span>Subtotal</span>
            <span className="sub-p text-[#B88E2F]">
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>
          <div className="btns-block md:w-full py-2 flex md:flex-row justify-around md:justify-around  flex-col items-center gap-5">
            <button className="rounded-2xl w-[70vw] md:w-full py-2 border-2 border-black md:px-5 md:py-2">
              <Link className="block w-full h-full" to="/shopping-cart ">
                Cart
              </Link>
            </button>
            <button className="rounded-2xl w-[70vw] md:w-full py-2 border-2 border-black md:px-5 md:py-2">
              <Link className="block w-full h-full" to="/checkout">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
