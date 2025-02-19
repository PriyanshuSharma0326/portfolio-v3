'use client';

import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700']
});

export default function Header() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <div className="fixed z-30 top-0 left-0 w-full flex items-center justify-between px-12 py-3 bg-[#FFFFFF2F] backdrop-blur-md shadow-[0px_0px_36px_0px_#FFFFFF2F]">
            <Image 
                src='/UserLogo.png' 
                alt='User Logo' 
                width={50} 
                height={50} 
                className='cursor-pointer' 
            />

            <div className={`${josefinSans.className} flex items-center gap-6 font-normal text-[14px] leading-5 tracking-wide text-[#FFFFFCAA]`}>
                <p onClick={() => scrollToSection("about-me")} className="cursor-pointer hover:text-neon"><span className="text-neon font-semibold">01.</span> About me</p>
                <p className="cursor-pointer hover:text-neon"><span className="text-neon font-semibold">02.</span> Experience</p>
                <p className="cursor-pointer hover:text-neon"><span className="text-neon font-semibold">03.</span> Skills</p>
                <p className="cursor-pointer hover:text-neon"><span className="text-neon font-semibold">04.</span> Projects</p>
                <p className="cursor-pointer hover:text-neon"><span className="text-neon font-semibold">05.</span> Contact me</p>
            </div>
        </div>
    );
}
