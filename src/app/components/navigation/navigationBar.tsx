'use client';

import { useNavigate, useLocation } from 'react-router-dom';
import NavButton from './navButton';
import Image from 'next/image';
import Logo from '../../assets/images/AISPLogo3.png'; // Ensure this is a valid StaticImageData import

export default function NavigationBar() {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/') {
        return null;
    }

    return (
        <nav className="fixed top-0 left-0 h-full border-r-2 border-green-600 text-white shadow-md z-50">
                <Image src={Logo} alt="Logo" width={96} height={96} className="mb-4" />
                <div className="flex flex-col justify-start mt-10">
                    <NavButton label="Home" onClick={() => navigate('/home')} />
                    <NavButton label="Projects" onClick={() => navigate('/projects')} />
                    <NavButton label="Contact" onClick={() => navigate('/contact')} />
                </div>
        </nav>
    );
}
