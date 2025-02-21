import { readexPro, robotoMono } from "@/lib/fonts";
import React from "react";

export default function SectionTitle({ title, index }: { title: string; index: number }) {
    return (
        <div className="flex items-center gap-6 max-[1200px]:gap-4 max-[1024px]:gap-3 max-[800px]:gap-2 select-none">
            <p className={`${readexPro.className} text-[#FFFFFF] font-semibold flex items-center text-[36px] leading-[44px] max-[1200px]:text-[28px] max-[1200px]:leading-[36px] max-[1024px]:text-[24px] max-[1024px]:leading-[32px] max-[800px]:text-[20px] max-[800px]:leading-[28px] mt-2 gap-3 max-[1200px]:gap-2 max-[800px]:gap-1`}>
                <span className={`${robotoMono.className} text-neon`}>0{index}.</span>
                {title}
            </p>
            
            <div className="flex-grow mt-[7px] h-[1px] bg-[linear-gradient(90deg,_rgba(168,168,168,0.67)_0%,_rgba(0,0,0,0)_100%)]"></div>
        </div>
    );
}
