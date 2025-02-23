import SectionTitle from "./SectionTitle";
import { BulletPointIcon } from "@/icons/icons";
import Link from "next/link";
import { experienceList } from "@/constants/lists";
import { LeftToPositionWrapper } from "@/lib/FramerMotionWrappers";
import { josefinSans } from "@/lib/fonts";

export default function Experience() {
    return (
        <div id='experience' className={"flex flex-col gap-12 max-[1152px]:gap-10 max-[800px]:gap-8 pt-36 max-[600px]:pt-28 mx-40 max-[1280px]:mx-28 max-[1024px]:mx-20 max-[800px]:mx-0"}>
            <SectionTitle 
                title={'Experience'} 
                index={2} 
            />

            <div className={`flex flex-col gap-4`}>
                <div className="flex flex-col gap-2 max-[800px]:gap-[6px]">
                    <h1 className="text-[20px] leading-[36px] max-[1200px]:text-[18px] max-[1200px]:leading-7 max-[800px]:text-[16px] max-[800px]:leading-[22px] font-bold text-almostWhite">Front End Developer <span className="text-neon"><Link href='https://www.hyprcom.in' target="_blank" className={`${josefinSans.className}`}>@ Hyprcom</Link></span></h1>

                    <p className={`${josefinSans.className} text-base max-[1200px]:text-[14px] max-[1200px]:leading-5 max-[800px]:text-[13px] max-[800px]:leading-[20px] max-[800px]:font-normal text-gray1`}>April 2024 - Present</p>
                </div>

                <ul className="pl-4 max-[1200px]:pl-2 max-[800px]:pl-0 list-none flex flex-col gap-3 text-gray1">
                    {experienceList.map((item: string, index: number) => (
                        <LeftToPositionWrapper duration={0.25} delay={0.25 * index} key={index} className="flex items-start gap-2 tracking-wider font-light text-[16px] leading-[26px] max-[500px]:text-[13px] max-[500px]:leading-[22px]">
                            <li className="flex items-start gap-2">
                                <span className="mt-[6px] max-[800px]:mt-1">
                                    <BulletPointIcon />
                                </span>

                                {item}
                            </li>
                        </LeftToPositionWrapper>
                    ))}
                </ul>
            </div>
        </div>
    );
}
