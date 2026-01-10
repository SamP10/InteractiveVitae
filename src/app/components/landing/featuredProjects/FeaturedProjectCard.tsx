'use client';

import { TimelineEntry } from '@/app/data/experience';

interface FeaturedProjectCardProps {
    project: TimelineEntry;
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
                    {project.subtitle}
                </span>
                <h3 className="text-xl font-bold text-darkPine group-hover:text-moss transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-darkPine">
                    {project.dateStart}
                    {project.dateEnd ? ` - ${project.dateEnd}` : ' - Present'}
                </p>
            </div>

            {/* Description */}
            <p className="text-darkPine text-sm mb-4 line-clamp-3">{project.summary}</p>

            {/* Key achievement */}
            {project.achievements.length > 0 && (
                <p className="text-darkPine text-sm italic mb-4 line-clamp-2">
                    {project.achievements[0]}
                </p>
            )}

            {/* Tech badges */}
            {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-darkPine text-cream rounded-md">
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            {/* View link */}
            {project.link && (
                <a
                    href={project.link}
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
