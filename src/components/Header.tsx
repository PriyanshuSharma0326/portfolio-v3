'use client';

import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { robotoMono } from "@/lib/fonts";
import { headerLinks } from "@/constants/lists";

const josefinSans = Josefin_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700']
});

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

function HeaderLink(item: { title: string, id:string, index: number }) {
    return (
        <p onClick={() => scrollToSection(item.id)} className="cursor-pointer delay-100 hover:text-neon relative inline-block 
                                bg-gradient-to-r from-neon to-neon bg-[length:0%_100%] bg-no-repeat 
                                transition-all duration-300 hover:bg-[length:100%_100%] text-almostWhite hover:text-[#45FFCA98] bg-clip-text"><span className={`${robotoMono.className} text-neon font-semibold`}>0{item.index+1}.</span> {item.title}</p>
    )
}

export default function Header() {
    return (
        <div className="fixed z-30 top-0 left-0 w-full flex items-center justify-between px-12 py-3 bg-[#FFFFFF27] backdrop-blur-sm shadow-[0px_0px_36px_0px_#FFFFFF2F]">
            <Image
                src="/UserLogo.png"
                alt="User Logo"
                width={50}
                height={50}
                className="cursor-pointer transition-opacity duration-200 hover:opacity-0"
            />
            <Image
                src="/Wink.png"
                alt="Wink Logo"
                width={50}
                height={50}
                className="cursor-pointer transition-opacity duration-200 opacity-0 hover:opacity-100 absolute"
            />

            <div className={`${josefinSans.className} flex items-center gap-6 font-normal text-[14px] leading-5 tracking-wide text-[#FFFFFCAA]`}>
                {headerLinks.map((link, index: number) => {
                    return (
                        <HeaderLink 
                            key={link.id} 
                            title={link.title} 
                            id={link.id} 
                            index={index} 
                        />
                    )
                })}
            </div>
        </div>
    );
}
