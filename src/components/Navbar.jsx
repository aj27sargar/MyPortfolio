import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const handleSetActive = (value) => {
        setActiveLink(value);
    };

    return (
        <>
            <nav className="text-blue-200 h-6 w-[80%] flex justify-between items-center text-xl px-8 py-6 md:px-20 md:py-6 mb-2 fixed top-5 left-1/2 transform -translate-x-1/2 bg-blue-900/30 backdrop-blur-sm border-b border-blue-700 z-[999] rounded-full transition-all ease-in">
                <div>
                    <h1 className='text-blue-200 font-bold'>Ajit Sargar</h1>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-10'>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === "home" ? "text-blue-500" : ""}`}
                            onClick={() => handleSetActive("home")}
                        >
                            <li>Home</li>
                        </Link>
                        <Link
                            to="certifications"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === "certifications" ? "text-blue-500" : ""}`}
                            onClick={() => handleSetActive("certifications")}
                        >
                            <li>Certifications</li>
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === "projects" ? "text-blue-500" : ""}`}
                            onClick={() => handleSetActive("projects")}
                        >
                            <li>Projects</li>
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === "contact" ? "text-blue-500" : ""}`}
                            onClick={() => handleSetActive("contact")}
                        >
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>

                {openMenu ? (
                    <div className='absolute top-[60px] left-0 bg-blue-900 text-blue-200 text-sm w-full rounded-md'>
                        <ul className='flex flex-col items-start gap-4 px-4 py-2'>
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer ${activeLink === "home" ? "text-blue-500" : ""}`}
                                onClick={() => handleSetActive("home")}
                            >
                                <li>Home</li>
                            </Link>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer ${activeLink === "projects" ? "text-blue-500" : ""}`}
                                onClick={() => handleSetActive("projects")}
                            >
                                <li>Projects</li>
                            </Link>
                            <Link
                                to="certifications"
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer ${activeLink === "certifications" ? "text-blue-500" : ""}`}
                                onClick={() => handleSetActive("certifications")}
                            >
                                <li>Certifications</li>
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer ${activeLink === "contact" ? "text-blue-500" : ""}`}
                                onClick={() => handleSetActive("contact")}
                            >
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                ) : null}

                <div className='md:hidden' onClick={() => setOpenMenu((prev) => !prev)}>
                    {!openMenu ? (
                        <FontAwesomeIcon icon={faBars} className="text-blue-200" />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} className="text-blue-200" />
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
