import React from "react";

export default function SectionTitle({ title, icon }: { title: string; icon: React.ReactNode }) {
    return (
        <div className="flex items-center gap-6">
            <span className="flex items-center">{icon}</span>
            
            <p className="text-[#FFFFFCCE] flex items-center text-[28px] leading-[44px] mt-2">{title}</p>
            
            <div className="flex-grow mt-1 h-[1px] bg-[linear-gradient(90deg,_rgba(168,168,168,0.67)_0%,_rgba(0,0,0,0)_100%)]"></div>
        </div>
    );
}
