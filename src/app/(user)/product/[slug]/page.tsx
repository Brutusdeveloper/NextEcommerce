import React from 'react';
import Container from '@/components/Container';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { ProductData } from '../../../../../type';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import FormatedPrice from '@/components/FormatedPrice';
import { bestSellerQuery } from '@/lib/query';
import ProductCard from '@/components/ProductCard';
import { MdStar } from 'react-icons/md';

interface Props{
    params:{
        slug:string
    }
}

const SingleProductPage = async({params}:Props) => {
    const {slug} = await Promise.resolve(params);
    console.log(slug, "slug")
    const query = groq`*[_type == 'product' && slug.current == $slug][0]{
    ...
    }`
    const product:ProductData = await client.fetch(query, {slug});
    const bestSeller:ProductData[] = await client.fetch(bestSellerQuery);
  return (
    <Container className='my-10 bg-bgLight'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full p-4'>
            <div className='h-full xl:col-span-2'>
                <Image src={urlFor(product?.image).url()} 
                    width={500} 
                    height={500} 
                    alt={product?.title}
                    className='w-full h-full object-contain'
                />
            </div>
            <div className='w-full md:col-span-1 xl:col-span-3 p-14 flex flex-col gap-6 justify-center'>
                <h2 className='text-4xl font-semibold'>{product.title}</h2>
                <div className='flex items-center gap-4'>
                    <p className='text-gray-500 line-through font-normal'><FormatedPrice amount={product.rowprice}/></p>
                    <p className='text-lg font-bold'><FormatedPrice amount={product.price}/></p>
                    <p>you saved <FormatedPrice amount={product.rowprice - product.price} className='bg-lightGreen text-white px-2 rounded-md text-xs py-1'/> from this item</p>
                </div>
                <div className='flex items-center text-base text-lightText'>
                    {Array?.from({ length: 5 }).map((_, index) => {
                        const filled = index + 1 <= Math.floor(product.ratings);
                        const halfFilled = index + 1 >= Math.floor(product.ratings) && index + 1 <= Math.ceil(product.ratings);;
                        return <MdStar key={index} className={`${filled ? "text-[#fa8900]" : halfFilled ? "text-yellow-300" : "text-lightText"}`} />
                    })}<p className='text-accent/60 text-sm font-semibold ml-3'>(5 customer reviews)</p>
                </div>
                <p className='text-sm tracking-wide text-gray-500'>{product.description}</p>
                <p className='text-sm  text-gray-500'>Be the first to leave a review.</p>
                <button className='bg-accent p-3 rounded-md w-full text-white hover:bg-darkOrange font-semibold'>Add to cart</button>
                <p className='font-normal text-sm'>
                  <span className='text-base font-medium text-accent'>Categories: </span>
                  Spring collection, Streetwear, Women Tags: featured SKU: N/A
                </p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
              {bestSeller.map((item, index)=>(
                <ProductCard item={item} key={index}/>
              ))}
        </div>
    </Container>
  )
}

export default SingleProductPage
