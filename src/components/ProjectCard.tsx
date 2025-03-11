'use client';

import { GithubIcon, LinkSquareIcon } from "@/app/_lib/icons/icons";
import { readexPro, josefinSans } from "@/app/_lib/fonts";
import { LeftToPositionWrapper } from "@/app/_lib/FramerMotionWrappers";
import { ProjectCardProps } from "@/app/_lib/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/_lib/store";

export default function ProjectCard({ item }: ProjectCardProps) {
    const [isHoveringGH, setIsHoveringGH] = useState(false);
    const [isHoveringLink, setIsHoveringLink] = useState(false);
    const language = useAppSelector(state => state.app.language);

    const [iconSize, setIconSize] = useState(window.innerWidth < 800 ? 18 : 22);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            setIconSize(window.innerWidth < 800 ? 14 : 22);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <LeftToPositionWrapper duration={0.5} className="w-full relative">
            <div className="w-[55%] max-[1024px]:w-1/2 max-[800px]:w-full relative group cursor-pointer">
                <Image
                    src={item.project_image} 
                    alt={item.project_title[language as 'en' | 'es']} 
                    width={1920} 
                    height={1080} 
                    style={{ width: '100%', height: 'auto' }} 
                    className="rounded-sm object-cover max-[600px]:aspect-square"
                />

                <div className="rounded-sm absolute top-0 left-0 bg-[#2E9E7F4D] max-[800px]:bg-[#192E48DE] w-full h-full group-hover:bg-transparent transition-all duration-500 delay-75"></div>
            </div>

            <div className="max-[800px]:p-6 w-[50%] max-[1024px]:w-3/5 max-[800px]:w-full text-right max-[800px]:text-left absolute h-full bg-transparent right-0 top-0 flex flex-col gap-4 justify-center">
                <h1
                    className={`${readexPro.className} w-fit ml-auto max-[800px]:ml-0 text-[24px] leading-[36px] max-[1200px]:text-[22px] max-[1200px]:leading-[32px] max-[600px]:text-[20px] max-[800px]:leading-7 tracking-tight font-bold relative inline-block 
                                bg-gradient-to-r from-neon to-neon bg-[length:0%_100%] bg-no-repeat 
                                transition-all duration-500 hover:bg-[length:100%_100%] text-almostWhite max-[800px]:text-neon hover:text-[#45FFCA67] max-[800px]:hover:text-neon bg-clip-text`}
                    >
                    {item.project_title[language as 'en' | 'es']}
                </h1>

                <div className="p-6 max-[800px]:p-0 w-full h-fit bg-darkBlue1 max-[800px]:bg-transparent rounded-md tracking-wider text-[14px] leading-[22px] max-[800px]:text-[12px] max-[800px]:leading-[18px] font-normal shadow-[-2px_0px_22px_0px_#23205487]">
                    <p className="text-gray1">{item.description[language as 'en' | 'es']}</p>
                </div>

                <div className={`${josefinSans.className} w-[90%] max-[800px]:w-full ml-auto max-[800px]:ml-0 justify-end max-[800px]:justify-start flex flex-wrap gap-3 max-[1200px]:gap-2 text-gray1`}>
                    {item.stack.map((item, index) => {
                        return (
                            <p key={index} className="text-[12px] leading-[18px] font-medium">{item}</p>
                        )
                    })}
                </div>

                <div className="flex items-center gap-4 ml-auto max-[800px]:ml-0">
                    <Link 
                        onMouseEnter={() => setIsHoveringGH(true)}
                        onMouseLeave={() => setIsHoveringGH(false)} 
                        href={item.source_url} target="_blank"
                    >
                        <GithubIcon size={iconSize} style={{ color: isHoveringGH ? '#45FFCA' : '#FFFFFCCE' }} />
                    </Link>

                    <Link 
                        onMouseEnter={() => setIsHoveringLink(true)}
                        onMouseLeave={() => setIsHoveringLink(false)} 
                        href={item.live_url} target="_blank"
                    >
                        <LinkSquareIcon size={iconSize} style={{ color: isHoveringLink ? '#45FFCA' : '#FFFFFCCE' }} />
                    </Link>
                </div>
            </div>
        </LeftToPositionWrapper>
    );
}
