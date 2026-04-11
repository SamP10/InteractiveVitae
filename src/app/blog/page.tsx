import NavigationBar from '../components/navigation/navigationBar/navigationBar';
import NavigationContainer from '../components/navigation/navigationContainer/navigationContainer';
import Footer from '../components/footer/footer';
import BlogContent from './BlogContent';
import { getBlogPosts, getAllTags } from '@/app/data/blog';

export default async function BlogPage() {
    const [posts, tags] = await Promise.all([getBlogPosts(), getAllTags()]);

    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <NavigationContainer />
            <BlogContent posts={posts} tags={tags} />
            <Footer />
        </div>
    );
}
