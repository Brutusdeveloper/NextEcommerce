import React from 'react'
import { ProductData } from '../../type';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { MdStar } from 'react-icons/md';
import FormatedPrice from './FormatedPrice';
import AddCartButton from './AddCartButton';

const ProductCard = ({ item }: { item: ProductData }) => {
    return (
        <div className='border border-px border-lightText/40 rounded-md relative group overflow-hidden'>
            <Link href={`/product/${item?.slug?.current}`}>
                <div className='overflow-hidden'>
                    <Image src={urlFor(item.image).url()} width={500} height={500} alt={item.title} className='object-fit h-72 group-hover:scale-105 hoverEffect' />
                </div>
            </Link>
            <div className='px-6 flex flex-col items-center gap-2'>
                <div className='flex items-center justify-center text-base text-lightText'>
                    {Array?.from({ length: 5 }).map((_, index) => {
                        const filled = index + 1 <= Math.floor(item.ratings);
                        const halfFilled = index + 1 >= Math.floor(item.ratings) && index + 1 <= Math.ceil(item.ratings);;
                        return <MdStar key={index} className={`${filled ? "text-[#fa8900]" : halfFilled ? "text-yellow-300" : "text-lightText"}`} />
                    })}
                </div>
                <p className='uppercase text-xs font-medium text-darkOrange'>{item.brand}</p>
                <h2 className='text-base font-semibold text-accent]'>{item.title}</h2>
                <p className='text-center text-sm line-clamp-2'>{item.description}</p>
                <div className='flex gap-3 items-center justify-center mb-5'>
                    <FormatedPrice amount={item.price} className='text-lightText line-through font-normal' />
                    <FormatedPrice amount={item.rowprice} className='font-bold text-darkOrange' />
                </div>
            </div>
            <AddCartButton item={item}/>
        </div>
    )
}

export default ProductCard
