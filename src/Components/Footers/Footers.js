import { Footer } from 'flowbite-react';
// import {  } from "@react-icons/all-files/fa/FaBeer";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoGithub, IoLogoPinterest, IoLogoDribbble, IoLogoTumblr, IoLogoStackoverflow, IoLogoLinkedin } from "react-icons/io5";
import Bounce from 'react-reveal/Bounce';

import React from 'react';

const Footers = () => {
    return (
        <Footer bgDark={true} >
            <div className='w-full' style={{ backgroundColor: "#1F2937", marginTop: "-3px" }}>
                <div className="grid md:w-11/12 md:mx-auto grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                    <Bounce bottom>
                        <div>
                            <p className='text-white mb-5'>
                                Company
                            </p>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        About
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Careers
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Brand Center
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Blog
                                    </span>
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </Bounce>
                    <Bounce bottom>
                        <div>
                            <p className='text-white mb-5'>
                                HELP CENTER
                            </p>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Discord Server
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Twitter
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Facebook
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Contact Us
                                    </span>
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </Bounce>
                    <Bounce bottom>
                        <div>
                            <p className='text-white mb-5'>
                                LEGAL
                            </p>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Privacy Policy
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Licensing
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Terms & Conditions
                                    </span>
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </Bounce>
                    <Bounce bottom>
                        <div>
                            <p className='text-white mb-5'>
                                DOWNLOAD
                            </p>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        iOS
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Android
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        Windows
                                    </span>
                                </Footer.Link>
                                <Footer.Link href="#">
                                    <span className='text-white'>
                                        MacOS
                                    </span>
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </Bounce>
                </div>
                <div className="md:w-11/12  rounded-t-md bg-gray-700 md:mx-auto py-6 px-4 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="https://www.apple.com/"
                        target='_blank'
                        by="MackBook_Review Inc. All rights reserved™"
                        year={2022}
                    />
                    <Bounce left cascade>
                        <div className="mt-4 flex sm:mt-0 sm:justify-center">
                            <span className='block ml-3 text-white text-xl'>
                                <a href='https://www.facebook.com/apple/' target='_blank' rel="noopener noreferrer"><IoLogoFacebook /></a>
                            </span>
                            <span className='block ml-3 text-white text-xl'>
                                <a href="https://www.instagram.com/apple/?hl=en" target='_blank' rel="noopener noreferrer"><IoLogoInstagram /></a>
                            </span>
                            <span className='block ml-3 text-white text-xl'>
                                <a href="https://twitter.com/apple" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
                            </span>
                            <span className='block ml-3 text-white text-xl'>
                                <a href="https://github.com/apple" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
                            </span>
                            <span className='block ml-3 text-white text-xl'>
                                <a href="https://www.pinterest.com/apple/" target="_blank" rel="noopener noreferrer">
                                    <IoLogoPinterest />
                                </a>
                            </span>
                            <span className='block ml-3 text-white text-xl'>
                                <a href="https://dribbble.com/tags/apple" target="_blank" rel="noopener noreferrer"><IoLogoDribbble /></a>
                            </span>
                            <span className='inline-block ml-3 text-white text-xl'>
                                <a href="https://www.tumblr.com/tagged/apple?sort=top" target="_blank" rel="noopener noreferrer"><IoLogoTumblr /></a>
                            </span>
                            <span className='block ml-3 text-white text-xl'>
                                <a href="https://stackoverflow.com/jobs/companies/apple" target="_blank" rel="noopener noreferrer"><IoLogoStackoverflow /></a>
                            </span>
                            <span className='block ml-3 text-white text-xl'>
                                <a href="https://www.linkedin.com/company/apple" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
                            </span>
                        </div>
                    </Bounce>
                </div>
            </div>
        </Footer>
    );
};

export default Footers;