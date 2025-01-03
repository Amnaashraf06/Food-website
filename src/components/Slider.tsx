"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data = [
    {
        id:1,
        title:"Always Fresh & Always Crispy & Always Hot",
        image:"/backG.jpg",
    },
    {
        id:2,
        title:"We deliver your order whereven you are in ",
        image:"/pizza.webp",
    },
    {
        id:3,
        title:"The best pizza to share with your family",
        image:"/burger.jpg",
    },
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(()=>{
    const interval = setInterval(
        () => setCurrentSlide((prev) => (prev === data.length -1 ? 0 : prev+1)),
    2000);
    return() => clearInterval (interval)
    },[]);
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] 
    lg:flex-row bg-fuchsia-50'>

        <div className='h-1/2 flex items-center justify-center flex-col 
        gap-8 text-pink-800 font-bold lg:h-full lg:w-1/2'>
            <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-pink-800 text-white py-4 px-8'>Order Now</button>
        </div>
        <div className='w-full h-1/2 relative lg:h-full lg:w-1/2 '>
            <Image
            src={data[currentSlide].image}
            alt='' fill className='object-cover'/>
        </div>
      
    </div>
  )
}

export default Slider
