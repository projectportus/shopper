import { useState } from "react";
import Header from "@/components/shared/sharedComponents/Header/Header";
import Banner from "@/components/shared/sharedComponents/Banner/Banner";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import ClonnedFooter from "@/components/shared/sharedComponents/ClonnedFooter/ClonnedFooter";
import SideBar from "@/components/sections/ShoppingCardSideBar/SideBar";
import InfoWish from "./WishListInfo/InfoWish.jsx";
const WishList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <SideBar open={isOpen} setOpen={setIsOpen} />
      <Banner catName={"WishList"} catLabel={"WishList"}></Banner>
      <InfoWish></InfoWish>
      <CompanyInfo></CompanyInfo>
      <ClonnedFooter></ClonnedFooter>
    </div>
  )
}

export default WishList
