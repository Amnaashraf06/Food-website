import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-pink-800'>
      <div className='w-max flex pt-10'>
        {featuredProducts.map ((item) => (
        <div key = {item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-slate-50
        md:w-[50vh] xl:w-[33vw] xl:h-[90vh]'>
            {item.img && (

           <div className='relative flex-1 w-full'>
                <Image
                src={item.img}
                alt='image'
                fill className='object-contain'
                />
            </div>
             )}
            <div className='flex-1 flex flex-col items-center text-center gap-4'>
                <h1 className='text-xl font-bold uppercase'>{item.title}</h1>
                <p className='p-4'>{item.desc}</p>
                <span className='text-xl font-bold'>${item.price}</span>
                <button className='bg-pink-800 text-white p-2 rounded-md'>Add to cart</button>
            </div>
        </div>
    ))}
      </div>
    </div>
  )
}

export default Featured
