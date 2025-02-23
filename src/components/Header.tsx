'use client';

import Image from "next/image";
import { josefinSans, robotoMono } from "@/lib/fonts";
import { headerLinks } from "@/constants/lists";
import { MenuIcon } from "@/icons/icons";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { openMenu } from "@/lib/features/appSlice";
import { useState } from "react";

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

function HeaderLink(item: { title: string, id:string, index: number }) {
    return (
        <p onClick={() => scrollToSection(item.id)} className="text-base max-[1200px]:text-[14px] max-[1200px]:leading-5 max-[800px]:text-[13px] max-[800px]:leading-[20px] max-[800px]:font-normal cursor-pointer delay-100 hover:text-neon relative inline-block 
            bg-gradient-to-r from-neon to-neon bg-[length:0%_100%] bg-no-repeat 
            transition-all duration-300 hover:bg-[length:100%_100%] text-almostWhite hover:text-[#45FFCA98] bg-clip-text"><span className={`${robotoMono.className} text-neon font-semibold`}>0{item.index+1}.</span> {item.title}</p>
    );
}

export default function Header() {
    const dispatch = useAppDispatch();
    const menuOpen = useAppSelector(state => state.app.menuOpen);

    const [isHovered, setIsHovered] = useState(false);

    const handleInteraction = (state: boolean) => {
        setIsHovered(state);
    };

    function handleOpenSidebar() {
        dispatch(openMenu());
    }

    return (
        <div className="fixed z-20 top-0 left-0 w-full flex items-center justify-between px-12 max-[1152px]:px-10 max-[1024px]:px-8 max-[800px]:px-6 py-3 bg-[#FFFFFF27] backdrop-blur-sm shadow-[0px_0px_36px_0px_#FFFFFF2F]">
            <div 
                className="relative w-[50px] h-[50px]"
                onMouseEnter={() => handleInteraction(true)}
                onMouseLeave={() => handleInteraction(false)}
                onTouchStart={() => handleInteraction(true)}
                onTouchEnd={(e) => {
                    e.preventDefault();
                    setTimeout(() => handleInteraction(false), 200);
                }}
            >
                <Image
                    src="/UserLogo.png"
                    alt="User Logo"
                    width={50}
                    height={50}
                    className={`cursor-pointer absolute transition-opacity duration-200 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <Image
                    src="/Wink.png"
                    alt="Wink Logo"
                    width={50}
                    height={50}
                    className={`cursor-pointer absolute transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>

            <div className={`${josefinSans.className} flex items-center gap-6 font-normal text-[14px] leading-5 tracking-wide text-[#FFFFFCAA] max-[1024px]:hidden`}>
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

            {
                !menuOpen && 
                <button className="hidden max-[1024px]:flex outline-none" onClick={handleOpenSidebar}>
                    <MenuIcon />
                </button>
            }
        </div>
    );
}
