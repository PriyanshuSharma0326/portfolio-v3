import { josefinSans, rubik } from "@/lib/fonts";

export default function Footer() {
    return (
        <div className={`${josefinSans.className} flex flex-col items-center gap-3 max-[1200px]:gap-2 max-[800px]:gap-1 py-4`}>
            <p className="font-light tracking-wide text-center text-[16px] leading-[22px] max-[800px]:text-[14px] max-[800px]:leading-[18px] text-gray1">Designed & Developed by Priyanshu</p>

            <h1 className={`${rubik.className} tracking-normal font-normal text-neon text-[14px] leading-[22px] max-[800px]:text-[12px] max-[800px]:leading-[18px]`}>@xtechilad</h1>
        </div>
    );
}
