import SectionTitle from "./SectionTitle";
import { projects } from "@/constants/lists";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <div id='projects' className="flex flex-col gap-12 pt-32 mx-28">
            <SectionTitle 
                title={'Projects'} 
                index={4} 
            />

            <div className="flex flex-col gap-20">
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
