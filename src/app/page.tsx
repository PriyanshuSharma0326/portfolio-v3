'use client';

import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/Skills";
import { lato } from "@/lib/fonts";
import SectionWrapper from "@/lib/SectionWrapper";

export default function Home() {
    return (
        <div className={`${lato.className} flex flex-col mx-48`}>
            <div className="py-16"></div>

            <Introduction />

            <div className="flex flex-col">
                <SectionWrapper>
                    <AboutMe />
                </SectionWrapper>

                <SectionWrapper>
                    <Experience />
                </SectionWrapper>

                <SectionWrapper>
                    <SkillsSection />
                </SectionWrapper>

                <SectionWrapper>
                    <ProjectsSection />
                </SectionWrapper>

                <SectionWrapper>
                    <ContactMe />
                </SectionWrapper>
            </div>
        </div>
    );
}
