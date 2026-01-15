'use client';

import { useState } from 'react';
import Image from 'next/image';
import LanguageBadge from '../languageBadge/languageBadge';
import type { IProject } from '@/app/data/projects';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getCardTiming } from '@/app/constants/animations';

interface IProjectCardProps {
    project: IProject;
    index: number;
}

export default function ProjectCard({ project, index }: IProjectCardProps) {
    const isInitialLoad = useInitialLoad();
    const { baseDelay, stagger } = getCardTiming(isInitialLoad);
    const animationDelay = baseDelay + index * stagger;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cream text-darkPine rounded-lg overflow-hidden
                       border border-darkPine hover:shadow-lg hover:scale-[1.02]
                       transition-all duration-300 opacity-0 animate-card-fade-in"
            style={{ animationDelay: `${animationDelay}s` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Area */}
            <div className="relative h-40 bg-pine flex items-center justify-center overflow-hidden">
                {project.hoverImage && isHovered ? (
                    <Image
                        src={project.hoverImage}
                        alt={project.name}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                ) : project.image ? (
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-contain p-2"
                    />
                ) : (
                    <div className="text-cream text-6xl opacity-30 font-bold">
                        {project.name.charAt(0)}
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-xs text-pine mb-2">
                    {project.dates.start}
                    {project.dates.end ? ` - ${project.dates.end}` : ' - Present'}
                </p>
                <p className="text-sm text-pine mb-4 line-clamp-2 min-h-[2.5rem]">
                    {project.description || 'No description available'}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.languages.map((language) => (
                        <LanguageBadge key={language.id} language={language.name} color={language.color} />
                    ))}
                </div>
            </div>
        </a>
    );
}
