import { useNavigate } from 'react-router-dom';
import NavButton from './navButton';
import Image from 'next/image';
import Logo from '../../assets/images/AISPLogo3.png';

export default function NavigationBar() {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 h-full border-r-2 border-green-600 text-white shadow-md z-50 w-[10rem] bg-gray-800">
            <div className="flex flex-col items-center mt-10 ">
                <Image src={Logo} alt="Logo" width={96} height={96} className="mb-4" />
                <div className="flex flex-col justify-start mt-10">
                    <NavButton label="Home" onClick={() => navigate('/home')} />
                    <NavButton label="Qualifications" onClick={() => navigate('/qualifications')} />
                    <NavButton label="Projects" onClick={() => navigate('/projects')} />
                    <NavButton label="Get to know me" onClick={() => navigate('/get-to-know-me')} />
                </div>
            </div>
        </nav>
    );
}
