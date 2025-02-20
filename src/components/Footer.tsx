import { josefinSans } from "@/lib/fonts";

export default function Footer() {
    return (
        <div className={`${josefinSans.className} flex flex-col items-center gap-4 py-4`}>
            <p className="font-light tracking-wide text-center text-[16px] leading-[22px] text-gray1">Designed & Developed by Priyanshu</p>

            <div className="">Hello</div>
        </div>
    );
}
