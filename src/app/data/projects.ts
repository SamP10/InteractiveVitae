import { ISkill, SKILLS } from './skills';

export interface IProject {
    id: number;
    name: string;
    description: string | null;
    languages: ISkill[];
    githubUrl: string;
    dates: {
        start: string;
        end: string | null;
    };
    featured?: boolean;
}

export const projects: IProject[] = [
    {
        id: 1,
        name: 'InteractiveVitae',
        description: 'A interactive curriculum vitae to be deployed onto a website',
        languages: [SKILLS.TYPESCRIPT, SKILLS.REACT, SKILLS.TAILWIND],
        githubUrl: 'https://github.com/SamP10/InteractiveVitae',
        dates: {start: '2024', end: null},
        featured: true
    },
    {
        id: 2,
        name: 'PokemonCardSim',
        description:
            'A Pokemon card pack opening simulator using TSC APIs for getting cards developed for iOS',
        languages: [SKILLS.SWIFT],
        dates: {start: '2024', end: '2024'},
        githubUrl: 'https://github.com/SamP10/PokemonCardSim',
        featured: true
    },
    {
        id: 3,
        name: 'Greensoft',
        description: 'A sleuth of websites, designed for selling my website building services. Designed to be a small business for myself straight after university.',
        languages: [SKILLS.PHP, SKILLS.LARAVEL],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/Greensoft',
        featured: true
    },
        {
        id: 4,
        name: 'MSc Project',
        description: 'A Python based packet sniffer and Python notebooks utilising machine learning to detect possible cyber attacks on a network. Completed as part of my MSc in Artificial Intelligence.',
        languages: [SKILLS.PYTHON, SKILLS.NOTEBOOKS, SKILLS.SCIKIT_LEARN, SKILLS.TENSORFLOW],
        dates: {start: '2022', end: '2022'},
        githubUrl: 'https://github.com/SamP10/MSc_Project'
    },
    {
        id: 5,
        name: 'BlackJackCSharpProject',
        description: 'A console based blackjack game developed in C# as part of my C# online Microsoft Qualification.',
        languages: [SKILLS.CSHARP],
        dates: {start: '2023', end: '2023'},
        githubUrl: 'https://github.com/SamP10/BlackJackCSharpProject'
    },
    {
        id: 6,
        name: 'VulnerableDockerfile',
        description: 'A Vulnerable DOCKER for containerizing a university business, demonstrating a known CVE in Dockerfiles. Completed as part of my university dissertation.',
        languages: [SKILLS.DOCKER],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/VulnerableDockerfile'
    },
    {
        id: 7,
        name: 'UniCypherGraph',
        description: 'A Neo4j graph outlining aspects of a university business structure. Outlining vulnerabilities and possible attack vectors. Completed as part of my university dissertation.',
        languages: [SKILLS.NEO4J, SKILLS.CYPHER],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/UniCypherGraph'
    },
    {
        id: 8,
        name: 'DSALabs',
        description: 'Data Structure and Algorithms labs - Manchester Met 2021',
        languages: [SKILLS.CSHARP],
        dates: {start: '2021', end: '2022'},
        githubUrl: 'https://github.com/SamP10/DSALabs'
    },
    {
        id: 9,
        name: 'BetDocker',
        description:
            'A Docker and docker compose orchestration to setup a gambling system and website using Laravel. Fitted with vulnerabilites such as a misconfigured SSH server and a FTP server. Completed as part of my university dissertation.',
        languages: [SKILLS.DOCKER],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/BetDocker'
    },
    {
        id: 10,
        name: '24.7Cypher',
        description: 'A Neo4j graph database and Cypher queries to simulate a 24/7 Gambling website business. Outlining possible attack vectors within the system and exploitable vectors through social engineering. Completed as part of my university dissertation.',
        languages: [SKILLS.NEO4J, SKILLS.CYPHER],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/24.7Cypher'
    },
    {
        id: 11,
        name: 'LaravelBet',
        description: 'A Laravel online betting application. Completed as part of my university dissertation.',
        languages: [SKILLS.PHP, SKILLS.LARAVEL],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/LaravelBet'
    },
    {
        id: 12,
        name: 'UniVulnerableWebsite',
        description: 'A vulnerable website built for a university. Demonstrates common vulnerabilities such as SQL injection and XSS. Completed as part of my university dissertation.',
        languages: [SKILLS.JS, SKILLS.HTML, SKILLS.CSS, SKILLS.BOOTSTRAP],
        dates: {start: '2021', end: '2021'},
        githubUrl: 'https://github.com/SamP10/UniVulnerableWebsite'
    }
];
