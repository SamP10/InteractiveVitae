'use client';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-darkPine text-white py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold">
                            Let&apos;s build something together
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">
                            Open to freelance, contract or full-time opportunities.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="mailto:splant.enquiries@gmail.com"
                            className="inline-block border border-gray-700 hover:border-gray-500 bg-pine hover:bg-moss text-white font-medium py-2 px-4 rounded-md"
                            aria-label="Contact">
                            Contact Me
                        </a>

                        <a
                            href="/resume.pdf"
                            className="inline-block border border-gray-700 hover:border-gray-500 bg-pine hover:bg-moss text-gray-100 font-medium py-2 px-4 rounded-md"
                            aria-label="Download CV"
                            download>
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <div className="text-center md:text-left">
                        © {year} Sam Plant. All rights reserved.
                    </div>

                    <nav className="flex items-center gap-4 mt-3 md:mt-0">
                        <a href="/privacy" className="hover:text-gray-200">
                            Privacy
                        </a>
                        <a href="/terms" className="hover:text-gray-200">
                            Terms
                        </a>
                        <a href="/contact" className="hover:text-gray-200">
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
