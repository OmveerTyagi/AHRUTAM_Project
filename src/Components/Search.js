import React from 'react'
import { useState } from 'react';
import Img1 from "../Images/location.png"

const Search = () => {
    const [selectedOption, setSelectedOption] = useState(' ');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className= '    bg-[#EAF2EA] p-10 mx-auto  '>
    <div className='flex justify-center'>
      <span className='font-bold text-xl'>Find expert Doctors for an In-clinic session here </span>
      </div>
      <div className='flex justify-center gap-5  mt-5'>
      <div>
       
       
      <select id="selectOption" className=' w-72 p-2 rounded-md' value={selectedOption} onChange={handleChange}>
        <option value=""> Location </option>
        <option value="option1">Utter Pradesh</option>
        <option value="option2">Delhi</option>
        <option value="option3">Panjab</option>
      </select>
      
    </div>
       
       
      <div className='flex gap-0'>
      <input type='text' className=' w-72  p-2 rounded-md' placeholder='eg. Doctor, specialisation,clinic name'/>
      <button className='bg-black text-white p-2 rounded-md'>Search</button>
      </div>
      </div>
    </div>
  )
}

export default Search
 
