import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Header from "@/components/shared/sharedComponents/Header/Header";
import Banner from "@/components/shared/sharedComponents/Banner/Banner";
import productsdata from "@/assets/data/pagination-data/dummydata";
import ProductCard from "@/components/shared/ui/productcard.jsx";
import ProductsFilter from "@/components/shared/ui/ProductsFilter.jsx";
import Pagination from "@/components/shared/ui/Pagination";
import CompanyInfo from "@/components/sections/CompanyInfo/CompanyInfo";
import ClonnedFooter from "@/components/shared/sharedComponents/ClonnedFooter/ClonnedFooter";
import SideBar from "@/components/sections/ShoppingCardSideBar/SideBar";
import ph1 from '@/weblogo.svg'
import "@/assets/styles/Shop.css";

const Shop = () => {
   
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialSearch = searchParams.get("search") || "";
  const initialPerPage = parseInt(searchParams.get("perPage"), 10) || 16;
  const initialPage = parseInt(searchParams.get("page"), 10) || 1;

  const [search, setSearch] = useState(initialSearch);
  const [perPage, setPerPage] = useState(initialPerPage);
  const [page, setPage] = useState(initialPage);
  const [totalResults, setTotalResults] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const mainRef = useRef(null);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.desc.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsdata);
      setTotalResults(productsdata.length);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setPage(1);
    setTotalResults(filteredProducts.length);
  }, [search, filteredProducts.length]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (perPage !== 16) params.set("perPage", perPage);
    if (page !== 1) params.set("page", page);

    navigate(`?${params.toString()}`, { replace: true });
  }, [search, perPage, page, navigate]);

  if (loading) {
    return(
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.img
        src={ph1}
        alt="Company Logo"
        className="w-40 h-40"
        animate={{ rotate: [0, 180, 180, 360, 360, 540, 540, 720, 720, 0] }}
        transition={{
          duration: 3,
          ease: 'linear',
          times: [0, 0.1,0, 0.2,0, 0.3,0, 0.4,0, 0.5,0, 0.6,0, 0.7,0, 0.8, 0,2],
          repeat: Infinity
        }}
      />
    </div>
    )
  }


  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, filteredProducts.length);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / perPage);



  return (
    <div className="overflow-x-hidden">
      <Header setIsOpen={setIsOpen}/>
      <SideBar open={isOpen} setOpen={setIsOpen} />
      <Banner catLabel={"Shop"} catName={"Shop"} />
      <div ref={mainRef}></div>

      <ProductsFilter
        search={search}
        setSearch={setSearch}
        perPage={perPage}
        setPerPage={(value) => {
          setPerPage(value);
          setPage(1); 
        }}
        startIndex={startIndex} 
        endIndex={endIndex} 
        totalResults={filteredProducts.length}
      />
      <main className="flex flex-col gap-10 min-h-screen max-w-6xl mx-auto p-6  items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginatedProducts.map((product, index) => (
            <ProductCard key={index} product={product} bagdeStatus={product.badgeStatus} offer={product.offer} discount={product.discount} />
          ))}
        </div>
          <Pagination 
              currentPage={page} 
              totalPages={totalPages} 
              onPageChange={(newPage) => {
                setPage(newPage);
                mainRef.current?.scrollIntoView({ behavior: 'auto' });
              }} 
            />
      </main>
      
      <CompanyInfo/>
      <ClonnedFooter/>
    </div>
  );
};

export default Shop;
