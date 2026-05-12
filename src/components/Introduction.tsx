import { josefinSans, readexPro, syne } from "@/app/_lib/fonts";
import { LeftToPositionWrapper, XRotateWrapper } from "@/app/_lib/FramerMotionWrappers";
import Link from "next/link";
import { useAppSelector } from "@/app/_lib/store";
import { ReactNode } from "react";
import { RESUME_LINK } from "@/constants/lists";

export default function Introduction() {
    const language = useAppSelector(state => state.app.language);

    type Translations = {
        [key: string]: {
            greeting: string;
            role: ReactNode;
            intro: string;
            intro2: string;
            buttonText: string;
        };
    };

    const translations: Translations = {
        en: {
            greeting: "Hi, I'm",
            role: (
                <>
                    A <span>Frontend Developer</span> crafting{' '}
                    <span className={`${readexPro.className} text-neon font-bold`}>
                        fast, polished web experiences
                    </span>
                </>
            ),
            intro: "I'm a frontend developer passionate about crafting high-performance web applications that combine clean design, smooth user experiences, and scalable architecture. I specialize in React ecosystems, responsive interfaces, and building products that feel fast and intuitive.",
            intro2: "Whether it's dashboards, ecommerce platforms, or collaborative tools, I enjoy turning complex ideas into polished digital experiences users genuinely enjoy interacting with.",
            buttonText: 'Check out my resume!'
        },

        es: {
            greeting: "Hola, soy",
            role: (
                <>
                    Un <span>Desarrollador Frontend</span> creando{' '}
                    <span className={`${readexPro.className} text-neon font-bold`}>
                        experiencias web rápidas y pulidas
                    </span>
                </>
            ),
            intro: "Soy un desarrollador frontend apasionado por crear aplicaciones web de alto rendimiento que combinan diseño limpio, experiencias fluidas y arquitectura escalable. Me especializo en ecosistemas React, interfaces responsivas y productos rápidos e intuitivos.",
            intro2: "Ya sean paneles analíticos, plataformas de comercio electrónico o herramientas colaborativas, disfruto transformar ideas complejas en experiencias digitales pulidas y agradables de usar.",
            buttonText: '¡Mira mi currículum!'
        },

        hi: {
            greeting: "नमस्ते, मैं हूँ",
            role: (
                <>
                    एक <span>फ्रंटएंड डेवलपर</span> जो बनाता है{' '}
                    <span className={`${readexPro.className} text-neon font-bold`}>
                        तेज़ और बेहतरीन वेब अनुभव
                    </span>
                </>
            ),
            intro: "मैं एक फ्रंटएंड डेवलपर हूँ जिसे उच्च-प्रदर्शन वाले वेब एप्लिकेशन बनाना पसंद है, जहाँ साफ़ डिजाइन, सहज यूज़र एक्सपीरियंस और स्केलेबल आर्किटेक्चर एक साथ आते हैं। मेरी विशेषज्ञता React ecosystem, responsive interfaces और ऐसे प्रोडक्ट्स बनाने में है जो तेज़ और intuitive महसूस हों।",
            intro2: "चाहे वह analytics dashboards हों, ecommerce platforms हों या collaborative tools, मुझे जटिल विचारों को polished और engaging digital experiences में बदलना पसंद है।",
            buttonText: "मेरा रिज़्यूमे देखें!"
        }
    };

    return (
        <div className="flex flex-col">
            <XRotateWrapper duration={0.5}>
                <p className="tracking-widest text-[16px] leading-[22px] max-[800px]:text-[14px] max-[800px]:leading-5 font-normal text-neon pb-4 max-[1024px]:pb-3 max-[500px]:pb-2">
                    {translations[language].greeting}
                </p>
            </XRotateWrapper>

            <XRotateWrapper duration={0.5} delay={0.15}>
                <h1 className={`${syne.className} -ml-1 max-[800px]:-ml-[3px] tracking-tight text-almostWhite text-[60px] leading-[68px] max-[800px]:text-[46px] max-[800px]:leading-[54px] max-[500px]:text-[32px] max-[500px]:leading-[46px] font-medium pb-4 max-[1024px]:pb-3 max-[800px]:pb-2`}>
                    {language === 'hi' ? 'प्रियंशु शर्मा' : 'Priyanshu Sharma'}
                </h1>
            </XRotateWrapper>

            <XRotateWrapper duration={0.5} delay={0.3}>
                <p className={`${readexPro.className} tracking-wide text-gray2 text-[44px] leading-[52px] max-[1200px]:text-[36px] max-[1200px]:leading-[44px] max-[800px]:text-[26px] max-[800px]:leading-[34px] max-[500px]:text-[20px] max-[500px]:leading-[30px] font-medium pb-8 max-[800px]:pb-6 max-[500px]:pb-4`}>
                    {translations[language].role}
                </p>
            </XRotateWrapper>

            <div className="flex flex-col gap-4 w-1/2 max-[1200px]:w-[60%] max-[1080px]:w-3/4 max-[800px]:w-full tracking-wider text-[16px] leading-[26px] max-[500px]:text-[13px] max-[500px]:leading-[22px] font-light text-gray2 pb-8 max-[800px]:pb-6">
                <XRotateWrapper duration={0.5} delay={0.45}>
                    <p>{translations[language].intro}</p>
                </XRotateWrapper>

                <XRotateWrapper duration={0.5} delay={0.6}>
                    <p>{translations[language].intro2}</p>
                </XRotateWrapper>
            </div>

            <LeftToPositionWrapper delay={0.75} className={`${josefinSans.className} tracking-wider relative w-fit rounded-md px-6 max-[800px]:px-4 pt-4 max-[800px]:pt-[14px] pb-3 max-[800px]:pb-[10px] text-[16px] leading-[22px] max-[800px]:text-[14px] max-[800px]:leading-5 font-semibold text-neon border-2 border-neon bg-transparent overflow-hidden group`}>
                <Link href={RESUME_LINK} target="_blank">
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                        {translations[language].buttonText}
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                </Link>
            </LeftToPositionWrapper>
        </div>
    );
}
