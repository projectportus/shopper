import { useState } from "react";
import Header from "@/components/shared/sharedComponents/Header/Header";
import Banner from "@/components/shared/sharedComponents/Banner/Banner";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import ClonnedFooter from "@/components/shared/sharedComponents//ClonnedFooter/ClonnedFooter";
import CheckoutMainBLock from "./AdditionalParts/CheckoutMainBLock";
import SideBar from "@/components/sections/ShoppingCardSideBar/SideBar";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <SideBar open={isOpen} setOpen={setIsOpen} />
      <Banner catName={"Checkout"} catLabel={"Checkout"}></Banner>

      <CheckoutMainBLock></CheckoutMainBLock>

      <CompanyInfo></CompanyInfo>
      <ClonnedFooter></ClonnedFooter>
    </div>
  );
};

export default Checkout;
