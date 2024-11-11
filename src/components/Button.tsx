import Link from 'next/link';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const Button = ({name, className}:{ name:string, className?:string}) => {
  return (
    <button  className={twMerge('bg-lightOrange w-36  text-white hover:text-darkOrange hoverEffect px-4 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm', className)}>{name}</button>
  )
}

export default Button;