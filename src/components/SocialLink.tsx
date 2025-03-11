'use client';

import { SocialLinkWrapper } from "@/app/_lib/FramerMotionWrappers";
import Link from "next/link";
import { useState } from "react";

export default function SocialLink({ icon: Icon, link, duration = 0.25, delay = 0 }: { icon: React.FC<{ color?: string }>, duration?: number, delay?: number, link: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <SocialLinkWrapper duration={duration} delay={delay} className='cursor-pointer size-8 rounded-full bg-transparent flex items-center justify-center transition-all duration-200 ease-in-out hover:pb-1' >
            <Link 
                href={link} 
                target='_blank' 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
            >
                <Icon color={isHovered ? '#45FFCA' : '#FFFFFCAA'} />
            </Link>
        </SocialLinkWrapper>
    );
}