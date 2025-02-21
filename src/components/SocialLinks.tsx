'use client';

import { GithubSocial, InstagramSocial, LinkedInSocial, TelegramSocial, TwitterSocial } from "@/icons/socialIcons";
import { XRotateWrapper } from '@/lib/FramerMotionWrappers';
import SocialLink from './SocialLink';

export default function SocialLinks() {
    return (
        <div className="fixed right-0 bottom-0 h-[55%] w-48 max-[1440px]:w-40 max-[1280px]:w-32 max-[1152px]:w-28 max-[1024px]:w-20 max-[800px]:hidden flex flex-col items-center">
            <div className="h-full flex flex-col items-center gap-4">
                <SocialLink 
                    icon={GithubSocial} 
                    delay={1.25} 
                    link={'https://www.github.com/PriyanshuSharma0326'} 
                />

                <SocialLink 
                    icon={LinkedInSocial} 
                    delay={1} 
                    link={'https://www/linkedin.com/in/PriyanshuSharma0326'} 
                />

                <SocialLink 
                    icon={InstagramSocial} 
                    delay={0.75} 
                    link={'https://www.instagram.com/xtechilad.jpg'} 
                />

                <SocialLink 
                    icon={TwitterSocial} 
                    delay={0.5} 
                    link={'https://www.x.com/xtechilad'} 
                />

                <SocialLink 
                    icon={TelegramSocial} 
                    delay={0.25} 
                    link={'https://t.me/xtechilad'} 
                />

                <XRotateWrapper className="mt-4 w-[2px] bg-[linear-gradient(180deg,_rgba(69,255,202,1)_0%,_rgba(0,0,0,0)_100%)] flex-grow"></XRotateWrapper>
            </div>
        </div>
    );
}
