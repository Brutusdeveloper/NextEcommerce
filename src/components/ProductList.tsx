import { productQuery } from '@/lib/query'
import { client } from '@/sanity/lib/client'
import React from 'react'
import { ProductData } from '../../type';
import ProductCard from './ProductCard';

const ProductList = async() => {
    const products:ProductData[] = await client.fetch(productQuery);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {products.map((item, index)=><ProductCard key={index} item={item}/>)}
    </div>
  )
}

export default ProductList
