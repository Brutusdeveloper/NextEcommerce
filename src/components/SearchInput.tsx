'use client';


import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput= () => {
    const [search, setSearch] = useState("");
    return(
        <div className="w-full flex-1 hidden md:inline-flex  h-12  relative">
            <CiSearch className="text-lg absolute left-2.5 mt-4 text-lightOrange"/>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 h-full outline-none bg-transparent placeholder-text-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-28" type="text" placeholder="Search products..."/>
            {search && <IoMdClose onClick={()=>setSearch("")} className="absolute text-accent/50 hover:text-lightRed hoverEffect cursor-pointer right-20 top-4"/>}
            <button className="bg-lightOrange absolute right-0 px-3.5 py-1.5 mr-1.5 text-sm hover:bg-darkOrange hoverEffect text-accentWhite mt-2">Search</button>
        </div>
    )
}
export default SearchInput;