'use client';

import NavigationBar from '../components/navigation/navigationBar/navigationBar';
import NavigationContainer from '../components/navigation/navigationContainer/navigationContainer';
import Footer from '../components/footer/footer';
import Timeline from '../components/timeline/Timeline';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getContentTiming } from '@/app/constants/animations';

export default function ExperiencePage() {
    const isInitialLoad = useInitialLoad();
    const { baseDelay, animationClass } = getContentTiming(isInitialLoad);

    return (
        <div>
            <NavigationBar />
            <NavigationContainer />

            <main className="m-4 flex items-center justify-center flex-col gap-8">
                <header
                    className={`w-4/5 text-center ${animationClass}`}
                    style={{ animationDelay: `${baseDelay}s` }}
                >
                    <h1 className="text-4xl text-cream mb-4">Experience</h1>
                    <p className="text-lg text-cream opacity-80">
                        My journey through work, education, and projects
                    </p>
                </header>

                <section className="w-4/5">
                    <Timeline />
                </section>
            </main>

            <Footer />
        </div>
    );
}
