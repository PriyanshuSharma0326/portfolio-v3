import { ExperienceListType, ProjectsType, SkillsList } from "@/app/_lib/types";

const headerLinks = [
    {
        id: 'about-me',
        en: {
            title: 'About Me'
        },
        es: {
            title: 'Acerca de mí'
        },
        hi: {
            title: 'मेरे बारे में'
        }
    },
    {
        id: 'experience',
        en: {
            title: 'Experience'
        },
        es: {
            title: 'Vivencia'
        },
        hi: {
            title: 'अनुभव'
        }
    },
    {
        id: 'skills',
        en: {
            title: 'Skills'
        },
        es: {
            title: 'Destrazas'
        },
        hi: {
            title: 'कौशल'
        }
    },
    {
        id: 'projects',
        en: {
            title: 'Projects'
        },
        es: {
            title: 'Proyectos'
        },
        hi: {
            title: 'प्रोजेक्ट्स'
        }
    },
    {
        id: 'contact-me',
        en: {
            title: 'Contact Me'
        },
        es: {
            title: 'Contáctame'
        },
        hi: {
            title: 'संपर्क करें'
        },
    },
]

const experienceList: ExperienceListType = [
    {
        id: 0,
        en: {
            role: "Front End Developer",
            time: "April 2024 - June 2025",
            organisation: "Hyprcom",
            description: [
                "Develop intuitive, high-performance web applications, focusing on seamless user experiences and efficient workflows.",
                "Collaborate with backend teams to integrate APIs, enhance UI interactions, and refine product functionality.",
                "Lead the development of key platform features, improving usability and streamlining content management.",
                "Optimize web performance through modern frontend techniques, ensuring fast, responsive, and accessible applications.",
                "Work closely with designers, product managers, and engineers to bring ideas to life and create impactful digital experiences."
            ]
        },
        es: {
            role: "Desarrollador Front End",
            time: "Abril 2024 - Junio 2025",
            organisation: "Hyprcom",
            description: [
                "Desarrollar aplicaciones web intuitivas y de alto rendimiento, centrándose en experiencias de usuario fluidas y flujos de trabajo eficientes.",
                "Colaborar con equipos de backend para integrar APIs, mejorar las interacciones de la interfaz de usuario y perfeccionar la funcionalidad del producto.",
                "Liderar el desarrollo de funciones clave de la plataforma, mejorando la usabilidad y optimizando la gestión de contenidos.",
                "Optimizar el rendimiento web mediante técnicas modernas de frontend, garantizando aplicaciones rápidas, receptivas y accesibles.",
                "Trabajar en estrecha colaboración con diseñadores, gestores de producto e ingenieros para dar vida a las ideas y crear experiencias digitales impactantes."
            ]
        },
        hi: {
            role: "फ्रंट-एंड डेवलपर",
            time: "अप्रैल 2024 - जून 2025",
            organisation: "हाइपरकॉम",
            description: [
                "सुगम और तेज़ वेब एप्लिकेशन बनाए, जो उपयोगकर्ता अनुभव को सहज और प्रभावी बनाते हैं।",
                "बैकएंड टीम के साथ मिलकर एपीआई जोड़े, यूआई इंटरैक्शन सुधारे गए और उत्पाद की कार्यक्षमता बढ़ाई गई।",
                "मुख्य प्लेटफ़ॉर्म फीचर्स का डेवलपमेंट किया, जिससे उपयोगिता बेहतर हुई और सामग्री प्रबंधन सरल हुआ।",
                "आधुनिक फ्रंटएंड तकनीकों का उपयोग कर वेब प्रदर्शन को बेहतर बनाया, ताकि एप्लिकेशन तेज़, उत्तरदायी और पहुँच योग्य हों।",
                "डिज़ाइनर्स, प्रोडक्ट मैनेजर्स और इंजीनियर्स के साथ मिलकर विचारों को वास्तविकता में बदला और प्रभावशाली डिजिटल अनुभव बनाए।"
            ]
        }
    },
    {
        id: 1,
        en: {
            role: "ReactJS Developer",
            time: "June 2025 - Present",
            organisation: "branchX",
            description: [
                "Build and refine advanced frontend features for a fast-evolving platform.",
                "Work closely with product and design teams to deliver high-quality user experiences.",
                "Implement scalable solutions that support continuous growth and new functionalities.",
                "Contribute to code quality through reviews, testing, and best practices.",
                "Collaborate in a dynamic environment to ship impactful updates on tight schedules."
            ]
        },
        es: {
            role: "Desarrollador de ReactJS",
            time: "Junio 2025 - Presente",
            organisation: "branchX",
            description: [
                "Desarrollar y perfeccionar funciones avanzadas de frontend para una plataforma en constante evolución.",
                "Trabajar estrechamente con los equipos de producto y diseño para ofrecer experiencias de usuario de alta calidad.",
                "Implementar soluciones escalables que respalden el crecimiento continuo y nuevas funcionalidades.",
                "Contribuir a la calidad del código mediante revisiones, pruebas y buenas prácticas.",
                "Colaborar en un entorno dinámico para lanzar actualizaciones impactantes en plazos ajustados."
            ]
        },
        hi: {
            role: "ReactJS डेवलपर",
            time: "जून 2025 - वर्तमान",
            organisation: "ब्रांच-एक्स",
            description: [
                "तेज़ी से बढ़ते प्लेटफ़ॉर्म के लिए उन्नत फ्रंटएंड फीचर्स बनाना और सुधारना।",
                "प्रोडक्ट और डिज़ाइन टीम के साथ मिलकर उच्च गुणवत्ता वाले उपयोगकर्ता अनुभव देना।",
                "ऐसी स्केलेबल सॉल्यूशन्स लागू करना जो सतत विकास और नई सुविधाओं का समर्थन करें।",
                "कोड की गुणवत्ता में योगदान देना, रिव्यूज़, टेस्टिंग और सर्वोत्तम प्रथाओं के माध्यम से।",
                "गतिशील वातावरण में मिलकर समय पर महत्वपूर्ण अपडेट्स देना।"
            ]
        }
    }
];

