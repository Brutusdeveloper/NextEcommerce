import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props{
    amount: number,
    className?: string 
}

const FormatedPrice = ({amount, className}: Props) => {
    const amontConvert = new Number(amount).toLocaleString("en-US", {
        currency:"USD",
        style:"currency",
        minimumFractionDigits:2
    })
  return (
    <span className={twMerge("text-base font-semibold",className)}>{amontConvert}</span>
  )
}

export default FormatedPrice
