import { notFound } from 'next/navigation';
import NavigationBar from '../../components/navigation/navigationBar/navigationBar';
import NavigationContainer from '../../components/navigation/navigationContainer/navigationContainer';
import Footer from '../../components/footer/footer';
import BlogPostContent from './BlogPostContent';
import { getBlogPostBySlug } from '@/app/data/blog';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <NavigationContainer />
            <BlogPostContent post={post} />
            <Footer />
        </div>
    );
}
