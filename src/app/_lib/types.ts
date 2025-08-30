export interface SkillsList {
    en: {
        title: string,
    }
    es: {
        title: string,
    }
    hi: {
        title: string,
    }
    skills: string[],
}

export interface LangEntry {
    role: string;
    time: string;
    organisation: string;
    description: string[];
    exp?: string;
}

export interface Experience {
    id: number;
    en: LangEntry;
    es: LangEntry;
    hi: LangEntry
}

export type ExperienceListType = Experience[];

export interface ProjectsType {
    id: number,
    project_image: string,
    project_title: {
        en: string,
        es: string,
        hi: string,
    },
    live_url: string,
    source_url: string,
    description: {
        en: string,
        es: string,
        hi: string,
    },
    stack: string[],
}

export interface ProjectCardProps {
    item: {
        project_image: string;
        project_title: {
            en: string,
            es: string,
            hi: string,
        };
        description: {
            en: string,
            es: string,
            hi: string,
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
