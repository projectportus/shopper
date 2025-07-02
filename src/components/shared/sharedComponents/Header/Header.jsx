import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/header/logo.svg";
import "../Header/Header.css";
import icons from '@/assets/icons/shared/ui-icons/Icons.jsx'
import { useSelector } from "react-redux";

const Header = ({ setIsOpen }) => {
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const wishListItems = useSelector((state) => state.wishList.items);
  const wishListCount = wishListItems.length;

  return (
    <nav>
      <div className="bg-white flex justify-around items-center h-24 max-[400px]:justify-around md:gap-5 md:justify-around">
        <div className="logoBox flex justify-center w-3xs ">
          <Link to="/" className="w-full h-full">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="links md:text-[18px] hidden lg:flex justify-between items-center w-107 ">
          <Link to="/" className="link-items font-bold anim">
            Home
          </Link>
          <Link to="/shop" className="link-items font-semibold anim">
            Shop
          </Link>
          <Link to="/about" className="link-items font-semibold anim">
            About
          </Link>
          <Link to="/contact-us" className="link-items font-semibold anim">
            Contact Us
          </Link>
        </div>
        <div className="iconsBox w-64 hidden md:flex justify-between items-center  ">
          <Link to="/auth/login" className="icons">
            {icons.profile}f
          </Link>
          <Link to="/shop" className="icons">
            {icons.search}f
          </Link>
          <Link to="/wishList" className="icons relative">
            {icons.heart}f
            <div className="absolute top-[-10px] left-[60%] bg-[#B88E2F] text-[.8rem] font-semibold flex justify-center items-center w-[23px] h-[23px] rounded-2xl text-white">
              {wishListCount}
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            href="#"
            className="icons relative"
          >
            {icons.shoppingCart}f
            <div className="absolute top-[-10px] left-[60%] bg-[#B88E2F] text-[.8rem] font-semibold flex justify-center items-center w-[23px] h-[23px] rounded-2xl text-white">
              {totalQuantity}
            </div>
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="z-50 burger-menu lg:hidden justify-center items-center sm:flex min-[400px]:mr-[2%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div
          className={`fixed top-0 left-0  xl:hidden w-full bg-[#F9F1E7] flex flex-col items-center z-50 gap-2
              transform transition-all duration-500 ${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
        >
          <div className="flex w-full justify-between items-end mt-2">
            <div className="logo  w-fit flex justify-start mt-[20px] ml-[20px] ">
              <Link to="/" className="link-items w-full">
                <img
                  src={logo}
                  className="w-45 sm:w-50 md:w-56 lg:w-60 xl:w-60"
                  alt="logo"
                />
              </Link>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className=" z-51 burger-menu lg:hidden justify-center items-center sm:flex min-[400px]:mr-[2%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col w-full ml-[40px] items-start gap-5 text-[20px] mt-[10px]">
            <Link to="/" className="link-items">
              Home
            </Link>
            <Link to="/shop" className="link-items font-semibold">
              Shop
            </Link>
            <Link to="/about" className="link-items">
              About
            </Link>
            <Link to="/contact" className="link-items">
              Contact
            </Link>
          </div>
          <hr className="w-full border-t border-gray-400" />
          <div className="flex items-center justify-around h-[10vh]  w-full">
            <Link to="/" className="link-items">
              <div className="cursor-pointer pointer-events-auto">
                {icons.profile}
              </div>
            </Link>
            <Link to="/shop" className="link-items font-semibold">
              {" "}
              {icons.search}
            </Link>
            <Link to="/about" className="link-items">
              {" "}
              {icons.heart}{" "}
            </Link>

            <button onClick={() => setIsOpen(true)} href="#" className="icons">
              {icons.shoppingCart}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
