import { readexPro, robotoMono } from "@/lib/fonts";
import React from "react";

export default function SectionTitle({ title, index }: { title: string; index: number }) {
    return (
        <div className="flex items-center gap-6 select-none">
            <p className={`${readexPro.className} text-[#FFFFFCCE] font-semibold flex items-center text-[36px] leading-[44px] mt-2 gap-3`}>
                <span className={`${robotoMono.className} text-neon`}>0{index}.</span>
                {title}
            </p>
            
            <div className="flex-grow mt-[6px] h-[1px] bg-[linear-gradient(90deg,_rgba(168,168,168,0.67)_0%,_rgba(0,0,0,0)_100%)]"></div>
        </div>
    );
}
