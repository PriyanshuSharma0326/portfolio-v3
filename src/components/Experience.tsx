import SectionTitle from "./SectionTitle";
import { BulletPointIcon } from "@/app/_lib/icons/icons";
import Link from "next/link";
import { experienceList } from "@/constants/lists";
import { LeftToPositionWrapper } from "@/app/_lib/FramerMotionWrappers";
import { josefinSans, readexPro } from "@/app/_lib/fonts";
import { useAppSelector } from "@/app/_lib/store";

export default function Experience() {
    const language = useAppSelector(state => state.app.language);

    return (
        <div id='experience' className={"flex flex-col gap-12 max-[1152px]:gap-10 max-[800px]:gap-8 pt-28 max-[600px]:pt-22 mx-40 max-[1280px]:mx-28 max-[1024px]:mx-20 max-[800px]:mx-0"}>
            <SectionTitle 
                title={
                language === 'en'
                    ? 'Experience'
                    : language === 'es'
                    ? 'Vivencia'
                    : 'अनुभव'
                }
                index={2} 
            />

            {experienceList.map((item, itemIndex) => {
                const titleDelay = itemIndex * 0.1;
                
                return (
                    <LeftToPositionWrapper duration={0.5} delay={titleDelay} key={item.id} className={`flex flex-col gap-4`}>
                        <div className={`${readexPro.className} flex flex-col gap-2 max-[800px]:gap-[6px]`}>
                            <h1 className="text-[20px] leading-[36px] max-[1200px]:text-[18px] max-[1200px]:leading-7 max-[800px]:text-[16px] max-[800px]:leading-[22px] font-bold text-almostWhite font-medium">
                                {item[language as 'es' | 'es'].role} <span className={`${josefinSans.className} text-neon`}><Link href='https://www.hyprcom.in' target="_blank"> @{item[language as 'es' | 'es'].organisation}</Link></span>
                            </h1>

                            <p className="text-base max-[1200px]:text-[14px] max-[1200px]:leading-5 max-[800px]:text-[13px] max-[800px]:leading-[20px] max-[800px]:font-normal text-gray1">
                                {item[language as 'es' | 'es'].time}
                            </p>
                        </div>

                        <ul className="pl-4 max-[1200px]:pl-2 max-[800px]:pl-0 list-none flex flex-col gap-3 text-gray2">
                            {item[language as 'es' | 'es'].description.map((desc: string, index: number) => (
                                <LeftToPositionWrapper 
                                    duration={0.4} 
                                    delay={titleDelay + 0.15 + (0.08 * index)} 
                                    key={index} 
                                    className="flex items-start gap-2 tracking-wider font-light text-[16px] leading-[26px] max-[500px]:text-[13px] max-[500px]:leading-[22px]"
                                >
                                    <li className="flex items-start gap-2">
                                        <span className="mt-[6px] max-[800px]:mt-1">
                                            <BulletPointIcon />
                                        </span>

                                        {desc}
                                    </li>
                                </LeftToPositionWrapper>
                            ))}
                        </ul>
                    </LeftToPositionWrapper>
                )
            })}
        </div>
    );
}
