import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function AboutMe() {
    return (
        <div id='about-me' className={"flex flex-col gap-12 pt-36 mx-16"}>
            <SectionTitle 
                title={'About Me'} 
                index={1}
            />

            <div className="flex items-center gap-16">
                <div className="w-[70%] text-[16px] leading-[26px] tracking-wider font-light text-gray1 flex flex-col gap-4">
                    <p>Heyy! I&#39;m Priyanshu, and I craft digital experiences that are both functional and delightful. Passionate about the fusion of design and technology, I thrive on building dynamic web apps, optimizing performance, and exploring the latest frontend tools to bring ideas to life.</p>

                    <p>Beyond the web, I&#39;m driven by the ever-evolving world of technology. I enjoy tackling complex problems, sharpening my problem-solving skills, and diving into cloud technologies to expand my expertise.</p>
                </div>

                <div className="w-[30%]">
                    <div className="w-full h-full relative group">
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
                            className="w-full aspect-square absolute -z-10 rounded-md -left-2 top-[2px] border-[3px] border-neon group-hover:left-8 transition-all duration-300 delay-75" 
                            style={{ width: '90%', height: 'auto' }} 
                        ></div>

                        <div className="w-full aspect-square bg-[#45FFCA1F] rounded-md transition-all duration-300 delay-75 absolute -z-20 top-[2px] -left-2 group-hover:top-10" style={{ width: '90%', height: 'auto' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
