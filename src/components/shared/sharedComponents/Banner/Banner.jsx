import React from 'react'
import Icons from '@/assets/icons/shared/ui-icons/icons'
import './Banner.css'
const Banner = ({catName, catLabel}) => {
  return (
    <div className='banner flex justify-center items-center w-full h-[316px] md:h-[200px] lg:h-[350px] xl:h-[400px]'>
        <div className="box-el w-fit h-[98px] flex flex-col justify-around text-center">
            <div className='text-[48px] font-[500]'>{catName}</div>
            <h3 className='flex text-xl justify-center items-center'><span className='font-[600]'>Home</span> {Icons.chevron__right}{catLabel}</h3>
        </div>
    </div>
  )
}

export default Banner
