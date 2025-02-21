export interface SkillsList {
    title: string,
    skills: string[],
}

export interface ProjectsType {
    id: number,
    project_image: string,
    project_title: string,
    live_url: string,
    source_url: string,
    description: string,
    stack: string[],
}

export interface XRotateWrapperProps {
    children?: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export interface LeftToPositionWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export interface SectionrapperProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}

export interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string,
}
