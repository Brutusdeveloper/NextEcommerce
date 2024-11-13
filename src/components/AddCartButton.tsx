import React from 'react';
import { ProductData } from '../../type';
import { twMerge } from 'tailwind-merge';

interface Props {
    item: ProductData,
    className?: string
}

const AddCartButton = ({ item, className }: Props) => {
    return (
        <button className={twMerge('bg-accent text-white w-full py-2 border border-px border-accent hover:bg-darkOrange hoverEffect flex items-center justify-center font-semibold tracking-wide text-center', className)}>Add to Cart</button>
    )
}

export default AddCartButton
