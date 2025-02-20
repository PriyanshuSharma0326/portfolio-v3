import { josefinSans } from "@/lib/fonts";
import Link from "next/link";

export default function ContactMe() {
    return (
        <div id='contact-me' className="flex flex-col items-center gap-12 py-44 mx-48">
            <div className="w-full flex flex-col items-center gap-4">
                <h1 className={`${josefinSans.className} tracking-tight text-almostWhite text-[60px] leading-[68px] font-bold`}>Get In Touch</h1>

                <p className="text-gray1 w-3/4 text-center text-[16px] leading-[26px] tracking-wider font-light">I&#39;m actively seeking freelance opportunities that challenge my skills and creativity. However, if you have any other requests or questions, don&#39;t hesitate to reach out—I&#39;d be happy to discuss how I can assist you!</p>
            </div>

            <Link href='mailto:priyanshusharma0326@gmail.com' className={`${josefinSans.className} tracking-wider relative w-fit rounded-md px-6 pt-4 pb-3 text-[16px] leading-[22px] font-semibold text-neon border-2 border-neon bg-transparent overflow-hidden group`}>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    Say Hello
                </span>
                <span className="absolute inset-0 w-full h-full bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </Link>
        </div>
    );
}
