import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Logo = ({classname}:{classname?:string}) => {
  return (
    <Link href={"/"}>
      <h2
        className={twMerge(
          "text-2xl text-accent hover:text-darkOrange font-bold uppercase hoverEffect cursor-default relative group overflow-hidden"
        , classname)}
      >
        Shoppers
        <span className="absolute left-0 bottom-0 w-full h-px bg-darkOrange -translate-x-[110%] group-hover:translate-x-0 hoverEffect transition-transform"></span>
      </h2>
    </Link>
  );
};

export default Logo;