const skillsList: SkillsList[] = [
    {
        en: {
            title: 'Programming Skills'
        },
        es: {
            title: 'Habilidades de programación'
        },
        hi: {
            title: 'प्रोग्रामिंग स्किल्स'
        },
        skills: [
            'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
            'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
            'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white',
            'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
            'https://img.shields.io/badge/sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white',
        ]
    },
    {
        en: {
            title: 'Frameworks & Libraries'
        },
        es: {
            title: 'Marcos y bibliotecas'
        },
        hi: {
            title: 'फ्रेमवर्क्स और लाइब्रेरीज़'
        },
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
        en: {
            title: 'Databases'
        },
        es: {
            title: 'Bases de datos'
        },
        hi: {
            title: 'डेटाबेस'
        },
        skills: [
            'https://img.shields.io/badge/MongoDB-%234EA94B.svg?style=for-the-badge&logo=mongodb&logoColor=white',
            'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase',
            'https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white',

        ]
    },
    {
        en: {
            title: 'Version Controls & OSs'
        },
        es: {
            title: 'Control de versiones y sistemas operativos'
        },
        hi: {
            title: 'वर्ज़न कंट्रोल्स और ऑपरेटिंग सिस्टम्स'
        },
        skills: [
            'https://img.shields.io/badge/GIT-%23E44C30.svg?style=for-the-badge&logo=git&logoColor=white',
            'https://img.shields.io/badge/GitHub-%23100000.svg?style=for-the-badge&logo=github&logoColor=white',
        ]
    },
    {
        en: {
            title: 'Hosting/SaaS'
        },
        es: {
            title: 'Alojamiento web/SaaS'
        },
        hi: {
            title: 'होस्टिंग/सेवा के रूप में सॉफ़्टवेयर'
        },
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
        project_title: {
            en: 'Spotify Clone',
            es: 'Clon de Spotify',
            hi: 'स्पॉटिफ़ाई क्लोन'
        },
        live_url: 'https://melofy-spotify-clone.vercel.app/',
        source_url: 'https://github.com/PriyanshuSharma0326/spotify-clone',
        description: {
            en: 'A Spotify clone using React and SASS for maintainable styling. Integrated Spotify API for seamless music playback, personalized playlists, and user authentication. Designed a responsive, user-friendly interface for cross-device accessibility.',
            es: 'Un clon de Spotify utilizando React y SASS para un estilo mantenible. Se integró la API de Spotify para una reproducción de música fluida, listas de reproducción personalizadas y autenticación de usuarios. Se diseñó una interfaz receptiva y fácil de usar para garantizar la accesibilidad en múltiples dispositivos.',
            hi: 'React और SASS का उपयोग करके बनाए गए स्पॉटिफ़ाई क्लोन में बनाए रखने योग्य स्टाइलिंग शामिल है। स्पॉटिफ़ाई एपीआई को जोड़कर संगीत प्लेबैक, व्यक्तिगत प्लेलिस्ट और उपयोगकर्ता प्रमाणीकरण सहज बनाया गया। विभिन्न उपकरणों पर पहुँच सुनिश्चित करने के लिए एक उत्तरदायी और उपयोगकर्ता-मित्र इंटरफ़ेस डिज़ाइन किया गया।'
        },
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
        project_title: {
            en: 'CircuitCart',
            es: 'CircuitCart',
            hi: 'सर्किटकार्ट'
        },
        live_url: 'https://circuit-cart.vercel.app/',
        source_url: 'https://github.com/PriyanshuSharma0326/electronics-store-react',
        description: {
            en: 'CircuitCart is your virtual electronics store, designed to make your shopping experience effortless and enjoyable. Explore various categories, find your favorite products, and add them to your cart with ease.',
            es: 'CircuitCart es tu tienda virtual de electrónica, diseñada para hacer que tu experiencia de compra sea sencilla y agradable. Explora diversas categorías, encuentra tus productos favoritos y agrégalos a tu carrito con facilidad.',
            hi: 'सर्किटकार्ट आपका वर्चुअल इलेक्ट्रॉनिक्स स्टोर है, जिसे आपकी खरीदारी को सहज और आनंददायक बनाने के लिए डिज़ाइन किया गया है। विभिन्न श्रेणियों को देखें, अपने पसंदीदा उत्पाद खोजें और उन्हें आसानी से अपने कार्ट में जोड़ें।'
        },
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
        project_title: {
            en: 'Telechat',
            es: 'Telechat',
            hi: 'टेलीचैट'
        },
        live_url: 'https://telechat-connect.vercel.app',
        source_url: 'https://github.com/PriyanshuSharma0326/telechat',
        description: {
            en: 'A real-time web-based chat application offering users an interactive communication platform that\'s fully responsive on all devices.',
            es: 'Una aplicación de chat web en tiempo real que ofrece a los usuarios una plataforma de comunicación interactiva, totalmente receptiva en todos los dispositivos.',
            hi: 'एक रियल-टाइम वेब-आधारित चैट एप्लिकेशन जो उपयोगकर्ताओं को एक इंटरएक्टिव संचार प्लेटफ़ॉर्म प्रदान करता है और सभी उपकरणों पर पूरी तरह रेस्पॉन्सिव है।'
        },
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
        project_title: {
            en: 'ReactReporter',
            es: 'ReactReporter',
            hi: 'रीऐक्टरिपोर्टर',
        },
        live_url: 'https://react-reporter-app.vercel.app/',
        source_url: 'https://github.com/PriyanshuSharma0326/react-news-app',
        description: {
            en: 'A responsive News Aggregator application with curated news articles fetched from the API.',
            es: 'Una aplicación de agregador de noticias responsiva con artículos de noticias seleccionados y obtenidos desde la API.',
            hi: 'एक रेस्पॉन्सिव न्यूज़ एग्रीगेटर एप्लिकेशन जिसमें एपीआई से प्राप्त क्यूरेटेड न्यूज़ आर्टिकल्स शामिल हैं।',
        },
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
        project_title: {
            en: 'Tic Tac Toe',
            es: 'Tres en raya',
            hi: 'टिक टैक टो'
        },
        live_url: 'https://priyanshusharma0326.github.io/tic-tac-toe/',
        source_url: 'https://github.com/PriyanshuSharma0326/tic-tac-toe',
        description: {
            en: 'The popular Tic Tac Toe game built on JavaScript. The game allows users to compete against the computer on a 3x3 grid.',
            es: 'El popular juego de Tres en raya desarrollado en JavaScript. Permite a los usuarios competir contra la computadora en una cuadrícula de 3x3.',
            hi: 'लोकप्रिय टिक टैक टो गेम, जो जावास्क्रिप्ट पर बनाया गया है। यह गेम उपयोगकर्ताओं को 3x3 ग्रिड पर कंप्यूटर के खिलाफ प्रतिस्पर्धा करने की अनुमति देता है।'
        },
        stack: [
            'HTML',
            'CSS',
            'JavaScript',
        ]
    },
    {
        id: 6,
        project_image: 'https://raw.githubusercontent.com/PriyanshuSharma0326/pomodoro-clock/main/design/desktop-design.png',
        project_title: {
            en: 'Pomodoro Clock',
            es: 'Reloj Pomodoro',
            hi: 'पोमोडोरो घड़ी',
        },
        live_url: 'https://priyanshusharma0326.github.io/pomodoro-clock/',
        source_url: 'https://github.com/PriyanshuSharma0326/pomodoro-clock',
        description: {
            en: 'Pomodoro application helps users manage their time using the Pomodoro Technique, a time management method developed by Francesco Cirillo.',
            es: 'La aplicación Pomodoro ayuda a los usuarios a gestionar su tiempo utilizando la Técnica Pomodoro, un método de gestión del tiempo desarrollado por Francesco Cirillo.',
            hi: 'पोमोडोरो एप्लिकेशन उपयोगकर्ताओं को पोमोडोरो तकनीक का उपयोग करके अपने समय का प्रबंधन करने में मदद करता है, जो फ्रांसेस्को सिरिल्लो द्वारा विकसित एक समय प्रबंधन विधि है।'
        },
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
