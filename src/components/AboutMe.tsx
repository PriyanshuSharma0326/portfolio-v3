import { LeftToPositionWrapper, XRotateWrapper } from "@/lib/FramerMotionWrappers";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function AboutMe() {
    return (
        <div id='about-me' className={"flex flex-col gap-12 pt-36 max-[600px]:pt-28 mx-16 max-[1280px]:mx-12 max-[1024px]:mx-8 max-[800px]:mx-0"}>
            <SectionTitle 
                title={'About Me'} 
                index={1}
            />

            <div className="flex items-center gap-16 max-[1024px]:gap-[58px] max-[800px]:flex-col-reverse">
                <div className="w-[70%] max-[800px]:w-full text-[16px] leading-[26px] max-[500px]:text-[13px] max-[500px]:leading-[22px] tracking-wider font-light text-gray1 flex flex-col gap-4">
                    <LeftToPositionWrapper duration={0.25} delay={0.15}>
                        <p>Heyy! I&#39;m Priyanshu, and I craft digital experiences that are both functional and delightful. Passionate about the fusion of design and technology, I thrive on building dynamic web apps, optimizing performance, and exploring the latest frontend tools to bring ideas to life.</p>
                    </LeftToPositionWrapper>

                    <LeftToPositionWrapper duration={0.25} delay={0.4}>
                        <p>Beyond the web, I&#39;m driven by the ever-evolving world of technology. I enjoy tackling complex problems, sharpening my problem-solving skills, and diving into cloud technologies to expand my expertise.</p>
                    </LeftToPositionWrapper>
                </div>

                <div className="max-[800px]:ml-4 w-[30%] max-[1024px]:w-1/2 ">
                    <XRotateWrapper delay={0.4} duration={0.25} className="w-full h-full relative group">
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
                            className="w-full aspect-square absolute -z-10 rounded-md -left-2 max-[1024px]:-left-1 top-[3px] border-[3px] border-neon group-hover:left-8 max-[1024px]:group-hover:left-6 transition-all duration-300 delay-75" 
                            style={{ width: '90%', height: 'auto' }} 
                        ></div>

                        <div className="w-full aspect-square bg-[#45FFCA1F] rounded-md transition-all duration-300 delay-75 absolute -z-20 top-[3px] -left-2 max-[1024px]:-left-1 group-hover:top-10 max-[1024px]:group-hover:top-8" style={{ width: '90%', height: 'auto' }}></div>
                    </XRotateWrapper>
                </div>
            </div>
        </div>
    );
}
