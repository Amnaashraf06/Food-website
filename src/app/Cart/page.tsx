import React from 'react'
import Image from 'next/image'

const CartPage = () => {
  return (
    
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col
     text-pink-800 lg:flex-row'>
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll 
      lg:h-full lg:w-1/2 lg:px-20 xl:px-40'>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/bg1.jpg" alt='' width={100} height={100}/>
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Pastas</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/bg2.jpg" alt='' width={100} height={100}/>
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Burger</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$59.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/pizza1.jpg" alt='' width={100} height={100}/>
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Pizza</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$40.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>

      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full
      lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$81.70</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Servuce Cost</span>
          <span className=''>$0.00</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Delivery Charges</span>
          <span className='text-blue-300'>FREE</span>
        </div>
        <hr className='my-2'/>
        <div className='flex justify-between'>
          <span className=''>TOTAL(INCL.VAT)</span>
          <span className='font-bold'>$81.70</span>
        </div>
        <button className='bg-pink-800 text-white p-3 rounded-md w-full self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage
