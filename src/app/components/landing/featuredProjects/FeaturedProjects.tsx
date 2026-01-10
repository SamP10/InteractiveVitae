'use client';

import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getFeaturedProjectsTiming } from '@/app/constants/animations';
import { experienceData } from '@/app/data/experience';
import FeaturedProjectCard from './FeaturedProjectCard';

export default function FeaturedProjects() {
    const isInitialLoad = useInitialLoad();
    const { baseDelay, cardStagger } = getFeaturedProjectsTiming(isInitialLoad);

    // Filter for featured projects only
    const featuredProjects = experienceData.filter(
        (entry) => entry.featured && entry.category === 'project'
    );

    return (
        <section id="featured-projects" className="py-16 px-4 bg-pine">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div
                    className="text-center mb-12 animate-text-reveal"
                    style={{ animationDelay: `${baseDelay}s` }}>
                    <h2 className="text-3xl md:text-4xl font-limelight text-cream mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-moss mx-auto rounded-full" />
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProjectCard
                            key={project.id}
                            project={project}
                            animationDelay={baseDelay + 0.2 + index * cardStagger}
                        />
                    ))}
                </div>

                {/* See all projects link */}
                <div
                    className="text-center mt-10 animate-text-reveal"
                    style={{ animationDelay: `${baseDelay + 0.6}s` }}>
                    <a
                        href="/projects"
                        className="inline-flex items-center text-cream hover:text-moss font-medium transition-colors">
                        See All Projects
                        <svg
                            className="w-5 h-5 ml-2"
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
                </div>
            </div>
        </section>
    );
}
