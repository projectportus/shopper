import React from "react";
import { useState } from "react";
import Header from "@/components/shared/sharedComponents/Header/Header";
import Banner from "@/components/shared/sharedComponents/Banner/Banner";
import Form from "./AdditionalParts/Form";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import ClonnedFooter from "@/components/shared/sharedComponents/ClonnedFooter/ClonnedFooter";
import SideBar from "@/components/sections/ShoppingCardSideBar/SideBar";
const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <SideBar open={isOpen} setOpen={setIsOpen} />
      <Banner catName={"Contact"} catLabel={"Contact"}></Banner>
      <Form></Form>
      <CompanyInfo></CompanyInfo>
      <ClonnedFooter></ClonnedFooter>
    </div>
  );
};

export default ContactUs;
