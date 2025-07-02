import { useState } from "react";
import Header from "@/components/shared/sharedComponents/Header/Header";
import Banner from "@/components/shared/sharedComponents/Banner/Banner";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import ClonnedFooter from "@/components/shared/sharedComponents/ClonnedFooter/ClonnedFooter";
import SideBar from "@/components/sections/ShoppingCardSideBar/SideBar";
import Info from "./AboutInfo/Info";
const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <SideBar open={isOpen} setOpen={setIsOpen} />
      <Banner catName={"About"} catLabel={"About"}></Banner>
      <Info></Info>
      <CompanyInfo></CompanyInfo>
      <ClonnedFooter></ClonnedFooter>
    </div>
  )
}

export default AboutUs
