import { josefinSans } from "@/app/_lib/fonts";
import { LeftToPositionWrapper, XRotateWrapper } from "@/app/_lib/FramerMotionWrappers";
import { useAppSelector } from "@/app/_lib/store";
import Link from "next/link";

export default function ContactMe() {
    const language = useAppSelector(state => state.app.language);
    
    type Translations = {
        [key: string]: {
            top: string;
            intro: string;
            buttonText: string;
        };
    };

    const translations: Translations = {
        en: {
            top: "Get In Touch",
            intro: "I'm actively seeking freelance opportunities that challenge my skills and creativity. However, if you have any other requests or questions, don't hesitate to reach out—I'd be happy to discuss how I can assist you!",
            buttonText: "Say Hello"
        },
        es: {
            top: "Contáctame",
            intro: "Estoy buscando activamente oportunidades freelance que desafíen mis habilidades y creatividad. Sin embargo, si tienes alguna otra solicitud o pregunta, no dudes en contactarme; ¡estaré encantado de ayudarte!",
            buttonText: "Salude"
        }
    }

    return (
        <div id='contact-me' className="flex flex-col items-center gap-12 max-[1152px]:gap-10 max-[800px]:gap-8 py-44 mx-48 max-[1200px]:mx-32 max-[1024px]:mx-20 max-[800px]:mx-0">
            <div className="w-full flex flex-col items-center gap-4 max-[800px]:gap-3">
                <XRotateWrapper duration={0.25}>
                    <h1 className={`${josefinSans.className} tracking-tight text-almostWhite text-[60px] leading-[68px] max-[800px]:text-[46px] max-[800px]:leading-[54px] max-[500px]:text-[32px] max-[500px]:leading-[46px] font-bold`}>
                        {translations[language].top}
                    </h1>
                </XRotateWrapper>

                <XRotateWrapper duration={0.25} delay={0.25} className="flex flex-col">
                    <p className="mx-auto text-gray1 w-3/4 max-[800px]:w-full text-center text-[16px] leading-[26px] max-[500px]:text-[13px] max-[500px]:leading-[22px] tracking-wider font-light">
                        {translations[language].intro}
                    </p>
                </XRotateWrapper>
            </div>

            <LeftToPositionWrapper delay={0.5} className={`${josefinSans.className} tracking-wider relative w-fit rounded-md px-6 max-[800px]:px-4 pt-4 max-[800px]:pt-[14px] pb-3 max-[800px]:pb-[10px] text-[16px] leading-[22px] max-[800px]:text-[14px] max-[800px]:leading-5 font-semibold text-neon border-2 border-neon bg-transparent overflow-hidden group`}>
                <Link href='mailto:priyanshusharma0326@gmail.com'>
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                        {translations[language].buttonText}
                    </span>
                    <span className="absolute inset-0 w-[calc(100%+2px)] h-full bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                </Link>
            </LeftToPositionWrapper> 
        </div>
    );
}
