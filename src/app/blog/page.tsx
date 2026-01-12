'use client';

import NavigationBar from '../components/navigation/navigationBar/navigationBar';
import NavigationContainer from '../components/navigation/navigationContainer/navigationContainer';
import Footer from '../components/footer/footer';
import BlogGrid from '../components/blog/BlogGrid';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getContentTiming } from '@/app/constants/animations';
import { getSortedBlogPosts } from '@/app/data/blog';

export default function BlogPage() {
    const isInitialLoad = useInitialLoad();
    const { baseDelay, animationClass } = getContentTiming(isInitialLoad);
    const posts = getSortedBlogPosts();

    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <NavigationContainer />

            <main className="m-4 flex items-center justify-center flex-col gap-8 flex-1">
                <header
                    className={`w-4/5 text-center ${animationClass}`}
                    style={{ animationDelay: `${baseDelay}s` }}
                >
                    <h1 className="text-4xl text-cream mb-4">Blog</h1>
                    <p className="text-lg text-cream opacity-80">
                        Thoughts, tutorials, and insights from my journey in software development
                    </p>
                </header>

                <section className="w-4/5">
                    <BlogGrid posts={posts} />
                </section>
            </main>

            <Footer />
        </div>
    );
}
