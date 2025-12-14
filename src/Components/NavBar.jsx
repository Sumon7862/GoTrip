import { CiSearch } from "react-icons/ci";
import Logo from '../assets/logo.png';
import { useEffect, useState } from "react";


const Navbar = () => {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {

        const scroll = () => {
            if (window.scrollY >= 50) {
                setScroll(true)

            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', scroll)
    }, [])

    return (
        <nav className={` ${scroll ? 'bg-[#02044A]' : ''} fixed duration-300 top-0 w-full z-50 px-8 py-4 font-jost`}>
            <div className="container">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Left Logo */}
                    <div className="cursor-pointer">
                        <img src={Logo} alt="logo" />
                    </div>

                    {/* Right Buttons */}
                    <div className="flex items-center gap-4">

                        {/* Center Menu */}
                        <ul className="hidden md:flex items-center gap-8 font-medium text-white text-[15px]">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">Categories</li>
                            <li className="cursor-pointer">Destination</li>
                            <li className="cursor-pointer">Blog</li>
                            <li className="cursor-pointer">Pages</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>

                        {/* Become Expert */}
                        <button className="border border-white px-5 py-2 rounded-sm text-white text-sm font-medium hover:bg-white hover:text-primary transition cursor-pointer">
                            Become An Expert
                        </button>

                        {/* Sign In */}
                        <button className="border border-white px-5 py-2 rounded-sm text-white text-sm font-medium hover:bg-white hover:text-primary transition cursor-pointer">
                            Sign In / Register
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
