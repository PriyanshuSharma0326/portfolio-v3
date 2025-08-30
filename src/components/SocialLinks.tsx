'use client';

import { GithubSocial, InstagramSocial, LinkedInSocial, TelegramSocial, TwitterSocial } from "@/app/_lib/icons/socialIcons";
import { XRotateWrapper } from '@/app/_lib/FramerMotionWrappers';
import SocialLink from './SocialLink';
import { motion } from "framer-motion";
import { josefinSans } from "@/app/_lib/fonts";
import { useAppSelector } from "@/app/_lib/store";
import { useDispatch } from "react-redux";
import { changeToHindi, changeToSpanish, setDefaultLanguage } from "@/app/_lib/features/appSlice";

export default function SocialLinks() {
    const dispatch = useDispatch();

    const language = useAppSelector(state => state.app.language);

    function handleLanguageClick() {
        if(language === 'es') {
            dispatch(changeToHindi());
        }
        else if(language === 'hi') {
            dispatch(setDefaultLanguage());
        }
        else {
            dispatch(changeToSpanish());
        }
    }

    return (
        <div className="fixed right-0 bottom-0 h-[55%] w-48 max-[1440px]:w-40 max-[1280px]:w-32 max-[1152px]:w-28 max-[1024px]:w-20 max-[800px]:hidden flex flex-col items-center">
            <div className="h-full flex flex-col items-center gap-4">
                <motion.div 
                    initial={{ opacity: 0, rotateX: 90 }} 
                    whileInView={{ opacity: 1, rotateX: 0 }} 
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }} 
                    viewport={{ once: true, amount: 0.2 }} 
                >
                    <motion.button
                        onClick={handleLanguageClick}
                        className={`${josefinSans.className} text-[#FFFFFCAA] text-[20px] leading-6`}
                        whileHover={{ y: -2 }} 
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {language}
                    </motion.button>
                </motion.div>
                
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
