import React from 'react'
import Search from './Search'
import Buttons from './Buttons'
import Cards from './Cards'

const Body2 = () => {
  return (
    <div>
    <Search />
    <Buttons />
    <div className='flex justify-around w-[1224px] mb-4 mx-auto'>
    <Cards />
    <Cards />
    <Cards />
    </div>
      
    </div>
  )
}

export default Body2
