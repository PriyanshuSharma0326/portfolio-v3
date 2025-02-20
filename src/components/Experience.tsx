import { Josefin_Sans } from "next/font/google";
import SectionTitle from "./SectionTitle";
import { BulletPointIcon } from "@/icons/icons";
import Link from "next/link";
import { experienceList } from "@/constants/lists";

const josefinSans = Josefin_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700']
});

export default function Experience() {
    return (
        <div id='experience' className={"flex flex-col gap-12 pt-32 mx-40"}>
            <SectionTitle 
                title={'Experience'} 
                index={2} 
            />

            <div className={`flex flex-col gap-4`}>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] leading-[36px] font-bold">Front End Developer <span className="text-neon"><Link href='https://www.hyprcom.in' target="_blank" className={`${josefinSans.className}`}>@ Hyprcom</Link></span></h1>

                    <p className={`${josefinSans.className} text-gray1`}>April 2024 - Present</p>
                </div>

                <ul className="pl-4 list-none flex flex-col gap-3 text-gray1">
                    {experienceList.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 tracking-wider font-light text-[16px] leading-[26px]">
                            <span className="mt-[6px]">
                                <BulletPointIcon />
                            </span>

                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
