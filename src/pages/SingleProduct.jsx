import React from 'react'
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/shared/sharedComponents/Header/Header";
import Navbar from '@/components/sections/Navbar/Navbar';
import ProductInfo from '@/components/sections/ProductInfo/ProductInfo';
import SideBar from '@/components/sections/ShoppingCardSideBar/SideBar';
import { useLocation } from 'react-router-dom';



const SingleProduct = () => {


  const location = useLocation();
  const product = location.state?.product;

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
        <Header setIsOpen={setIsOpen}/>
        <SideBar open={isOpen} setOpen={setIsOpen} />
    
        <Navbar></Navbar>
        <ProductInfo></ProductInfo>
    </div>
  )
}

export default SingleProduct
