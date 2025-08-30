import SectionTitle from "./SectionTitle";
import { skillsList } from "@/constants/lists";

import Image from "next/image";
import { readexPro } from "@/app/_lib/fonts";
import { BulletPointIcon } from "@/app/_lib/icons/icons";
import { XRotateWrapper } from "@/app/_lib/FramerMotionWrappers";
import { useAppSelector } from "@/app/_lib/store";

export default function SkillsSection() {
    const language = useAppSelector(state => state.app.language);

    return (
        <div id='skills' className="flex flex-col gap-12 max-[1152px]:gap-10 max-[800px]:gap-8 pt-36 max-[600px]:pt-28 mx-16 max-[1280px]:mx-12 max-[800px]:mx-0">
            <SectionTitle 
                title={
                language === 'en'
                    ? 'Skills'
                    : language === 'es'
                    ? 'Destrazas'
                    : 'कौशल'
                }
                index={3} 
            />

            <div className={`${readexPro.className} flex flex-col font-bold gap-8`}>
                {skillsList.map((item, index) => {
                    return (
                        <XRotateWrapper duration={0.25} delay={0.25 * index} key={index} className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <span className="max-[1024px]:mt-[2px]">
                                    <BulletPointIcon />
                                </span>

                                <h1 className="italic text-[20px] leading-[36px] max-[1200px]:text-[18px] max-[1200px]:leading-7 max-[800px]:text-[16px] max-[800px]:leading-[22px] text-almostWhite tracking-wide font-bold">
                                    {item[language as 'en' | 'es'].title}
                                </h1>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill: string, index: number) => {
                                    return (
                                        <Image 
                                            key={index} 
                                            src={skill} 
                                            alt={skill} 
                                            width={0} 
                                            height={0} 
                                            style={{ width: 'auto', height: 'auto' }} 
                                        />
                                    )
                                })}
                            </div>
                        </XRotateWrapper>
                    );
                })}
            </div>
        </div>
    );
}
