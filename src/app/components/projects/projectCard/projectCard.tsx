'use client';

import LanguageBadge from '../languageBadge/languageBadge';
import type { Project } from '@/app/data/projects';
import { useInitialLoad } from '@/app/context/InitialLoadContext';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const isInitialLoad = useInitialLoad();

    // Initial load: start after header (2.7s), slower stagger
    // Subsequent: fast animations with minimal delay
    const baseDelay = isInitialLoad ? 2.7 : 0.1;
    const stagger = isInitialLoad ? 0.1 : 0.05;
    const animationDelay = baseDelay + index * stagger;

    return (
        <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cream text-darkPine rounded-lg overflow-hidden
                       hover:shadow-lg hover:scale-[1.02] transition-all duration-300
                       opacity-0 animate-card-fade-in"
            style={{ animationDelay: `${animationDelay}s` }}
        >
            {/* Placeholder Image Area */}
            <div className="relative h-40 bg-pine flex items-center justify-center">
                <div className="text-cream text-6xl opacity-30 font-bold">
                    {project.language.charAt(0)}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-pine mb-4 line-clamp-2 min-h-[2.5rem]">
                    {project.description || 'No description available'}
                </p>
                <LanguageBadge language={project.language} color={project.languageColor} />
            </div>
        </a>
    );
}
