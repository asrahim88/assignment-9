import { Navbar } from 'flowbite-react';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [bgColorChange, setBgColorChange] = useState(false);
    const changeBgNavbar = () => {
        if (window.scrollY >= 80) {
            setBgColorChange(true);
        }
        else {
            setBgColorChange(false);
        }
    }
    window.addEventListener('scroll', changeBgNavbar);
    return (
        <div className='sticky top-0 w-full'>
            <div className={bgColorChange ? 'bg-gray-800 text-white' : "bg-transparent text-gray-700"}>
                <div className='md:w-11/12 md:mx-auto'>
                    <Navbar
                        fluid={true}
                        rounded={true}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Navbar.Brand href="https://www.apple.com/mac/">
                            <img
                                src="/logo.png"
                                className="mr-3 h-6 sm:h-9"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                                MackBook_Review
                            </span>
                        </Navbar.Brand>
                        <div className="flex md:order-2">
                            <button className={ bgColorChange ? "md:w-18 lg:w-32 w-28 px-3 text-slate-800 py-2 rounded text-sm bg-white font-bold" : "md:w-18 lg:w-32 w-24 px-3 text-white py-2 rounded text-sm bg-slate-800"}>
                                Get started
                            </button>
                            <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse>
                            <CustomLink
                                to="/home"
                            >
                                HOME
                            </CustomLink>
                            <CustomLink to="/reviews">
                                REVIEWS
                            </CustomLink>
                            <CustomLink to="/dashboard">
                                DASHBOARD
                            </CustomLink>
                            <CustomLink to="/blogs">
                                BLOGS
                            </CustomLink>
                            <CustomLink to="/about">
                                ABOUT
                            </CustomLink>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;