'use client';

import { headerLinks } from "@/constants/lists";
import { CrossIcon } from "@/app/_lib/icons/icons";
import { changeToSpanish, closeMenu, setDefaultLanguage } from "@/app/_lib/features/appSlice";
import { josefinSans, readexPro, robotoMono } from "@/app/_lib/fonts";
import { useAppDispatch, useAppSelector } from "@/app/_lib/store";
import Link from "next/link";
import { useEffect, useState } from "react";

function HeaderLink(item: { title: string, id:string, index: number }) {
    const dispatch = useAppDispatch();

    function handleCloseSidebar() {
        dispatch(closeMenu());
    }

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            handleCloseSidebar();
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div onClick={() => scrollToSection(item.id)} className="cursor-pointer flex flex-col items-center gap-[6px] max-[600px]:gap-[6px] font-bold">
            <h1 className={`${robotoMono.className} tracking-tight text-neon max-[600px]:text-[14px] max-[600px]:leading-5`}>0{item.index + 1}.</h1>

            <p className={`${readexPro.className} tracking-wide font-normal text-[18px] leading-7 max-[600px]:text-[16px] max-[600px]:leading-[22px]`}>{item.title}</p>
        </div>
    )
}

export default function Menu() {
    const dispatch = useAppDispatch();

    function handleCloseSidebar() {
        dispatch(closeMenu());
    }

    const menuOpen = useAppSelector(state => state.app.menuOpen);
    const language = useAppSelector(state => state.app.language);

    const [containerOpen, setContainerOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function handleLanguageClick() {
        if(language === 'es') {
            dispatch(setDefaultLanguage());
        }
        else {
            dispatch(changeToSpanish());
        }
    }

    useEffect(() => {
        if(menuOpen) {
            setContainerOpen(true);
        }
        else {
            setSidebarOpen(false);
            setTimeout(() => {
                setContainerOpen(false);
            }, 500);
        }
    }, [menuOpen]);

    useEffect(() => {
        if(containerOpen) {
            setTimeout(() => {
                setSidebarOpen(containerOpen);
            }, 50);
        }
    }, [containerOpen]);

    return (
        containerOpen && 
        <div className="hidden max-[1024px]:flex fixed z-30 right-0 top-0 w-full h-full bg-transparent backdrop-blur-sm overflow-hidden">
            <div className={`${sidebarOpen ? 'right-0' : '-right-1/2 max-[800px]:-right-[75%] max-[600px]:-right-[80%]'} transition-all ease-in-out duration-500 top-0 right-0 absolute w-1/2 max-[800px]:w-3/4 h-full max-[600px]:w-4/5 bg-darkBlue1 shadow-[-2px_0px_22px_0px_#23205487]`}>
                <div className="size-full flex flex-col justify-center gap-8 max-[600px]:gap-6 items-center">
                    {headerLinks.map((link, index: number) => {
                        return (
                            <HeaderLink 
                                key={index} 
                                title={link[language as 'en' | 'es' | 'hi'].title} 
                                id={link.id} 
                                index={index} 
                            />
                        )
                    })}

                    <Link href='https://drive.google.com/file/d/1UxYOgZ_jBab6nMvI8E7di0ciec4ZJ3Kg/view?usp=sharing' target="_blank" className={`${josefinSans.className} tracking-wider relative w-fit rounded-md px-6 max-[800px]:px-4 pt-4 max-[800px]:pt-[14px] pb-3 max-[800px]:pb-[10px] text-[16px] leading-[22px] max-[800px]:text-[14px] max-[800px]:leading-5 font-semibold text-neon border-2 border-neon bg-transparent overflow-hidden group mt-2`}>
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                            Resume
                        </span>
                        <span className="absolute inset-0 w-full h-full bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                    </Link>

                    <button onClick={handleLanguageClick} className={`${josefinSans.className} tracking-wider hidden max-[800px]:flex relative w-fit rounded-md px-4 pt-[14px] pb-[10px] text-[14px] leading-5 font-semibold text-neon bg-transparent overflow-hidden group -mt-2`}>
                        <span className="relative z-10 transition-colors duration-500">
                            {language === 'en' 
                                ? 'Cambiar a Español' 
                                : language === 'es' 
                                    ? 'अंग्रेज़ी में बदलें' 
                                    : 'Change to English'
                            }
                        </span>
                    </button>
                </div>
            </div>

            <div className="absolute top-[20px] right-[32px] max-[800px]:right-[22px] leading-none p-0 m-0">
                <button className="leading-none outline-none" onClick={handleCloseSidebar}>
                    <CrossIcon />
                </button>
            </div>
        </div>
    );
}
