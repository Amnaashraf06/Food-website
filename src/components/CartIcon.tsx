import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const CartIcon = () => {
  return (
    <Link href="/Cart" className='flex items-center gap-4'>
      <div className='relative md:w-5 md:h-5'>
       <Image src="/cart.png"
       alt=''
       width={24}
       height={24}
       />
      </div>
      <span>Cart (3)</span>
      
    </Link>
  )
}

export default CartIcon
