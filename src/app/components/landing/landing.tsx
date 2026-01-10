'use client';

import HeroSection from './heroSection/HeroSection';
import FeaturedProjects from './featuredProjects/FeaturedProjects';
import ProfessionalHighlights from './professionalHighlights/ProfessionalHighlights';
import SkillsShowcase from './skillsShowcase/SkillsShowcase';
import WorkTogether from './workTogether/WorkTogether';

export default function Landing() {
    return (
        <div className="flex flex-col flex-1">
            <HeroSection />
            <FeaturedProjects />
            <ProfessionalHighlights />
            <SkillsShowcase />
            <WorkTogether />
        </div>
    );
}
