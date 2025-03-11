export interface SkillsList {
    en: {
        title: string,
    }
    es: {
        title: string,
    }
    skills: string[],
}

export interface experienceListType {
    en: string[],
    es: string[],
}

export interface ProjectsType {
    id: number,
    project_image: string,
    project_title: {
        en: string,
        es: string,
    },
    live_url: string,
    source_url: string,
    description: {
        en: string,
        es: string,
    },
    stack: string[],
}

export interface ProjectCardProps {
    item: {
        project_image: string;
        project_title: {
            en: string,
            es: string,
        };
        description: {
            en: string,
            es: string,
        };
        source_url: string,
        live_url: string,
        stack: string[];
    };
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

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
}

// App State
export interface AppState {
    menuOpen: boolean;
    language: string,
}
