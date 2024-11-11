import { client } from "@/sanity/lib/client";
import { bannerQuery, bestSellerQuery, productQuery } from "./query";


export const revalidate = 0;

const getBannersData=async()=>{
    const bannersData =  await client.fetch(bannerQuery);
    return bannersData
}
const getProductsData=async()=>{
    const bannersData =  await client.fetch(productQuery);
    return bannersData
}
const getBestSellerData=async()=>{
    const bannersData =  await client.fetch(bestSellerQuery);
    return bannersData
}

export {getBannersData, getProductsData, getBestSellerData}



