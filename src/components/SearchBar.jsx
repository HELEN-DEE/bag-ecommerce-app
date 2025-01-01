import React from 'react'

import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <section className='mx-4 '>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <div className='flex gap-2 '>
            <button className='bg-[#F4F4F4] md:px-4 md:py-2 px-3 py-2 text-[12px] md:text-base rounded-2xl hover:text-white hover:bg-gray-700 '>Men</button>
            <button className='bg-[#F4F4F4] md:px-4 md:py-2 px-3 py-2 text-[12px] md:text-base rounded-2xl hover:text-white hover:bg-gray-700'>Women</button>
            <button className='bg-[#F4F4F4] md:px-4 md:py-2 px-3 py-2 text-[12px] md:text-base rounded-2xl hover:text-white hover:bg-gray-700'>Children</button>
            <button className='bg-[#F4F4F4] md:px-4 md:py-2 px-3 py-2 text-[12px] md:text-base rounded-2xl hover:text-white hover:bg-gray-700'>Brand</button>
            <button className='bg-[#F4F4F4] md:px-4 md:py-2 px-3 py-2 text-[12px] md:text-base rounded-2xl hover:text-white hover:bg-gray-700'>New</button>
            <button className='bg-[#F4F4F4] md:px-4 md:py-2 px-3 py-2 text-[12px] md:text-base rounded-2xl hover:text-white hover:bg-gray-700'>Popular</button>
          </div>

          <div className='bg-[#F4F4F4] rounded-2xl flex items-center  max-w-[460px] w-full '>
            <input type="search" name="" id="search" placeholder='Search...' className=' px-3 py-3  flex-grow bg-transparent outline-none '/>
            <div className='bg-white rounded-full p-2 inline-flex mx-2'>
              <FiSearch className='' size={15}/>
            </div>
          </div>

          <div className='flex gap-2'>
            <button className='bg-[#F4F4F4] px-3 py-1 rounded-2xl hover:text-white hover:bg-gray-700'>About</button>
            <button className='bg-[#F4F4F4] px-4 py-2 rounded-2xl hover:text-white hover:bg-gray-700'>FAQs</button>
          </div>

        </div>
    </section>
  )
}

export default SearchBar