import React from "react";
import { Trash2 } from "lucide-react";
import Button from "@/components/shared/sharedComponents/Universals/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import { ShoppingCart } from "lucide-react";
import { div, sub } from "framer-motion/client";

const Goods = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return cartItems.length === 0 ? (
    <div className="w-full h-[70vh] mt-[40px] flex justify-center p-2">
      <div
        className="bg-white w-fit h-full px-7 rounded-2xl flex justify-center items-center"
        style={{ boxShadow: "0 0 7px gray" }}
      >
        <div className="flex flex-col items-center h-fit justify-center text-center">
          <div className="w-32 h-32 mb-6 flex justify-center items-center">
            <ShoppingCart size={120} className="text-[#B88E2F]" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/shop">
            <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-[#B88E2F] transition-all ease-in-out duration-400 cursor-pointer ">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-auto  mt-[50px] w-full flex justify-center">
      <div className="int h-[150vh] b md:h-auto w-[90%] flex flex-col md:flex-row  md:justify-between ">
        <div className="w-full md:w-[70%] md:h-full flex flex-col md:mr-[30px] ">
          <div className="pr-info w-full h-[55px] hidden md:flex">
            <div className="flex justify-evenly w-full h-[55px] font-semibold items-center text-[24px]  bg-[#F9F1E7] text-center text-black">
              <div>Product</div>
              <div className="md:ml-[100px]">Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>
          </div>

          <div className="pr-block h-fit md:w-full md:h-fit mt-[15px] bg-[#F9F1E7] rounded-2xl md:rounded-[0px] md:bg-white ">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="pr-single w-full flex flex-col md:flex-row justify-between items-center gap-4 p-4"
              >
                <div className="item-img w-full bg-[#F9F1E7] h-[200px] md:w-[108px] md:h-[105px] rounded-2xl flex justify-center items-center">
                  <img
                    src={item.image}
                    alt="#"
                    className="object-cover rounded-2xl w-full h-full"
                  />
                </div>

                <div className="item-price flex flex-col md:flex-row gap-5 w-full md:w-[703px] items-center justify-between text-center md:text-left">
                  <div className="name md:w-[100px] text-[24px] md:text-[20px] md:text-base">
                    {item.title}
                  </div>
                  <div className="price hidden md:block text-[24px] md:text-[18px] md:text-base">
                    Rs. {item.price}
                  </div>
                  <div className="qnty w-[50px] h-[50px] md:w-[32px] md:h-[32px] rounded-[8px] border-[2px] flex justify-center text-[20px] items-center border-black">
                    {item.quantity}
                  </div>
                  <div className="subtotal text-[#B88E2F] font-semibold text-3xl md:text-[18px] md:text-base">
                    Rs. {item.price}
                  </div>
                </div>

                <div className="delete-btn md:mr-5">
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  >
                    <Trash2
                      stroke="#B88E2F"
                      className="cursor-pointer hover:stroke-black transition-all ease-in-out duration-300"
                      size={27}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="g-2 w-full rounded-2xl md:rounded-[0px] h-[400px] md:w-[30%] bg-[#F9F1E7]  md:h-[380px] flex flex-col justify-around items-center mt-10 md:mt-0">
          <h2 className="text-2xl font-semibold">Cart Totals</h2>

          <div className="flex justify-between w-[60%] items-center">
            <span className="text-[1.3rem] font-semibold md:text-[18px]">
              Subtotal
            </span>
            <span className="text-gray-500 text-[16px]">
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between w-[60%] items-center">
            <span className="text-[1.3rem] font-semibold md:text-[18px]">
              Total
            </span>
            <span className="text-[#B88E2F] font-bold text-[20px]">
              Rs.{subtotal.toLocaleString()}
            </span>
          </div>

          <Link to="/checkout">
            <Button text={"CHECK OUT"} width={"196px"} height={"48px"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Goods;
