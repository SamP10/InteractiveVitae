export type TimelineCategory = 'work' | 'project' | 'education';

export interface TimelineEntry {
    id: number;
    category: TimelineCategory;
    title: string;
    subtitle: string;
    dateStart: string;
    dateEnd: string | null;
    summary: string;
    achievements: string[];
    technologies?: string[];
    link?: string;
}

export const experienceData: TimelineEntry[] = [
    // Work Experience
    {
        id: 1,
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
        technologies: ['TypeScript', 'Salesforce', 'Apex', 'LWC', 'REST APIs']
    },

    // Education
    {
        id: 2,
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
        technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Docker']
    },
    {
        id: 3,
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
        technologies: ['Python', 'Java', 'Docker', 'Laravel', 'SQL']
    },

    // Projects
    {
        id: 4,
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
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Matter.js'],
        link: 'https://github.com/SamP10'
    },
    {
        id: 5,
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
        technologies: ['Swift', 'SwiftUI', 'REST APIs'],
        link: 'https://github.com/SamP10'
    },
    {
        id: 6,
        category: 'project',
        title: 'Bulk Data Loader',
        subtitle: 'Developer Tool',
        dateStart: '2022',
        dateEnd: null,
        summary: "CLI tool interacting with Salesforce's Bulk API to deploy large volumes of test data.",
        achievements: [
            "Developed a CLI tool which interacted with Salesforce's Bulk API",
            'Enables deployment of large volumes of test data to developer sandboxes',
            'Used internally to speed up development workflows'
        ],
        technologies: ['Node.js', 'TypeScript', 'Salesforce Bulk API']
    },
    {
        id: 7,
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
        technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas']
    },
    {
        id: 8,
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
        technologies: ['Python', 'Docker', 'TensorFlow', 'Keras', 'SQL']
    },
    {
        id: 9,
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
        technologies: ['Docker', 'Laravel', 'Python', 'Linux']
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
