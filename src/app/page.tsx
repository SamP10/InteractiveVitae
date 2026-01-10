'use client';
import Landing from './components/landing/landing';
import NavigationBar from './components/navigation/navigationBar/navigationBar';
import Footer from './components/footer/footer';

export default function StartPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <Landing />
            <Footer />
        </div>
    );
}
