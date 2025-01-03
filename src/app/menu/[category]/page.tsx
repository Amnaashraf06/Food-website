"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { pizzas } from '@/data';
const Categorypage: React.FC = () => {
 
  return (
    <div className='flex flex-wrap text-pink-800'>
      {pizzas.map((item) => (
        <Link 
          key={item.id} 
          href={`/product/${item.id}`} 
          className="w-full h-[60vh] border-r-2 border-b-2 border-pink-800 
          sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50 
          odd:bg-violet-50"
        >
          {item.img && (
            <div className='relative h-[80%]'>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className='object-contain'
              />
            </div>
          )}

          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button 
              className='hidden group-hover:block uppercase bg-pink-800 text-white p-2 rounded'
            >
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categorypage;

