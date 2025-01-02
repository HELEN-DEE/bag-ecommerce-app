import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import bagImage1 from '../assets/catalog-product-1.png';
import bagImage2 from '../assets/catalog-product-2.png';

const Products = [
    {
        img: bagImage1,
        title: 'Chelsea - sol', 
    },
    {
        img: bagImage2,
        title: 'Chelsea - malibu', 
    }
]


const Catalog = () => {
  return (
    <section className='mx-4'>
        <div className='bg-[#F4F4F4] py-4 px-4 rounded-xl'>
            <div className='flex justify-between'>
                <span className='w-[70%] '>
                    <button className='capitalize flex items-center gap-2  border border-gray-500 rounded-full px-4 py-  hover:bg-black hover:text-white'>
                        <p>view all catalog</p>
                        <span>
                            <FaArrowRight size={10} />
                        </span>
                    </button>
                </span>
                <p className='w-[30%]'>
                    All our bags are stain & water resisitant. They look great, wear great and will beautifully complement your life & style.
                </p>
            </div>
            <div className='flex '>
                {Products.map((product, index) => (
                    <div>
                        <img src={product.img} alt={product.title} className='h-[300px] object-contain'/>
                        <h1 className='text-xl'>{product.title}</h1>
                    </div>
                    
                ))}
            </div>
            
        </div>
    </section>
  )
}

export default Catalog