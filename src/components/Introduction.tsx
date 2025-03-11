import { josefinSans, readexPro } from "@/app/_lib/fonts";
import { LeftToPositionWrapper, XRotateWrapper } from "@/app/_lib/FramerMotionWrappers";
import Link from "next/link";

export default function Introduction() {
    const fullName = "Priyanshu Sharma";

    const intro = "Hello there! I'm a passionate front end developer dedicated to creating visually stunning and functional websites. My expertise lies in crafting engaging user experiences, and I thrive on exploring the latest technologies to stay at the forefront of development trends.";
    const intro2 = "Welcome to my portfolio website, a space where I showcase my passion for web development and art!";

    return (
        <div className="flex flex-col">
            <XRotateWrapper duration={0.25}>
                <p className="tracking-widest text-[16px] leading-[22px] max-[800px]:text-[14px] max-[800px]:leading-5 font-normal text-neon pb-4 max-[1024px]:pb-3 max-[500px]:pb-2">Hi, I&#39;m</p>
            </XRotateWrapper>

            <XRotateWrapper duration={0.25} delay={0.25}>
                <h1 className={`${readexPro.className} -ml-1 max-[800px]:-ml-[3px] tracking-normal text-almostWhite text-[60px] leading-[68px] max-[800px]:text-[46px] max-[800px]:leading-[54px] max-[500px]:text-[32px] max-[500px]:leading-[46px] font-medium pb-4 max-[1024px]:pb-3 max-[800px]:pb-2`}>
                    {fullName}
                </h1>
            </XRotateWrapper>

            <XRotateWrapper duration={0.25} delay={0.5}>
                <p className={`${readexPro.className} tracking-wide text-gray1 text-[44px] leading-[52px] max-[1200px]:text-[36px] max-[1200px]:leading-[44px] max-[800px]:text-[26px] max-[800px]:leading-[34px] max-[500px]:text-[20px] max-[500px]:leading-[30px] font-medium pb-8 max-[800px]:pb-6 max-[500px]:pb-4`}>A <span>Software Developer</span> and <span className={`${josefinSans.className} text-neon font-bold`}>Front-End Enthusiast</span>.</p>
            </XRotateWrapper>

            <div className="flex flex-col gap-4 w-1/2 max-[1200px]:w-[60%] max-[1080px]:w-3/4 max-[800px]:w-full tracking-wider text-[16px] leading-[26px] max-[500px]:text-[13px] max-[500px]:leading-[22px] font-light text-gray1 pb-8 max-[800px]:pb-6">
                <XRotateWrapper duration={0.25} delay={0.75}>
                    <p>{intro}</p>
                </XRotateWrapper>

                <XRotateWrapper duration={0.25} delay={1}>
                    <p>{intro2}</p>
                </XRotateWrapper>
            </div>

            <LeftToPositionWrapper delay={1.25} className={`${josefinSans.className} tracking-wider relative w-fit rounded-md px-6 max-[800px]:px-4 pt-4 max-[800px]:pt-[14px] pb-3 max-[800px]:pb-[10px] text-[16px] leading-[22px] max-[800px]:text-[14px] max-[800px]:leading-5 font-semibold text-neon border-2 border-neon bg-transparent overflow-hidden group`}>
                <Link href='https://drive.google.com/file/d/1UxYOgZ_jBab6nMvI8E7di0ciec4ZJ3Kg/view?usp=sharing' target="_blank" >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                        Check out my resume!
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                </Link>
            </LeftToPositionWrapper>
        </div>
    );
}
