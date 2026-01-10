export interface Project {
    id: number;
    name: string;
    description: string | null;
    language: string;
    languageColor: string;
    githubUrl: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        name: 'InteractiveVitae',
        description: 'A interactive curriculum vitae to be deployed onto a website',
        language: 'TypeScript',
        languageColor: '#3178C6',
        githubUrl: 'https://github.com/SamP10/InteractiveVitae',
        featured: true
    },
    {
        id: 2,
        name: 'PokemonCardSim',
        description: 'A Pokemon card pack opening simulator using TSC APIs for getting cards developed for iOS',
        language: 'Swift',
        languageColor: '#F05138',
        githubUrl: 'https://github.com/SamP10/PokemonCardSim',
        featured: true
    },
    {
        id: 3,
        name: 'BlackJackCSharpProject',
        description: null,
        language: 'C#',
        languageColor: '#239120',
        githubUrl: 'https://github.com/SamP10/BlackJackCSharpProject'
    },
    {
        id: 4,
        name: 'VulnerableDockerfile',
        description: 'A Vulnerable dockerfile for containerizing a university business',
        language: 'Dockerfile',
        languageColor: '#384d54',
        githubUrl: 'https://github.com/SamP10/VulnerableDockerfile'
    },
    {
        id: 5,
        name: 'RSS',
        description: null,
        language: 'Makefile',
        languageColor: '#427819',
        githubUrl: 'https://github.com/SamP10/RSS'
    },
    {
        id: 6,
        name: 'UniCypherGraph',
        description: 'A Neo4j graph outlining aspects of a university business structure',
        language: 'Neo4j',
        languageColor: '#008CC1',
        githubUrl: 'https://github.com/SamP10/UniCypherGraph'
    },
    {
        id: 7,
        name: 'DSALabs',
        description: 'Data Structure and Algorithms labs - Manchester Met 2021',
        language: 'C#',
        languageColor: '#239120',
        githubUrl: 'https://github.com/SamP10/DSALabs'
    },
    {
        id: 8,
        name: 'BetDocker',
        description: 'A dockerfile and docker compose orchestration to setup a gambling system and website using laravel',
        language: 'Dockerfile',
        languageColor: '#384d54',
        githubUrl: 'https://github.com/SamP10/BetDocker'
    },
    {
        id: 9,
        name: '24.7Cypher',
        description: null,
        language: 'Unknown',
        languageColor: '#6B7280',
        githubUrl: 'https://github.com/SamP10/24.7Cypher'
    },
    {
        id: 10,
        name: 'LaravelBet',
        description: 'A laravel online betting application',
        language: 'PHP',
        languageColor: '#777BB4',
        githubUrl: 'https://github.com/SamP10/LaravelBet'
    },
    {
        id: 11,
        name: 'UniVulnerableWebsite',
        description: null,
        language: 'JavaScript',
        languageColor: '#F7DF1E',
        githubUrl: 'https://github.com/SamP10/UniVulnerableWebsite'
    },
    {
        id: 12,
        name: 'lookupADS',
        description: null,
        language: 'PHP',
        languageColor: '#777BB4',
        githubUrl: 'https://github.com/SamP10/lookupADS'
    },
    {
        id: 13,
        name: 'AWE',
        description: 'Leeds beckett AWE',
        language: 'Unknown',
        languageColor: '#6B7280',
        githubUrl: 'https://github.com/SamP10/AWE'
    },
    {
        id: 14,
        name: 'cve-2019-5736-poc',
        description: 'Unweaponized Proof of Concept for CVE-2019-5736 (Docker escape)',
        language: 'C',
        languageColor: '#555555',
        githubUrl: 'https://github.com/SamP10/cve-2019-5736-poc'
    }
];
