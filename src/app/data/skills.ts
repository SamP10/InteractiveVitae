export interface ISkill {
    id: number;
    name: string;
    color: string;
}

export const SKILLS: { [key: string]: ISkill } = {
    // Programming Languages
    TYPESCRIPT: { id: 1, name: 'TypeScript', color: '#3178C6' },
    SWIFT: { id: 2, name: 'Swift', color: '#F05138' },
    PHP: { id: 3, name: 'PHP', color: '#777BB4' },
    CSHARP: { id: 4, name: 'C#', color: '#239120' },
    DOCKER: { id: 5, name: 'Dockerfile', color: '#006282ff' },
    CYPHER: { id: 6, name: 'Cypher', color: '#6B7280' },
    JS: { id: 7, name: 'JavaScript', color: '#F7DF1E' },
    HTML: { id: 8, name: 'HTML5', color: '#E34F26' },
    CSS: { id: 9, name: 'CSS', color: '#1572B6' },
    PYTHON: { id: 10, name: 'Python', color: '#3776AB' },
    JAVA: { id: 11, name: 'Java', color: '#ED8B00' },
    SQL: { id: 12, name: 'SQL', color: '#4479A1' },
    APEX: { id: 13, name: 'Apex', color: '#1797C0' },

    // Frameworks & Libraries
    LARAVEL: { id: 111, name: 'Laravel', color: '#FF2D20' },
    REACT: { id: 112, name: 'React', color: '#61DAFB' },
    NEXTJS: { id: 113, name: 'Next.js', color: '#000000' },
    TAILWIND: { id: 114, name: 'TailwindCSS', color: '#06B6D4' },
    BOOTSTRAP: { id: 115, name: 'Bootstrap', color: '#7952B3' },
    NEO4J: { id: 116, name: 'Neo4j', color: '#008CC1' },
    NOTEBOOKS: { id: 117, name: 'Python Notebooks', color: '#F37626' },
    SCIKIT_LEARN: { id: 118, name: 'Scikit-learn', color: '#3499CD' },
    TENSORFLOW: { id: 119, name: 'TensorFlow', color: '#FF6F00' },
    SWIFTUI: { id: 120, name: 'SwiftUI', color: '#F05138' },
    NODEJS: { id: 121, name: 'Node.js', color: '#339933' },
    KERAS: { id: 122, name: 'Keras', color: '#D00000' },
    PANDAS: { id: 123, name: 'Pandas', color: '#150458' },
    MATTERJS: { id: 124, name: 'Matter.js', color: '#4B5563' },

    // Platforms & Tools
    SALESFORCE: { id: 201, name: 'Salesforce', color: '#00A1E0' },
    LWC: { id: 202, name: 'LWC', color: '#00A1E0' },
    REST_APIS: { id: 203, name: 'REST APIs', color: '#6B7280' },
    LINUX: { id: 204, name: 'Linux', color: '#FCC624' },
    SALESFORCE_BULK_API: { id: 205, name: 'Salesforce Bulk API', color: '#00A1E0' }
};
