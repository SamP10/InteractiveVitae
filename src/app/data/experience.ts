import { ISkill, SKILLS } from './skills';

export type TimelineCategory = 'work' | 'project' | 'education';

export interface ITimelineEntry {
    id: number;
    category: TimelineCategory;
    title: string;
    subtitle: string;
    dateStart: string;
    dateEnd: string | null;
    summary: string;
    achievements: string[];
    technologies?: ISkill[];
    link?: string;
    featured?: boolean;
}

export const experienceData: ITimelineEntry[] = [
    {
        id: 1,
        category: 'project',
        title: 'Interactive Vitae',
        subtitle: 'Personal Project',
        dateStart: '2024',
        dateEnd: null,
        summary:
            'A React interactive CV utilizing Matter JS physics engine with plans to deploy a Llama 3 model for interactive Q&A.',
        achievements: [
            'Designed a React interactive CV with physics-based animations',
            'Utilizing Matter JS physics engine to generate animations',
            'Planning to deploy a Llama 3 model with persona of my experiences for interactive questions'
        ],
        technologies: [SKILLS.REACT, SKILLS.NEXTJS, SKILLS.TYPESCRIPT, SKILLS.TAILWIND, SKILLS.MATTERJS],
        link: 'https://github.com/SamP10',
        featured: true
    },
    {
        id: 2,
        category: 'project',
        title: 'Pokemon iOS Card Pack Simulator',
        subtitle: 'iOS App',
        dateStart: '2024',
        dateEnd: '2024',
        summary:
            'iOS application that makes REST API callouts to TCGP official website to simulate card pack openings.',
        achievements: [
            'Architected an app making REST API callouts to TCGP (The Card Game Pokemon) official website',
            'Allows users to select a card set and generates a random pack of cards',
            'Cards are added to a virtual collection'
        ],
        technologies: [SKILLS.SWIFT, SKILLS.SWIFTUI, SKILLS.REST_APIS],
        link: 'https://github.com/SamP10',
        featured: true
    },
    {
        id: 3,
        category: 'project',
        title: 'Titanic Kaggle Prediction',
        subtitle: 'ML Competition',
        dateStart: '2024',
        dateEnd: '2024',
        summary:
            'Kaggle competition submission using Sklearn and TensorFlow to predict Titanic survival rates.',
        achievements: [
            'Participated in Kaggle competition to predict survival rates based on Titanic dataset',
            'Used Scikit-learn and TensorFlow to create and train prediction models',
            'Collaborated with a friend on feature engineering and model optimization'
        ],
        technologies: [SKILLS.PYTHON, SKILLS.SCIKIT_LEARN, SKILLS.TENSORFLOW, SKILLS.PANDAS]
    },
    {
        id: 4,
        category: 'project',
        title: 'AI-Powered Intrusion Detection System',
        subtitle: 'MSc Dissertation',
        dateStart: '2023',
        dateEnd: '2023',
        summary:
            'Used Docker and web stack to simulate attacks and train an AI model for intrusion detection.',
        achievements: [
            'Simulated attacks on web interfaces including FTP servers, HTTP servers, and websites',
            'Built custom applications with SQL injection vulnerabilities for training data',
            'Achieved 79% accuracy on test data for detecting intrusions'
        ],
        technologies: [SKILLS.PYTHON, SKILLS.DOCKER, SKILLS.TENSORFLOW, SKILLS.KERAS, SKILLS.SQL],
        featured: true
    },
    {
        id: 5,
        category: 'project',
        title: 'Bulk Data Loader - Certinia',
        subtitle: 'Developer Tool',
        dateStart: '2022',
        dateEnd: null,
        summary: "CLI tool interacting with Salesforce's Bulk API to deploy large volumes of test data.",
        achievements: [
            "Developed a CLI tool which interacted with Salesforce's Bulk API",
            'Enables deployment of large volumes of test data to developer sandboxes',
            'Used internally to speed up development workflows'
        ],
        technologies: [SKILLS.NODEJS, SKILLS.TYPESCRIPT, SKILLS.SALESFORCE_BULK_API]
    },
        {
        id: 6,
        category: 'work',
        title: 'Software Engineer',
        subtitle: 'Certinia',
        dateStart: '2022',
        dateEnd: null,
        summary:
            'Detail-oriented software engineer driving complex projects with focus on AI features, developer productivity, and customer satisfaction.',
        achievements: [
            'Played an integral role in achieving team objectives by completing over 500 user stories and 100+ Epics, consistently delivering high-quality features',
            'Spearheaded the development of key AI features for a CPQ product, resulting in a 10% increase in customer deals moving from prospect to adoption',
            'Worked closely with Product Management, UX, and content teams to ensure adherence to over 100 designs and specifications',
            'Proactively resolved customer issues, collaborating with Support Engineers to close 70% of the product\'s bugs for stakeholders like IBM and Google',
            'Developed internal tools using TypeScript, distributed across products, increasing developer productivity by 5% and improving milestone completion time by 7%',
            'Mentored graduate engineers, supporting their learning and skill development through regular meetings and pair programming',
            'Applied software design principles and design patterns to create reusable, efficient code, leading to a 23% reduction in code execution time',
            'Practiced test driven development'
        ],
        technologies: [SKILLS.TYPESCRIPT, SKILLS.SALESFORCE, SKILLS.APEX, SKILLS.LWC, SKILLS.REST_APIS],
        featured: true
    },
    {
        id: 7,
        category: 'education',
        title: 'MSc Artificial Intelligence',
        subtitle: 'Manchester Metropolitan University',
        dateStart: '2021',
        dateEnd: '2022',
        summary: 'Graduated with Distinction. Focused on machine learning, neural networks, and AI applications.',
        achievements: [
            'Graduated with Distinction',
            'Dissertation: AI-powered Intrusion Detection System achieving 79% accuracy on test data'
        ],
        technologies: [SKILLS.PYTHON, SKILLS.TENSORFLOW, SKILLS.SCIKIT_LEARN, SKILLS.DOCKER],
        featured: true
    },
    {
        id: 8,
        category: 'project',
        title: 'Docker Vulnerability Research',
        subtitle: 'BSc Dissertation',
        dateStart: '2021',
        dateEnd: '2021',
        summary:
            'Security research on Docker container escape vulnerabilities, focusing on CVE-2019-5736.',
        achievements: [
            'Architected several Dockerfiles with known vulnerability versions',
            'Focused on CVE-2019-5736, a known Docker container escape vulnerability',
            'Created custom web applications with XSS and SQL injection vulnerabilities',
            'Featured on Episode 50 of Compromising Positions podcast'
        ],
        technologies: [SKILLS.DOCKER, SKILLS.LARAVEL, SKILLS.PYTHON, SKILLS.LINUX]
    },
    {
        id: 9,
        category: 'education',
        title: 'BSc Computer Forensics & Security',
        subtitle: 'Leeds Beckett University',
        dateStart: '2018',
        dateEnd: '2021',
        summary:
            'Graduated with First Class Honours. Specialized in digital forensics, cybersecurity, and secure software development.',
        achievements: [
            'Graduated with First Class Honours',
            'Dissertation: Docker container vulnerability analysis focusing on CVE-2019-5736',
            'Featured on Episode 50 of Compromising Positions podcast for security research'
        ],
        technologies: [SKILLS.PYTHON, SKILLS.JAVA, SKILLS.DOCKER, SKILLS.LARAVEL, SKILLS.SQL]
    },
    {
        id: 10,
        category: 'work',
        title: 'Team Leader - Wetherspoons',
        subtitle: 'Wetherspoons',
        dateStart: '2016',
        dateEnd: '2022',
        summary:
            'Customer service and team leadership role in a fast-paced pub environment, ensuring high standards of service and operational efficiency.',
        achievements: [
            'Awards for highest sales within the Lancashire region during 2019 and 2020',
            'Maintained a food hygiene rating of 5 for the venue during tenure',
            'Worked across various departments including bar, kitchen, and floor service to ensure smooth operations',
            'Led a team of up to 15 staff members during shifts, ensuring excellent customer service and efficient operations',
            'Implemented training sessions for new staff, focusing on customer service skills and company policies'
        ]
    }
];

export const categoryInfo: Record<
    TimelineCategory,
    { label: string; color: string; bgColor: string }
> = {
    work: { label: 'Work', color: 'text-amber', bgColor: 'bg-amber' },
    project: { label: 'Project', color: 'text-slate', bgColor: 'bg-slate' },
    education: { label: 'Education', color: 'text-teal', bgColor: 'bg-teal' }
};
