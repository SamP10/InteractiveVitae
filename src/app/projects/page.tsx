'use client';

import NavigationBar from '../components/navigation/navigationBar/navigationBar';
import NavigationContainer from '../components/navigation/navigationContainer/navigationContainer';
import Footer from '../components/footer/footer';
import ProjectsGrid from '../components/projects/projectsGrid/projectsGrid';

export default function ProjectsPage() {
    return (
        <div>
            <NavigationBar />
            <NavigationContainer />

            <main className="m-4 flex items-center justify-center flex-col gap-8">
                <header className="w-4/5 text-center animate-slide-in-left">
                    <h1 className="text-4xl text-cream mb-4">Projects</h1>
                    <p className="text-lg text-cream opacity-80">
                        A collection of my open source projects and experiments
                    </p>
                </header>

                <section className="w-4/5">
                    <ProjectsGrid />
                </section>
            </main>

            <Footer />
        </div>
    );
}
