import React from 'react'
import Img1 from "../Images/Ellipse 725.png"
import Img2 from "../Images/material-symbols_star.png"
import Icon1 from "../Images/Card/Frame (1).png"
import Icon2 from "../Images/Card/Frame.png"
import Icon3 from "../Images/Card/comment 1.png"

const Cards = () => {
  return (
    <div className=' w-96 flex flex-col items-center px-8 border border-solid border-gray-400 mt-5 rounded-lg bg-[#FFF7E2]   shadow-2xl'>
    {/* <div className='w-24 h-28  py-5'>
      <div className='relative  w-24'>
  <img className='absolute inset-0' src={Img1} alt=''/>
  <img className='absolute bottom-0 inset-x-10 inset-y-20' src={Img2} alt='' />
</div>
</div> */}

<div className='w-24 h-28 py-5'>
  <div className='relative w-24'>
    <img className='absolute inset-0' src={Img1} alt='' />
    <div className='absolute bottom-0 inset-x-10 inset-y-20 flex justify-center gap-2  '>
      <span className='z-10 mr-8 text-sm font-bold'>4.5</span>
      <img className='absolute inset-0 ml-2' src={Img2} alt='' />
    </div>
  </div>
</div>


      <div className='flex flex-col gap-2 mt-4'>
        <span>Dr. Prerna Narang </span>
        <div  className='flex p-1 gap-2  '>
        <img src={Icon2} alt='' />
        
    <span className='text-xs '>Male-Female Infertility</span>
    </div>
    <div className='flex pb-1 gap-2   '>
    <img src={Icon1} alt='' />
    <span className='text-xs '>7 years of Experience</span>
    </div>
    <div className='flex pb-1 gap-2 '>
    <img src={Icon3} alt='' />
    <span className='text-xs '>Speaks: English, Hindi, Marathi</span>
    </div>

      </div>
    <div className='flex gap-5'>
        <div className='p-2 m-2 border border-solid border-black rounded-xl'>
            <span className='text-sm'>Video Consultation</span> <br></br>
            <span className='text-xs '>₹800</span>
        </div>
        <div className='p-2 m-2 border border-solid border-black rounded-xl'>
            <span className='text-sm'>Chat Consultation</span> <br></br>
            <span className='text-xs '>Free</span>
        </div>
    </div>

    <div className='flex flex-col gap-3 w-full my-5'>
        <button className='border border-solid border-black rounded-lg py-2 px-4   '>View Profile</button>
        <button className='border border-solid border-black rounded-lg py-2 px-4 bg-[#3A643B] '>Book a consultation</button>
    </div>
    </div>
  )
}

export default Cards
