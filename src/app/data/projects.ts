export interface Project {
    id: number;
    name: string;
    description: string | null;
    languages: ITechnologyStack[];
    githubUrl: string;
    dates: {
        start: string;
        end: string | null;
    };
    featured?: boolean;
}

interface ITechnologyStack {
    id: number;
    name: string;
    color: string;
}

export const PROGRAMMING_LANGUAGES: { [key: string]: ITechnologyStack } = {
    TYPESCRIPT: { id: 1, name: 'TypeScript', color: '#3178C6' },
    SWIFT: { id: 2, name: 'Swift', color: '#F05138' },
    PHP: { id: 3, name: 'PHP', color: '#777BB4' },
    CSHARP: { id: 4, name: 'C#', color: '#239120' },
    DOCKER: { id: 5, name: 'Dockerfile', color: '#006282ff' },
    CYPHER: { id: 6, name: 'Cypher', color: '#6B7280' },
    JS: { id: 7, name: 'JavaScript', color: '#F7DF1E' },
    HTML: { id: 8, name: 'HTML5', color: '#E34F26' },
    CSS: { id: 9, name: 'CSS', color: '#1572B6' },
    PYTHON: { id: 10, name: 'Python', color: '#3776AB' }
};

export const FRAMEWORKS : { [key: string]: ITechnologyStack } = {
    LARAVEL: { id: 111, name: 'Laravel', color: '#FF2D20' },
    REACT: { id: 112, name: 'React', color: '#61DAFB' },
    NEXTJS: { id: 113, name: 'Next.js', color: '#000000' },
    TAILWIND: { id: 114, name: 'TailwindCSS', color: '#06B6D4' },
    BOOTSTRAP: { id: 115, name: 'Bootstrap', color: '#7952B3' },
    NEO4J: { id: 116, name: 'Neo4j', color: '#008CC1' },
    NOTEBOOKS: { id: 117, name: 'Python Notebooks', color: '#F37626' },
    SCIKIT_LEARN: { id: 118, name: 'Scikit-learn', color: '#3499CD' },
    TENSORFLOW: { id: 119, name: 'TensorFlow', color: '#FF6F00' }
};

export const projects: Project[] = [
    {
        id: 1,
        name: 'InteractiveVitae',
        description: 'A interactive curriculum vitae to be deployed onto a website',
        languages: [
            PROGRAMMING_LANGUAGES.TYPESCRIPT,
            FRAMEWORKS.REACT,
            FRAMEWORKS.TAILWIND
        ],
        githubUrl: 'https://github.com/SamP10/InteractiveVitae',
        dates: {start: '2024', end: null},
        featured: true
    },
    {
        id: 2,
        name: 'PokemonCardSim',
        description:
            'A Pokemon card pack opening simulator using TSC APIs for getting cards developed for iOS',
        languages: [PROGRAMMING_LANGUAGES.SWIFT],
        dates: {start: '2024', end: '2024'},
        githubUrl: 'https://github.com/SamP10/PokemonCardSim',
        featured: true
    },
    {
        id: 3,
        name: 'Greensoft',
        description: 'A sleuth of websites, designed for selling my website building services. Designed to be a small business for myself straight after university.',
        languages: [PROGRAMMING_LANGUAGES.PHP, FRAMEWORKS.LARAVEL],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/Greensoft',
        featured: true
    },
        {
        id: 4,
        name: 'MSc Project',
        description: 'A Python based packet sniffer and Python notebooks utilising machine learning to detect possible cyber attacks on a network. Completed as part of my MSc in Artificial Intelligence.',
        languages: [PROGRAMMING_LANGUAGES.PYTHON, FRAMEWORKS.NOTEBOOKS, FRAMEWORKS.SCIKIT_LEARN, FRAMEWORKS.TENSORFLOW],
        dates: {start: '2022', end: '2022'},
        githubUrl: 'https://github.com/SamP10/MSc_Project'
    },
    {
        id: 5,
        name: 'BlackJackCSharpProject',
        description: 'A console based blackjack game developed in C# as part of my C# online Microsoft Qualification.',
        languages: [PROGRAMMING_LANGUAGES.CSHARP],
        dates: {start: '2023', end: '2023'},
        githubUrl: 'https://github.com/SamP10/BlackJackCSharpProject'
    },
    {
        id: 6,
        name: 'VulnerableDockerfile',
        description: 'A Vulnerable DOCKER for containerizing a university business, demonstrating a known CVE in Dockerfiles. Completed as part of my university dissertation.',
        languages: [PROGRAMMING_LANGUAGES.DOCKER],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/VulnerableDockerfile'
    },
    {
        id: 7,
        name: 'UniCypherGraph',
        description: 'A Neo4j graph outlining aspects of a university business structure. Outlining vulnerabilities and possible attack vectors. Completed as part of my university dissertation.',
        languages: [FRAMEWORKS.NEO4J, PROGRAMMING_LANGUAGES.CYPHER],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/UniCypherGraph'
    },
    {
        id: 8,
        name: 'DSALabs',
        description: 'Data Structure and Algorithms labs - Manchester Met 2021',
        languages: [PROGRAMMING_LANGUAGES.CSHARP],
        dates: {start: '2021', end: '2022'},
        githubUrl: 'https://github.com/SamP10/DSALabs'
    },
    {
        id: 9,
        name: 'BetDocker',
        description:
            'A Docker and docker compose orchestration to setup a gambling system and website using Laravel. Fitted with vulnerabilites such as a misconfigured SSH server and a FTP server. Completed as part of my university dissertation.',
        languages: [PROGRAMMING_LANGUAGES.DOCKER],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/BetDocker'
    },
    {
        id: 10,
        name: '24.7Cypher',
        description: 'A Neo4j graph database and Cypher queries to simulate a 24/7 Gambling website business. Outlining possible attack vectors within the system and exploitable vectors through social engineering. Completed as part of my university dissertation.',
        languages: [FRAMEWORKS.NEO4J, PROGRAMMING_LANGUAGES.CYPHER],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/24.7Cypher'
    },
    {
        id: 11,
        name: 'LaravelBet',
        description: 'A Laravel online betting application. Completed as part of my university dissertation.',
        languages: [PROGRAMMING_LANGUAGES.PHP, FRAMEWORKS.LARAVEL],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/LaravelBet'
    },
    {
        id: 12,
        name: 'UniVulnerableWebsite',
        description: 'A vulnerable website built for a university. Demonstrates common vulnerabilities such as SQL injection and XSS. Completed as part of my university dissertation.',
        languages: [PROGRAMMING_LANGUAGES.JS, PROGRAMMING_LANGUAGES.HTML, PROGRAMMING_LANGUAGES.CSS, FRAMEWORKS.BOOTSTRAP],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/UniVulnerableWebsite'
    }
];
