'use client'

import { josefinSans, readexPro } from "@/lib/fonts";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Introduction() {
    const [displayedName, setDisplayedName] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const fullName = "Priyanshu Sharma";

    const intro = useMemo(() => 
        "Hello there! I'm a passionate front end developer dedicated to creating visually stunning and functional websites. My expertise lies in crafting engaging user experiences, and I thrive on exploring the latest technologies to stay at the forefront of development trends.",
    []);

    const intro2 = useMemo(() => 
        "Welcome to my portfolio website, a space where I showcase my passion for web development and art!",
    []);

    // Typing animation effect
    useEffect(() => {
        if (displayedName.length < fullName.length) {
            const timeout = setTimeout(() => {
                setDisplayedName(fullName.slice(0, displayedName.length + 1));
            }, 230);

            return () => clearTimeout(timeout);
        }
        else {
            setIsTypingComplete(true);
        }
    }, [displayedName]);

    return (
        <div className="flex flex-col">
            <p className="tracking-widest text-[16px] leading-[22px] font-normal text-neon pb-4">Hi, I&#39;m</p>

            <h1 className={`${readexPro.className} tracking-normal text-almostWhite text-[60px] leading-[68px] font-medium pb-4`}>
                {displayedName}
                <span 
                    className={`inline-block w-[4px] h-[60px] bg-neon ml-1 ${isTypingComplete ? 'opacity-0' : 'opacity-100'}`}
                    style={{ 
                        // verticalAlign: 'middle',
                        transition: 'opacity 0.1s ease-in-out'
                    }}
                />
            </h1>

            <p className={`${readexPro.className} tracking-wide text-gray1 text-[44px] leading-[52px] font-medium pb-8`}>A <span>Software Developer</span> and <span className={`${josefinSans.className} text-neon font-bold`}>Front-End Enthusiast</span>.</p>

            <div className="flex flex-col gap-4 w-1/2 tracking-wider text-[16px] leading-[26px] font-light text-gray1 pb-8">
                <p>{intro}</p>

                <p>{intro2}</p>
            </div>

            <Link href='https://drive.google.com/file/d/1UxYOgZ_jBab6nMvI8E7di0ciec4ZJ3Kg/view?usp=sharing' target="_blank" className={`${josefinSans.className} tracking-wider relative w-fit rounded-md px-6 pt-4 pb-3 text-[16px] leading-[22px] font-semibold text-neon border-2 border-neon bg-transparent overflow-hidden group`}>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    Check out my resume!
                </span>
                <span className="absolute inset-0 w-full h-full bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </Link>
        </div>
    );
}
