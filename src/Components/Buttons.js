import React from 'react'
import { useState } from 'react';

const Buttons = () => {
    const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='flex justify-center gap-28 py-6 shadow-lg   '>
     
    <div>
       
      <select id="selectOption" className='rounded-lg bg-gray-300 px-4 py-1 ' value={selectedOption} onChange={handleChange}>
        <option value="">Expertise </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
       
    </div>
    <div>
       
      <select id="selectOption" className='rounded-lg bg-gray-300 px-4 py-1 ' value={selectedOption} onChange={handleChange}>
        <option value="">Gender </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
       
    </div>
    <div>
       
      <select id="selectOption" className='rounded-lg bg-gray-300 px-4 py-1 ' value={selectedOption} onChange={handleChange}>
        <option value="">Fees </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
       
    </div>
    <div>
       
      <select id="selectOption" className='rounded-lg bg-gray-300 px-4 py-1 ' value={selectedOption} onChange={handleChange}>
        <option value="">Language </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
       
    </div>
    <div>
       
      <select id="selectOption" className='rounded-lg bg-gray-300 px-4 py-1 ' value={selectedOption} onChange={handleChange}>
        <option value="">All Filters </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
       
    </div>
      
    </div>
  )
}

export default Buttons
