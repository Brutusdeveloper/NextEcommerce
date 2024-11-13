import React, { ReactNode } from "react";
import { FaClockRotateLeft, FaWallet } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { PiChats } from "react-icons/pi";


export interface Facilities{
    title:string,
    description:string,
    icon: ReactNode
}


const data:Facilities[] = [
    {
        title:"Free delivery",
        description: "When ordering above $500",
        icon: <GoRocket/> 
    },
    {
        title:"90 Days Return",
        description: "If goods have problem",
        icon: <FaClockRotateLeft/> 
    },
    {
        title:"Secure Payment",
        description: "100% secure payment",
        icon: <FaWallet/> 
    },
    {
        title:"24/7 Support",
        description: "Dedicated Support ",
        icon: <PiChats/> 
    }
]


const Facilities=()=>{
    return <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">{
        data.map((item, index)=>(
            <div key={index} className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                <span className="text-3xl text-darkOrange">{item.icon}</span>
                <div className="text-center sm:text-left">
                    <h2 className="font-bold text-sm uppercase">{item.title}</h2>
                    <p className="text-lightText text-sm">{item.description}</p>
                </div>
            </div>
        ))
        
        }</div>
}
export default Facilities;