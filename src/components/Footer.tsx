'use client';

import { josefinSans, rubik } from "@/app/_lib/fonts";
import SocialLink from "./SocialLink";
import { GithubSocial, InstagramSocial, LinkedInSocial, TelegramSocial, TwitterSocial } from "@/app/_lib/icons/socialIcons";

export default function Footer() {
    return (
        <div className={`${josefinSans.className} flex flex-col items-center gap-3 max-[1200px]:gap-2 max-[800px]:gap-1 py-4`}>
            <p className="font-light tracking-wide text-center text-[16px] leading-[22px] max-[800px]:text-[14px] max-[800px]:leading-[18px] text-gray1">Designed & Developed by Priyanshu</p>

            <h1 className={`${rubik.className} max-[800px]:hidden tracking-normal font-normal text-neon text-[14px] leading-[22px] max-[800px]:text-[12px] max-[800px]:leading-[18px]`}>@xtechilad</h1>

            <div className="hidden max-[800px]:flex items-center gap-4 mt-2">
                <SocialLink 
                    icon={GithubSocial} 
                    link={'https://www.github.com/PriyanshuSharma0326'} 
                />

                <SocialLink 
                    icon={LinkedInSocial} 
                    delay={0.25} 
                    link={'https://www/linkedin.com/in/PriyanshuSharma0326'} 
                />

                <SocialLink 
                    icon={InstagramSocial} 
                    delay={0.5} 
                    link={'https://www.instagram.com/xtechilad.jpg'} 
                />

                <SocialLink 
                    icon={TwitterSocial} 
                    delay={0.75} 
                    link={'https://www.x.com/xtechilad'} 
                />

                <SocialLink 
                    icon={TelegramSocial} 
                    delay={1} 
                    link={'https://t.me/xtechilad'} 
                />
            </div>
        </div>
    );
}
