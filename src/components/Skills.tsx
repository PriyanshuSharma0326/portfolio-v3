import SectionTitle from "./SectionTitle";
import { skillsList } from "@/constants/lists";

import Image from "next/image";
import { readexPro } from "@/lib/fonts";

export default function SkillsSection() {
    return (
        <div id='skills' className="flex flex-col gap-12 pt-32 mx-16">
            <SectionTitle 
                title={'Skills'} 
                index={3} 
            />

            <div className={`${readexPro.className} flex flex-col font-bold gap-8`}>
                {skillsList.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-2">
                            <h1 className="text-[20px] leading-[36px] tracking-wide font-bold">{item.title}</h1>

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
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
