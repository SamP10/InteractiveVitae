export default function Homepage() {
    return (
        <div className="relative">
            <div className="relative z-10 p-4">
                <section className="homepage-intro">
                    <h2>About Us</h2>
                    <p>
                        At Creative Vitae, we believe in empowering individuals to unlock their
                        creative potential. Explore our resources, connect with like-minded
                        creators, and bring your ideas to life.
                    </p>
                </section>
                <section className="homepage-features">
                    <h2>Features</h2>
                    <ul>
                        <li>Inspiring articles and tutorials</li>
                        <li>Community forums for collaboration</li>
                        <li>Tools to enhance your creative workflow</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
