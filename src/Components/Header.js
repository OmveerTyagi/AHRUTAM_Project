import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from "../Images/Ellipse 727.png"

const Header = () => {
  const [btnName, SetbtnName] = useState("Login");
  return (
    <div className='flex bg-[#FFF7E2] justify-around items-center font-bold h-[94px]'>
      <div>
        <span className='font-bold text-2xl text-[#3A643B] '>A M R U T A M</span>
      </div>
      <div className='flex '>
        <ul className='flex  gap-5'>
            <Link to={"/"}><li className=' active:text-[#3A643B]'>Home</li></Link>
           <Link to={"/findDoctors"}> <li className=' active:text-[#3A643B] '>Find Doctors</li></Link>
            <Link to={"/about"}><li className=' active:text-[#3A643B]'>About Us</li></Link>
        </ul>
      </div>
      <div className='flex gap-4'>
        <button onClick={() =>{
          btnName === "Login"? SetbtnName(<img className=' w-10  ' src={Img1} alt=''/>): SetbtnName("Login");
        }} className='border border-solid border-gray-400 px-2 py-1 rounded-md hover:bg-green-300 active:bg-blue-500'>{btnName}</button>
        <button className='bg-[#3A643B] border border-solid border-gray-400 px-2 py-1 rounded-md'>Sign-up</button>

      </div>
    </div>
  )
}

export default Header
