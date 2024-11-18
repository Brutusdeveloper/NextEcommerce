import { getBannersData } from '@/lib/getData'
import React from 'react';
import Container from './Container';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Button from './Button';
import { BannerData } from '../../type';
import Link from 'next/link';
import FormatedPrice from './FormatedPrice';

const Banner = async () => {
    const banners = await getBannersData();
    const singleBanner = banners[0];
    return (
        <Container className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]'>
            <div className='md:col-span-2 bg-bgLight relative flex items-end justify-end rounded-lg overflow-hidden group'>
                <div className='h-full absolute z-10 left-10 top-0 flex flex-col justify-center isolate gap-5 md:gap-10'>
                    <div className='flex flex-col gap-1 md:gap-3'>
                        <button className='bg-lightGreen text-white rounded-full w-20 py-1 text-sm font-semibold
                    hover:bg-green-600 hoverEffect
                    '>sale {singleBanner?.price}</button>
                        <p className='text-xl md:text-3xl font-semibold'>{singleBanner?.title}</p>
                        <h2 className='text-2xl md:text-5xl font-bold'>{singleBanner?.subtitle}</h2>
                        <p className='text-xs md:text-sm text-black/60 font-medium max-w-44'>{singleBanner?.description}</p>
                    </div>
                    <Button name="Shop Now" />
                </div>
                <Image src={urlFor(singleBanner?.image).url()} alt={singleBanner?.title}
                    width={500}
                    height={500}
                    priority
                    className='object-contain h-72 md:h-full max-h-[600px] self-end group-hover:scale-105 hoverEffect'
                />
            </div>
            <div className='flex flex-col space-y-5 md:space-y-10 h-auto md:max-h-[600px]'>
                {banners.slice(1, 3).map((val: BannerData) => (
                    <div key={val.title} className='bg-bgLight h-full md:h-1/2 overflow-hidden rounded-lg flex justify-center items-center p-5 group'>
                        <div className='w-1/2 flex flex-col'>
                            <div>
                                <p className='text-sm font-semibold'>{val.title}</p>
                                <h2 className='text-3xl font-bold'>{val.subtitle}</h2>
                            </div>
                            <p className='text-black/60 font-medium mt-3'>From <FormatedPrice className="text-darkOrange font-semibold" amount={val.price}/></p>
                            <Link href={"/shop"} className='mt-5 underline underline-offset-2 decoration-[1px]  text-black/60 hover:text-darkOrange hoverEffect font-bold'>Shop now!</Link>
                        </div>
                        <Image priority src={urlFor(val.image).url()} width={500} height={500} alt={val.title}
                            className='object-contain h-72 md:h-60 w-1/2 group-hover:scale-105 hoverEffect'
                        />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Banner
