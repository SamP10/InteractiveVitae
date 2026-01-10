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
                        <p aria-label="Contact">Contact Me:</p>
                        <div className="flex space-x-3">
                            <a
                                href="https://github.com/SamP10"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-moss">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 hover:fill-[#3E7B27]"
                                    fill="#123524"
                                    aria-hidden="true">
                                    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.12 7.64 10.6.56.1.76-.24.76-.53 0-.26-.01-.95-.01-1.86-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1.01 1.74 2.65 1.24 3.3.95.1-.74.39-1.24.71-1.53-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.4.11-2.92 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 2.78-.37c.94 0 1.9.12 2.78.36 2.12-1.44 3.05-1.13 3.05-1.13.62 1.53.24 2.64.12 2.92.71.78 1.14 1.77 1.14 2.98 0 4.27-2.62 5.21-5.11 5.49.4.35.76 1.05.76 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.64.77.53C19.06 20.86 22.25 16.68 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sam-plant-642b05195/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-moss">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 hover:fill-[#3E7B27]"
                                    fill="#123524"
                                    aria-hidden="true">
                                    <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.09.88 1.97 1.98 1.97h.02C6.08 7.45 7 6.57 7 5.48 7 4.38 6.12 3.5 4.98 3.5zM3.5 8.88h3V20H3.5zM9 8.88h2.88v1.56h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V20h-3V14.9c0-1.23-.02-2.82-1.72-2.82-1.72 0-1.98 1.34-1.98 2.73V20H9z" />
                                </svg>
                            </a>

                            <a
                                href="mailto:splant.enquiries@gmail.com"
                                aria-label="Email"
                                className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#123524"
                                    className="w-5 h-5 hover:fill-[#3E7B27]"
                                    aria-hidden="true">
                                    <path d="M12 13.065L2.4 6.3V18c0 1.1.9 2 2 2h15.2c1.1 0 2-.9 2-2V6.3L12 13.065zM12 11L22.2 4H1.8L12 11z" />
                                </svg>
                            </a>
                        </div>

                        <a
                            href="/resume.pdf" // Adjusted path if the file is in the public folder
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
