import { Josefin_Sans } from "next/font/google";
import Link from "next/link";

const josefinSans = Josefin_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700']
});

export default function Introduction() {
    const intro = "Hello there! I'm a passionate front end developer dedicated to creating visually stunning and functional websites. My expertise lies in crafting engaging user experiences, and I thrive on exploring the latest technologies to stay at the forefront of development trends.";
    const intro2 = "Welcome to my portfolio website, a space where I showcase my passion for web development and art!";

    return (
        <div className="flex flex-col">
            <p className="tracking-widest text-[16px] leading-[22px] font-semibold text-neon pb-4">Hi, I&#39;m</p>

            <h1 className={`${josefinSans.className} tracking-normal text-[#FFFFFCCE] text-[60px] leading-[68px] pb-4`}>Priyanshu Sharma</h1>

            <p className="tracking-wide text-almostWhite text-[44px] leading-[52px] pb-8">A <span>Software Developer</span> and <span className={`${josefinSans.className} text-neon`}>Front-End Enthusiast</span>.</p>

            <div className="flex flex-col gap-4 w-1/2 tracking-wider text-base text-almostWhite pb-8">
                <p>{intro}</p>

                <p>{intro2}</p>
            </div>

            <Link href='' className={`${josefinSans.className} tracking-wider relative w-fit rounded-md px-6 pt-4 pb-3 text-[16px] leading-[22px] font-semibold text-neon border-2 border-neon bg-transparent overflow-hidden group`}>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Check out my resume!
                </span>
                <span className="absolute inset-0 w-full h-full bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
        </div>
    );
}
