import { twMerge } from 'tailwind-merge';
import React from 'react';

interface Props{
    children: React.ReactNode,
    className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={twMerge('max-w-screen-xl mx-auto px-4', className)}>
      {children}
    </div>
  )
}

export default Container
