'use client';

import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeState, ProductData } from '../../type';
import Image from 'next/image';
import FormatedPrice from './FormatedPrice';
import { increaseQuantity, decreaseQuantity, resetCart } from '@/redux/shoppersSlice';
import CartItem from './CartItem';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';

const CartContainer = () => {
  const { cart } = useSelector((store: storeState) => store.shoppers);
  const dispatch = useDispatch();


  const confirmReset = () => {
    const confirmed = window.confirm("Are you sure want to reset");
    if (confirmed) {
      dispatch(resetCart())
    }
  }

  return (
    <div>
      <div>{cart.length > 0 ?
        <div className='pb-20'>
          <div className='w-full h-20 bg-[#f5f5f5] text-accent hidden lg:grid grid-cols-5 place-content-center px-6 text-lg  font-semibold'>
            <h2 className='col-span-2'>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className='mt-5'>
            {cart.map((item: ProductData, index) => (
              <CartItem cart={cart} item={item} key={index} />
            ))}
            <button onClick={confirmReset} className='py-3 px-10 bg-lightRed text-white
               font-semibold uppercase mb-4 hover:bg-red-600 
               hoverEffect rounded-md text-sm border-0'>Reset cart</button>
          </div>
          <div className='grid place-items-end max-w-7xl'>
            <div className='w-96 flex-col gap-4 items-center'>
              <h1 className='font-bold text-2xl text-end py-3'>Cart Totals</h1>
              <div>
                <p className='flex items-center justify-between
                 border-[1px] border-gray-400 border-b-0 py-1.5 px-4
                 text-lg font-medium'>Subtotal <FormatedPrice amount={250} /></p>
              </div>
              <div>
                <p className='flex items-center justify-between
                 border-[1px] border-gray-400 border-b-0 py-1.5 px-4
                 text-lg font-medium'>Shipping Charge <FormatedPrice amount={250} /></p>
              </div>
              <div>
                <p className='flex items-center justify-between
                 border-[1px] border-gray-400 py-1.5 px-4
                 text-lg font-medium'>Total <FormatedPrice amount={250} /></p>
              </div>
            </div>
            <div className='w-96 py-3 px-8 flex items-center'>
              <Button name='Proceed to Checkout' className='w-96 py-3 px-8 rounded-md mt-4  hover:text-white' />
            </div>
          </div>
        </div> : <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }} className='grid place-items-center py-20'>
          <div className='max-w-[500px] px-4 py-8 bg-white flex flex-col gap-4 items-center rounded-md shadow-lg'>
            <h1 className='text-xl font-bold uppercase'>Your cart feels lonely</h1>
            <p className='text-sm text-center px-10 mt-2'>
              Your shopping cart lives to serve. Give it purpose -
              fill it with
              books, electronics, videos, etc. and make it happy
            </p>
            <Link href={"/"}
              className='bg-lightOrange text-white hover:bg-darkOrange hoverEffect px-8 py-3 rounded-lg font-semibold'
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>}
      </div>
    </div>

  )
}

export default CartContainer
