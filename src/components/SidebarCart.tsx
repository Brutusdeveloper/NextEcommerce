import React from 'react';
import Link from 'next/link';
import { RiShoppingBag2Fill, RiShoppingCart2Fill } from 'react-icons/ri';

const SidebarCart = () => {
  return (
    <Link href={"/cart"} className='bg-accentWhite w-16 relative h-[70px] rounded-md flex flex-col text-accent justify-center items-center shadow-sm shadow-lightGreen group overflow-hidden'>
        <div className='flex items-center justify-center'>
            <RiShoppingCart2Fill className='text-2xl -translate-x-12 group-hover:translate-x-3.5 transition-transform duration-200' />
            <RiShoppingCart2Fill className='text-2xl -translate-x-3.5 group-hover:translate-x-12 transition-transform duration-200' />
        </div>
        <p className='text-xs font-semibold'>Buy Now</p>
        <p className='absolute top-1 right-2 bg-darkOrange font-semibold text-white text-xs w-4 h-4 rounded-full items-center justify-center'><span className='ml-1'>0</span></p>
    </Link>
  )
}

export default SidebarCart
