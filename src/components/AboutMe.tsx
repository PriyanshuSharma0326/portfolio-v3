import { Josefin_Sans } from "next/font/google";
import SectionTitle from "./SectionTitle";
import { AboutMeIcon } from "@/icons/icons";
import Image from "next/image";

const josefinSans = Josefin_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700']
});

export default function AboutMe() {
    return (
        <div id='about-me' className={"flex flex-col gap-12 pt-36 mx-16"}>
            <SectionTitle 
                title={'About Me'} 
                icon={<AboutMeIcon />} 
            />

            <div className={`${josefinSans.className} flex items-center gap-16`}>
                <div className="w-[70%] text-base tracking-wider text-almostWhite flex flex-col gap-4">
                    <p>Heyy! I’m Priyanshu, and I craft digital experiences that are both functional and delightful. Passionate about the fusion of design and technology, I thrive on building dynamic web apps, optimizing performance, and exploring the latest frontend tools to bring ideas to life.</p>

                    <p>Beyond the web, I’m driven by the ever-evolving world of technology. I enjoy tackling complex problems, sharpening my problem-solving skills, and diving into cloud technologies to expand my expertise.</p>
                </div>

                <div className="w-[30%]">
                    <div className="w-full h-full relative">
                        <Image 
                            src='/ProfilePicture.png' 
                            alt='User Image' 
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '90%', height: 'auto' }}
                            className='aspect-square rounded-md relative z-5' 
                        />

                        <div 
                            className="w-full aspect-square absolute -z-10 rounded-md left-6 top-[2px] border-[3px] border-neon" 
                            style={{ width: '90%', height: 'auto' }} 
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
