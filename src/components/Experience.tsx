import { Josefin_Sans } from "next/font/google";
import SectionTitle from "./SectionTitle";
import { ExperienceIcon } from "@/icons/icons";
import Link from "next/link";

const josefinSans = Josefin_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700']
});

export default function Experience() {
    return (
        <div className={"flex flex-col gap-12 pt-16 mx-24"}>
            <SectionTitle 
                title={'Experience'} 
                icon={<ExperienceIcon />} 
            />

            <div className={`${josefinSans.className} flex flex-col gap-4`}>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] leading-[36px]">Front End Developer <span className="text-neon"><Link href='https://www.hyprcom.in' target="_blank">@ Hyprcom</Link></span></h1>

                    <p>April 2024 - Present</p>
                </div>

                <p></p>
            </div>
        </div>
    );
}
