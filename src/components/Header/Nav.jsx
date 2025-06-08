import { useState } from 'react';
import logo from '../../assets/logo.png';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* nav */}
            <div className="flex flex-col sm:flex-row items-center bg-black justify-around py-4 sm:py-3 md:py-4">
                {/* for logo */}
                <div className="flex items-center justify-between w-full sm:w-auto px-4 sm:px-0">
                    <img className="h-24 xs:h-32 sm:h-48 md:h-60 w-auto" src={logo} alt="" />
                    {/* Hamburger menu button for mobile */}
                    <button
                        className="sm:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/* option */}
                <div className={`w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
                    <ul className="flex flex-col sm:flex-row items-center justify-center sm:justify-around text-white text-[5vw] xs:text-[4vw] sm:text-[2vw] md:text-[1vw] uppercase mt-4 sm:mt-0 gap-y-4 sm:gap-y-0 px-4 sm:px-0">
                        <li className="mx-2 xs:mx-4 sm:mx-8 md:mx-18">Portfolio</li>
                        <li className="mx-2 xs:mx-4 sm:mx-8 md:mx-18">About Me</li>
                        <li className="mx-2 xs:mx-4 sm:mx-8 md:mx-18">Portfolio</li>
                        <li className="mx-2 xs:mx-4 sm:mx-8 md:mx-18">Price</li>
                        <li className="mx-2 xs:mx-4 sm:mx-8 md:mx-18">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Nav;