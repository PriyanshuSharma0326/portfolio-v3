'use client';

import { GithubIcon, LinkSquareIcon } from "@/icons/icons";
import { readexPro, josefinSans } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
    item: {
        project_image: string;
        project_title: string;
        description: string;
        source_url: string,
        live_url: string,
        stack: string[];
    };
}

export default function ProjectCard({ item }: ProjectCardProps) {
    const [isHoveringGH, setIsHoveringGH] = useState(false);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    return (
        <div className="w-full relative">
            <div className="w-[55%] relative group cursor-pointer">
                <Image
                    src={item.project_image} 
                    alt={item.project_title} 
                    width={1920} 
                    height={1080} 
                    style={{ width: '100%', height: 'auto' }} 
                    className="rounded-sm object-cover"
                />

                <div className="rounded-sm absolute top-0 left-0 bg-[#2E9E7F4D] w-full h-full group-hover:bg-transparent transition-all duration-500 delay-75"></div>
            </div>

            <div className="w-[50%] text-right absolute h-full bg-transparent right-0 top-0 flex flex-col gap-4 justify-center">
                <h1
                    className={`${readexPro.className} w-fit ml-auto text-[24px] leading-[36px] tracking-tight font-bold relative inline-block 
                                bg-gradient-to-r from-neon to-neon bg-[length:0%_100%] bg-no-repeat 
                                transition-all duration-500 hover:bg-[length:100%_100%] text-almostWhite hover:text-[#45FFCA67] bg-clip-text`}
                    >
                    {item.project_title}
                </h1>

                <div className="p-6 w-full h-fit bg-[#192e48] rounded-md tracking-wider text-[14px] leading-[22px] font-normal shadow-[-2px_0px_22px_0px_#23205487]">
                    <p className="text-gray1">{item.description}</p>
                </div>

                <div className={`${josefinSans.className} w-[90%] ml-auto justify-end flex flex-wrap gap-3 text-gray1`}>
                    {item.stack.map((item, index) => {
                        return (
                            <p key={index} className="text-[13px] leading-[18px] font-medium">{item}</p>
                        )
                    })}
                </div>

                <div className="flex items-center gap-4 ml-auto">
                    <Link 
                        onMouseEnter={() => setIsHoveringGH(true)}
                        onMouseLeave={() => setIsHoveringGH(false)} 
                        href={item.source_url} target="_blank"
                    >
                        <GithubIcon style={{ color: isHoveringGH ? '#45FFCA' : '#FFFFFCCE' }} />
                    </Link>

                    <Link 
                        onMouseEnter={() => setIsHoveringLink(true)}
                        onMouseLeave={() => setIsHoveringLink(false)} 
                        href={item.live_url} target="_blank"
                    >
                        <LinkSquareIcon style={{ color: isHoveringLink ? '#45FFCA' : '#FFFFFCCE' }} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
