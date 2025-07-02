import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@/components/shared/sharedComponents/Universals/Button";
import countries from "@/assets/data/countries/countries";
import { Check } from "lucide-react";
import { CircleHelp } from "lucide-react";
import ph1 from "@/weblogo.svg";
import { ShoppingCart } from "lucide-react";
import { div } from "framer-motion/client";
import { useCheckout } from "../useCheckOutLogic";

const CheckoutMainBLock = () => {
  const {
    selectedCountry,
    setSelectedCountry,
    selectedMethod,
    setSelectedMethod,
    formData,
    setFormData,
    formRef,
    errors,
    successMessage,
    loading,
    orderPlaced,
    handleSubmit,
    subtotal,
    totalQuantity,
    cartItems,
    orderedItems,
    orderedSubtotal,
    orderedTotalQuantity,
  } = useCheckout();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <motion.img
          src={ph1}
          alt="Company Logo"
          className="w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative w-[30vw] h-[70%] bg-[#F9F1E7] flex justify-center rounded-[20px] p-6">
          <div className="absolute top-[-20px] left-[50%] transform -translate-x-1/2 bg-[#F9F1E7] rounded-full border-5 border-[white] p-2">
            <Check size={70} strokeWidth={2} color="#B88E2F" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-[#B88E2F] mt-20">
              Thank you for your order!
            </h1>
            <p className="mt-5 text-center text-[#B88E2F]">
              The order confirmation has been sent to your email address.{" "}
            </p>
            <div className="mt-[40px] w-full h-[50px] text-[#B88E2F]  flex justify-between font-bold">
              <div className=" w-fit flex flex-col items-center justify-between">
                <div>{orderedSubtotal}</div>
                Total Amount
              </div>
              <div className=" w-fit flex flex-col items-center justify-between">
                <div>X {orderedTotalQuantity}</div>
                Items Ordered
              </div>
              <div className=" w-fit flex flex-col items-center justify-between">
                <div>11.04 - 14.06</div>
                Est. Delivery
              </div>
            </div>
            <div className="absolute w-full text-[white] gap-3 flex justify-center items-center h-[10vh] rounded-b-[20px] bottom-0 bg-[#B88E2F]">
              <CircleHelp /> Your delivery is CO2 neutral.
            </div>
          </div>
        </div>
      </div>
    );
  }

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
    <div className="checkout-main-block flex justify-center mt-[100px] md:mt-0 items-center w-full h-full md:h-[1829px]">
      <div className="w-[85%] h-[95%] flex flex-col items-center md:items-start gap-[100px] md:flex-row  md:justify-between ">
        <div className="billing-details  w-full h-fit md:w-[608px] p-5 md:p-[50px] md:gap-[36px] flex flex-col md:h-full">
          <div className="w-full md:w-[245px] text-[36px] font-semibold mb-5 md:mb-0">
            Billing details
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:gap-[36px] flex flex-col justify-between"
          >
            <div className="flex justify-between w-full  h-[121px]">
              <div className="relative h-fit md:gap-0 gap-2 md:h-full w-[48%] md:w-[45%]  flex flex-col justify-between">
                <label
                  className="text-[1.2rem] md:text-[16px]"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  className={`p-2 md:h-[75px] border-2 
                                rounded-[10px] 
                                outline-none md:p-5 text-[20px]
                                ${
                                  errors.firstName
                                    ? "border-[#B88E2F]"
                                    : "border-gray-500"
                                }
                                `}
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                {errors.firstName && (
                  <p className="text-[1rem] md:text-sm  absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px]">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="relative h-fit md:gap-0 gap-2 md:h-full w-[48%] md:w-[45%]  flex flex-col justify-between">
                <label
                  className="text-[1.2rem] md:text-[16px]"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  id="lastname"
                  type="text"
                  className={`p-2 md:h-[75px] border-2 
                                rounded-[10px] 
                                outline-none md:p-5 text-[20px]
                                ${
                                  errors.lastName
                                    ? "border-[#B88E2F]"
                                    : "border-gray-500"
                                }
                                `}
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                {errors.lastName && (
                  <p className="text-sm absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px]">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between w-full  h-[121px]">
              <div className="h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full ">
                <label
                  className="text-[1.2rem] md:text-[16px]"
                  htmlFor="cpname"
                >
                  Company Name (Optional)
                </label>
                <input
                  id="cpname"
                  type="text"
                  className="h-[75px] border-2 border-gray-500 rounded-[10px] outline-none p-5 text-[20px]"
                />
              </div>
            </div>

            <div className="flex md:flex-row md:justify-between h-fit w-full  flex-col justify-between md:gap-0 gap-2  md:h-[121px] mt-[30px] md:mt-0">
              <div className="h-full w-full flex flex-col justify-between ">
                <label className="text-[1.2rem] md:text-[16px]">
                  Country / Region
                </label>
                <div className="select-container ">
                  <select
                    className="h-[75px] w-full border-2 border-gray-500 rounded-[10px] appearance-none outline-none p-5 text-[16px]"
                    value={selectedCountry.code}
                    style={{ textAlignLast: "left" }}
                    onChange={(e) =>
                      setSelectedCountry(
                        countries.find((c) => c.code === e.target.value)
                      )
                    }
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full  h-[121px] mt-[30px] md:mt-0">
              <div className="relative h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full ">
                <label
                  className="text-[1.2rem] md:text-[16px]"
                  htmlFor="street"
                >
                  Street address
                </label>
                <input
                  id="street"
                  type="text"
                  className={`p-2 md:h-[75px] border-2 
                              rounded-[10px] 
                              outline-none md:p-5 text-[20px]
                              ${
                                errors.street
                                  ? "border-[#B88E2F]"
                                  : "border-gray-500"
                              }
                              `}
                  value={formData.street}
                  onChange={(e) =>
                    setFormData({ ...formData, street: e.target.value })
                  }
                />
                {errors.street && (
                  <p className="text-sm absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px]">
                    {errors.street}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between w-full h-[121px] mt-[30px] md:mt-0">
              <div className="relative h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full">
                <label className="text-[1.2rem] md:text-[16px]" htmlFor="city">
                  Town / City
                </label>
                <input
                  id="city"
                  type="text"
                  className={`p-2 md:h-[75px] border-2 
                              rounded-[10px] 
                              outline-none md:p-5 text-[20px]
                              ${
                                errors.city
                                  ? "border-[#B88E2F]"
                                  : "border-gray-500"
                              }
                              `}
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
                {errors.city && (
                  <p className="text-sm absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px]">
                    {errors.city}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between w-full  h-[121px] mt-[30px] md:mt-0">
              <div className="relative h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full">
                <label className="text-[1.2rem] md:text-[16px]" htmlFor="zip">
                  Zip Code
                </label>
                <input
                  id="zip"
                  type="text"
                  className={`p-2 md:h-[75px] border-2 
                              rounded-[10px] 
                              outline-none md:p-5 text-[20px]
                              ${
                                errors.zipCode
                                  ? "border-[#B88E2F]"
                                  : "border-gray-500"
                              }
                              `}
                  value={formData.zipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, zipCode: e.target.value })
                  }
                />
                {errors.zipCode && (
                  <p className="text-sm absolute  translate-y-[-60%] w-fit bg-white left-[10px] top-[48px]">
                    {errors.zipCode}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between w-full h-[121px] mt-[30px] md:mt-0">
              <div className="relative h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full">
                <label className="text-[1.2rem] md:text-[16px]" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  className={`p-2 md:h-[75px] border-2 
                              rounded-[10px] 
                              outline-none md:p-5 text-[20px]
                              ${
                                errors.phone
                                  ? "border-[#B88E2F]"
                                  : "border-gray-500"
                              }
                              `}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="text-sm absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px]">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between w-full  h-[121px] mt-[30px] md:mt-0">
              <div className="relative h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full">
                <label className="text-[1.2rem] md:text-[16px]" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="text"
                  className={`p-2 md:h-[75px] border-2 
                              rounded-[10px] 
                              outline-none md:p-5 text-[20px]
                              ${
                                errors.email
                                  ? "border-[#B88E2F]"
                                  : "border-gray-500"
                              }
                              `}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-sm absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px]">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between w-full  h-[121px] mt-[20px]">
              <div className="h-full w-full  flex flex-col justify-between">
                <textarea
                  id="message"
                  className="h-fit border-2 border-gray-500 rounded-[10px] outline-none p-5 text-[1.2rem] md:text-[20px]"
                  placeholder=" Additional Information"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="pr-total p-5 w-full md:w-[508px] h-auto md:h-[789px] ">
          <div className="order-summary flex flex-col w-full h-auto gap-5 mb-5 pb-[30px] border-b-1 border-gray-500">
            <div className="line text-[1.2rem] md:text-[24px] gap-5 pb-5 md:gap-0 font-semibold flex justify-between w-full  ">
              <div>Product</div>
              <div>Subtotal</div>
            </div>
            <div>
              {cartItems.map((item, index) => (
                <div className=" gap-[20px]" key={index}>
                  <div className="line text-[16px]  flex justify-between w-full">
                    <div className="w-[120px] flex justify-between items-center">
                      <div>{item.title}</div>

                      <div>
                        X{" "}
                        <span className="text-[#B88E2F] font-semibold">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                    <div>Rs. {item.price}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="line text-[16px] font-semibold flex justify-between w-full ">
              <div>Subtotal</div>
              <div>Rs. {subtotal}</div>
            </div>
            <div className="line text-[16px] font-semibold flex items-center justify-between w-full ">
              <div>Total</div>
              <div className="text-[24px] text-[#B88E2F]">Rs. {subtotal}</div>
            </div>
          </div>
          <div className=" ">
            <div className="flex items-center mb-4">
              <span className="text-black text-xl">●</span>
              <h3 className="text-lg font-bold ml-2">Direct Bank Transfer</h3>
            </div>
            <p className="text-gray-500 text-sm text-[16px] ">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <div className="space-y-3 mt-[20px]">
              {["bank", "cod"].map((method) => (
                <label
                  key={method}
                  className={`flex items-center cursor-pointer ${
                    selectedMethod === method
                      ? "text-gray-500 font-bold"
                      : "text-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={selectedMethod === method}
                    onChange={() => setSelectedMethod(method)}
                    className="mr-2"
                  />
                  {method === "bank"
                    ? "Direct Bank Transfer"
                    : "Cash On Delivery"}
                </label>
              ))}
            </div>
            <div className="mt-[20px]">
              <p className="text-gray-500 text-sm text-[16px] ">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Button
                text={"PLACE ORDER"}
                width={"196px"}
                height={"48px"}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMainBLock;
