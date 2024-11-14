"use client";

import React from 'react';
import { ProductData } from '../../type';
import { twMerge } from 'tailwind-merge';
import { UseSelector, useDispatch } from 'react-redux';
import { increaseQuantity } from '@/redux/shoppersSlice';
import toast from 'react-hot-toast';

interface Props {
    item: ProductData,
    className?: string
}

const AddCartButton = ({ item, className }: Props) => {

    const dispatch = useDispatch();

    const handleAddToCart = (itemVal:ProductData ) => {
        dispatch(increaseQuantity(itemVal));
        toast.success(`${item?.title.substring(0, 12)} added successfully`)
    }

    return (
        <button onClick={()=>handleAddToCart(item)} className={twMerge('bg-accent text-white w-full py-2 border border-px border-accent hover:bg-darkOrange hoverEffect flex items-center justify-center font-semibold tracking-wide text-center', className)}>Add to Cart</button>
    )
}

export default AddCartButton
