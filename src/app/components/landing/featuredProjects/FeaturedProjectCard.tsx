'use client';

import { Project } from '@/app/data/projects';

interface FeaturedProjectCardProps {
    project: Project;
    animationDelay: number;
}

export default function FeaturedProjectCard({ project, animationDelay }: FeaturedProjectCardProps) {
    return (
        <div
            className="group relative bg-cream rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 animate-card-fade-in"
            style={{ animationDelay: `${animationDelay}s` }}>
            {/* Project header */}
            <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-moss/20 text-moss rounded-full mb-2">
                    {project.name}
                </span>
                <h3 className="text-xl font-bold text-darkPine group-hover:text-moss transition-colors">
                    {project.name}
                </h3>
                <p className="text-sm text-pine">
                    {project.dates.start}
                    {project.dates.end ? ` - ${project.dates.end}` : ' - Present'}
                </p>
            </div>

            {/* Description */}
            {project.description && (
                <p className="text-darkPine text-sm mb-4 line-clamp-3">{project.description}</p>
            )}

            {/* Tech badges */}
            {project.languages && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.languages.map((language) => (
                        <span
                            key={language.id}
                            className="px-2 py-1 text-xs bg-darkPine text-cream rounded-md"
                            style={{ backgroundColor: language.color }}>
                            {language.name}
                        </span>
                    ))}
                </div>
            )}

            {/* View link */}
            {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-moss hover:text-moss/80 font-medium text-sm transition-colors">
                    View Project
                    <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            )}
        </div>
    );
}
