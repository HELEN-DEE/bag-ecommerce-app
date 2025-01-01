import React, {useState} from 'react';
import { PiHandbagBold } from "react-icons/pi";
import { RiPokerHeartsLine } from "react-icons/ri";
// images
import bagImage1 from '../assets/bag-image-1.png';
import bagImage2 from '../assets/bag-image-2.png';
import bagImage3 from '../assets/bag-image-3.png';
import bagImage4 from '../assets/bag-image-4.png';
// import bagImage5 from '../assets/bag-image-5.png';
import bagImage6 from '../assets/bag-image-6.png';
import bagImage7 from '../assets/bag-image-7.png';
const radioOptions = [
    {name: 'All collection', value: 'all'},
    {name: 'New collection', value: 'new'},
    {name: 'Popular collection', value: 'popular'}
]

const products = [
    {   
        title: 'Hobo small', 
        price: '$195.00 CAD', 
        image: bagImage1
    },
    {   
        title: 'Hobo small', 
        price: '$195.00 CAD', 
        image: bagImage2
    },
    {   
        title: 'Hobo small', 
        price: '$195.00 CAD', 
        image: bagImage3
    },
    // {   
        //     title: 'Hobo small', 
        //     price: '$195.00 CAD', 
        //     image: bagImage5
        // },
    {   
        title: 'Hobo small', 
        price: '$195.00 CAD', 
        image: bagImage6
    },
    {   
        title: 'Hobo small', 
        price: '$195.00 CAD', 
        image: bagImage4
    },
    {   
        title: 'Hobo small', 
        price: '$195.00 CAD', 
        image: bagImage7
    },
    
]

const Products = () => {
    const [selectedOption, setSelectedOption ] = useState('')
  return (
    <section className='mx-4'>
        <div className=''>
            {/* radio buttons */}
            <div className='flex justify-between '>
                {radioOptions.map((option, index) => (
                    <label key={index} className='flex gap-2 items-center '>
                        <input type="radio" name={option.name} value={option.value} className="w-5 h-5 appearance-none border-2 rounded-full border-gray-400 checked:bg-black"
                        checked={selectedOption === option.value}
                        onChange={() => setSelectedOption(option.value)}
                        />
                        
                        <span className='text-3xl'>
                            {option.name}
                        </span>
                    </label>
                ))}
            </div>

            {/* Products collection */}
            <div className='grid grid-cols-1 md:grid-cols-3  gap-2 my-4'>
                
                    {products.map((product, index) => (
                        <div key={index} className='bg-[#F4F4F4] rounded-xl p-4'>
                            <div className='flex justify-between'>
                                <span>
                                    <h1 className='text-xl'>{product.title}</h1>
                                    <p className='font-bold'>{product.price}</p>
                                </span>
                                <div className="flex flex-row gap-2">
                                    <span className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>
                                        <PiHandbagBold size={18} />
                                    </span>
                                    <span className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>
                                        <RiPokerHeartsLine size={18} />
                                    </span>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <img src={product.image} alt={product.title} />
                            </div>
                        </div>
                    ))}
                
            </div>
                    
                        

        </div>
    </section>
  )
}

export default Products
