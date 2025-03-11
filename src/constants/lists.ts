import { ProjectsType, SkillsList } from "@/app/_lib/types";

const headerLinks = [
    { id: 'about-me', title: 'About Me' },
    { id: 'experience', title: 'Experience' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact-me', title: 'Contact Me' },
]

const experienceList: string[] = [
    "Develop intuitive, high-performance web applications, focusing on seamless user experiences and efficient workflows.",
    "Collaborate with backend teams to integrate APIs, enhance UI interactions, and refine product functionality.",
    "Lead the development of key platform features, improving usability and streamlining content management.",
    "Optimize web performance through modern frontend techniques, ensuring fast, responsive, and accessible applications.",
    "Work closely with designers, product managers, and engineers to bring ideas to life and create impactful digital experiences.",
]

const skillsList: SkillsList[] = [
    {
        title: 'Programming Skills',
        skills: [
            'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
            'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
            'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white',
            'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
            'https://img.shields.io/badge/sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white',
        ]
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
            'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
            'https://img.shields.io/badge/node.js-%236DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white',
            'https://img.shields.io/badge/React-%2320232A.svg?style=for-the-badge&logo=react&logoColor=61DAFB',
            'https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=F0F0F0',
            'https://img.shields.io/badge/React_Router-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white',
            'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
            'https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white',
            'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white',
            'https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white',
            'https://img.shields.io/badge/Material--UI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white',
        ]
    },
    {
        title: 'Databases',
        skills: [
            'https://img.shields.io/badge/MongoDB-%234EA94B.svg?style=for-the-badge&logo=mongodb&logoColor=white',
            'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase',
            'https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white',

        ]
    },
    {
        title: 'Version Controls & OSs',
        skills: [
            'https://img.shields.io/badge/GIT-%23E44C30.svg?style=for-the-badge&logo=git&logoColor=white',
            'https://img.shields.io/badge/GitHub-%23100000.svg?style=for-the-badge&logo=github&logoColor=white',
        ]
    },
    {
        title: 'Hosting/SaaS',
        skills: [
            'https://img.shields.io/badge/Heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white',
            'https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white',
            'https://img.shields.io/badge/Netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white',
            'https://img.shields.io/badge/Render-%23000000.svg?style=for-the-badge&logo=render&logoColor=white',
            'https://img.shields.io/badge/Github_Pages-%23000000.svg?style=for-the-badge&logo=github-pages&logoColor=white',
        ]
    }
];

const projects: ProjectsType[] = [
    {
        id: 1,
        project_image: 'https://raw.githubusercontent.com/PriyanshuSharma0326/spotify-clone/refs/heads/main/public/media/melofy-spotify-clone.vercel.app_.png',
        project_title: 'Spotify Clone',
        live_url: 'https://melofy-spotify-clone.vercel.app/',
        source_url: 'https://github.com/PriyanshuSharma0326/spotify-clone',
        description: 'A Spotify clone using React and SASS for maintainable styling. Integrated Spotify API for seamless music playback, personalized playlists, and user authentication. Designed a responsive, user-friendly interface for cross-device accessibility.',
        stack: [
            'React',
            'Spotify Web API',
            'SASS',
            'Axios',
            'React Router'
        ]
    },
    {
        id: 2,
        project_image: 'https://raw.githubusercontent.com/PriyanshuSharma0326/electronics-store-react/main/public/assets/desktop-siteshot.png',
        project_title: 'CircuitCart',
        live_url: 'https://circuit-cart.vercel.app/',
        source_url: 'https://github.com/PriyanshuSharma0326/electronics-store-react',
        description: 'CircuitCart is your virtual electronics store, designed to make your shopping experience effortless and enjoyable. Explore various categories, find your favorite products, and add them to your cart with ease.',
        stack: [
            'React',
            'ContextAPI',
            'SASS',
            'Firebase',
            'React Router'
        ]
    },
    {
        id: 3,
        project_image: 'https://raw.githubusercontent.com/PriyanshuSharma0326/telechat/main/public/media/desktop-siteshot.png',
        project_title: 'Telechat',
        live_url: 'https://telechat-connect.vercel.app',
        source_url: 'https://github.com/PriyanshuSharma0326/telechat',
        description: 'A real-time web-based chat application offering users an interactive communication platform that\'s fully responsive on all devices.',
        stack: [
            'React',
            'ContextAPI',
            'SASS',
            'MaterialUI',
            'Firebase',
            'React Router'
        ]
    },
    {
        id: 4,
        project_image: 'https://raw.githubusercontent.com/PriyanshuSharma0326/react-news-app/main/public/assets/desktop-siteshot.png',
        project_title: 'ReactReporter',
        live_url: 'https://react-reporter-app.vercel.app/',
        source_url: 'https://github.com/PriyanshuSharma0326/react-news-app',
        description: 'A responsive News Aggregator application with curated news articles fetched from the API.',
        stack: [
            'React',
            'Redux',
            'SASS',
            'NewsAPI',
            'Firebase',
            'React Router',
            'Axios'
        ]
    },
    {
        id: 5,
        project_image: 'https://raw.githubusercontent.com/PriyanshuSharma0326/tic-tac-toe/main/design/desktop-design.png',
        project_title: 'Tic Tac Toe',
        live_url: 'https://priyanshusharma0326.github.io/tic-tac-toe/',
        source_url: 'https://github.com/PriyanshuSharma0326/tic-tac-toe',
        description: 'The popular Tic Tac Toe game built on JavaScript. The game allows users to compete against the computer on a 3x3 grid.',
        stack: [
            'HTML',
            'CSS',
            'JavaScript',
        ]
    },
    {
        id: 6,
        project_image: 'https://raw.githubusercontent.com/PriyanshuSharma0326/pomodoro-clock/main/design/desktop-design.png',
        project_title: 'Pomodoro Clock',
        live_url: 'https://priyanshusharma0326.github.io/pomodoro-clock/',
        source_url: 'https://github.com/PriyanshuSharma0326/pomodoro-clock',
        description: 'Pomodoro application helps users manage their time using the Pomodoro Technique, a time management method developed by Francesco Cirillo.',
        stack: [
            'HTML',
            'CSS',
            'JavaScript',
        ]
    },
    {
        id: 7,
        project_image: 'https://raw.githubusercontent.com/PriyanshuSharma0326/expense-tracker/main/design/desktop-design.png',
        project_title: 'Expense Tracker',
        live_url: 'https://priyanshusharma0326.github.io/expense-tracker/',
        source_url: 'https://github.com/PriyanshuSharma0326/expense-tracker',
        description: 'This expense tracker application allows users to track their spendings.',
        stack: [
            'HTML',
            'CSS',
            'JavaScript',
        ]
    },
];

export {
    experienceList,
    skillsList,
    projects,
    headerLinks,
}
