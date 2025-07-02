import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '@/pages/Home'
import Shop from '@/pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Cart from './components/sections/CartPage/Cart';
import Checkout from "./components/sections/Checkout/Checkout";
import ContactUs from "./components/sections/ContactUs/ContactUs";
import './App.css'
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase"; 
import { setUser, clearCartState } from "./store/cartSlice";
import AuthPage from "./pages/AuthPage";
import SignUpPage from "./components/sections/AccountAuth/SingUp/SignUpPage";
import AboutUs from "./components/sections/About/AboutUs";
import WishList from "./components/sections/WishList/WishList";
import LoginPage from "./components/sections/AccountAuth/Login/LoginPage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.uid));
      } else {
        dispatch(clearCartState());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);


  const ZoomInFast = cssTransition({
    enter: "zoomIn",
    exit: "zoomOut",
    duration: [300, 300] 
  });

 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth/*" element={<AuthPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/wishList" element={<WishList />} />
        </Routes>
      </Router>

      <ToastContainer
        position="bottom-right" 
        autoClose={1000}
        transition={ZoomInFast}     
        hideProgressBar={true} 
        closeOnClick
        pauseOnHover
        draggable    
        newestOnTop
      />
    </>
  )
}

export default App
