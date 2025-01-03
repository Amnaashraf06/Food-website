import React from 'react'
import Image from 'next/image'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("")]'>
        <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
            <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fries</h1>
            <p className='text-white xl:text-xl'></p>
            <button className='bg-pink-800 text-white rounded-md py-3 px-6'>Order Now</button>
        </div>
        <div className='flex-1 w-full h-1/2 relative md:h-full'>
            <Image
            src="/burger1.webp"
            alt='burger' fill className='object-contain'
            />

        </div>
      
    </div>
  )
}

export default Offer
