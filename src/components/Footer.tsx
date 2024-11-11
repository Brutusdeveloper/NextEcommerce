import React from "react";
import Container from "./Container";
import { footerData } from "@/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-bgLight py-5">
            <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {footerData.map((item, index) => (
                    <div key={index} >
                            <h3 key={item._id} className="font-semibold text-darkOrange/90 mb-3 ">{item.title}</h3>
                            <div className="flex flex-col gap-0.5">
                            {item.listItem.map((listData) =>listData.listData.map((data, index)=>(
                                        <Link href={"/"} key={index} className="py-1 text-accent font-medium hover:text-darkOrange hoverEffect cursor-pointer">{data}</Link>
                            ))
                            )}
                            </div>

                    </div>
                ))}
            </Container>
        </div>
    );
};

export default Footer;
