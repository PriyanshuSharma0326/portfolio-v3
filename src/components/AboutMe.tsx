import { LeftToPositionWrapper, XRotateWrapper } from "@/app/_lib/FramerMotionWrappers";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { useAppSelector } from "@/app/_lib/store";

export default function AboutMe() {
    const language = useAppSelector(state => state.app.language);

    type Translations = {
        [key: string]: {
            intro: string;
            intro2: string;
        };
    };

    const translations: Translations = {
        en: {
            intro: "Heyy! I'm Priyanshu, and I craft digital experiences that are both functional and delightful. Passionate about the fusion of design and technology, I thrive on building dynamic web apps, optimizing performance, and exploring the latest frontend tools to bring ideas to life.",
            intro2: "Beyond the web, I'm driven by the ever-evolving world of technology. I enjoy tackling complex problems, sharpening my problem-solving skills, and diving into cloud technologies to expand my expertise."
        },
        es: {
            intro: "¡Holaa! Soy Priyanshu, y yo creo experiencias digitales que son a la vez funcionales y exquisitas. Apasionado por la fusión del diseño y la tecnología, me encanta crear aplicaciones web dinámicas, optimizar el rendimiento y explorar las últimas herramientas de frontend para dar vida a las ideas.",
            intro2: "Más allá de la web, me motiva el mundo de la tecnología, en constante evolución. Disfruto abordar problemas complejos, perfeccionar mis habilidades de resolución de problemas y sumergirme en tecnologías de la nube para ampliar mi experiencia."
        },
        hi: {
            intro: "नमस्ते! मैं प्रियंशु हूँ और मैं ऐसे डिजिटल अनुभव बनाता हूँ जो उपयोगी होने के साथ-साथ देखने में भी अच्छे हों। डिज़ाइन और तकनीक के मेल से मुझे काम करना पसंद है। मुझे डायनेमिक वेब ऐप्स बनाना, उनका प्रदर्शन बेहतर करना और नए-नए फ्रंटएंड टूल्स सीखकर विचारों को हकीकत में बदलना अच्छा लगता है।",
            intro2: "वेब से बाहर भी, बदलती हुई तकनीक की दुनिया मुझे प्रेरित करती है। मुझे कठिन समस्याओं को हल करना, अपनी समस्या-समाधान क्षमता को बेहतर बनाना और क्लाउड तकनीक सीखकर अपनी विशेषज्ञता बढ़ाना पसंद है।"
        }
    }

    return (
        <div id='about-me' className={"flex flex-col gap-12 pt-36 max-[600px]:pt-28 mx-16 max-[1280px]:mx-12 max-[1024px]:mx-8 max-[800px]:mx-0"}>
            <SectionTitle 
                title={
                language === 'en'
                    ? 'About Me'
                    : language === 'es'
                    ? 'Acerca de mí'
                    : 'मेरे बारे में'
                }
                index={1}
            />

            <div className="flex items-center gap-16 max-[1024px]:gap-[58px] max-[800px]:flex-col-reverse">
                <div className="w-[70%] max-[800px]:w-full text-[16px] leading-[26px] max-[500px]:text-[13px] max-[500px]:leading-[22px] tracking-wider font-light text-gray1 flex flex-col gap-4">
                    <LeftToPositionWrapper duration={0.25} delay={0.15}>
                        <p>{translations[language].intro}</p>
                    </LeftToPositionWrapper>

                    <LeftToPositionWrapper duration={0.25} delay={0.4}>
                        <p>{translations[language].intro2}</p>
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
