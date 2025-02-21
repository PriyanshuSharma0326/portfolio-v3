import SectionTitle from "./SectionTitle";
import { projects } from "@/constants/lists";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <div id='projects' className="flex flex-col gap-12 max-[1152px]:gap-10 max-[800px]:gap-8 pt-36 mx-28 max-[1280px]:mx-20 max-[1152px]:mx-14 max-[1024px]:mx-0">
            <SectionTitle 
                title={'Projects'} 
                index={4} 
            />

            <div className="flex flex-col gap-20 max-[1152px]:gap-28 max-[800px]:gap-6">
                {projects.map(project => {
                    return (
                        <ProjectCard 
                            key={project.id} 
                            item={project} 
                        />
                    )
                })}
            </div>
        </div>
    );
}
