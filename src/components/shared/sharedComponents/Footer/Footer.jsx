import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='h-fit mt-20  flex justify-center items-center border-t border-gray-200' >
            <div class="flex flex-col gap-10 lg:flex-row justify-around mt-10  w-[90%] h-[419px]">
                <div className='w-fit h-[32%] md:w-[25%] flex flex-col justify-between md:mt-0 mt-5 '>
                    <h1 className="text-[3rem] md:text-[34px] font-bold">Funiro.</h1>
                    <p className="text-gray-600 mt-2  md:text-[16px] font-light">
                        400 University Drive Suite 200 Coral Gables, FL 33134 USA
                    </p>
                </div>
                <div className='h-[90%] flex flex-col justify-between text-[1.3rem] md:text-[16px]  font-[700] '>
                    <a href="#" className="anim w-fit text-gray-700 font-bold text-[1.7rem] md:text-[16px] mb-3">Links</a>
                    <a href="#" className="anim w-fit">Home</a>
                    <a href="#" className="anim w-fit">Shop</a>
                    <a href="#" className="anim w-fit">About</a>
                    <a href="#" className="anim w-fit">Contact</a>
                </div>
                <div className=' h-[90%] flex flex-col justify-between text-[1.3rem] md:text-[16px] font-[700]'>
                    <a href="#" className="anim w-fit text-gray-700 font-bold text-[1.7rem] md:text-[16px]  mb-3">Help</a>
                    <a href="#" className="anim w-fit">Payment Options</a>
                    <a href="#" className="anim w-fit">Shop</a>
                    <a href="#" className="anim w-fit">Returns</a>
                    <a href="#" className="anim w-fit">Privacy Policies</a>
                </div>
                <div className=' w-fit h-[35%] flex flex-col justify-between font-bold '>
                    <a href="#" className="anim w-fit text-gray-600 font-semibold mb-3 text-[1.7rem] md:text-[16px]">Newsletter</a>
                    <div className='flex flex-col md:flex-row md:justify-center gap-2 md:mb-0 mb-5' >
                        <input type="email" placeholder="Enter Your Email Address"className="w-fit outline-none placeholder-[#B88E2F] border-b border-black-500"/>
                        <button className="text-black bg-transparent cursor-pointer font-semibold anim">SUBSCRIBE</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
