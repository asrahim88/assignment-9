import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";
import Bounce from 'react-reveal/Bounce';

const KeyNotes = () => {
    return (
        <div className='md:w-5/6 md:mx-auto flex  justify-center items-center'>
            <div>
                <Bounce left>
                    <div className='text-center md:text-base lg:text-lg text-xs p-10 md:px-10 md:pt-0'>
                        <p>
                            Bring your ideas to life with beautiful presentations. Employ powerful tools and dazzling
                        </p>
                        <p>
                            effects that keep your audience engaged. Work seamlessly between Mac, iOS, and iPadOS
                        </p>
                        <p>
                            devices. And work effortlessly with people who use Microsoft PowerPoint.
                        </p>
                        <p className='hover:underline text-[#ff7518] mt-5 flex justify-center items-center'>
                            <a href="#" target="_blank"> Learn More About KeyNotes </a>

                            <IoChevronForwardOutline></IoChevronForwardOutline>
                        </p>
                    </div>
                </Bounce>
                <Bounce right>
                    <div className='relative md:mt-[-180px] lg:mt-0'>
                        <div className='mt-[-60px] md:mt-[-160px] md:mb-[-150px]'>
                            <div className='absolute w-full p-12'>
                                <div className='flex justify-center items-center md:p-28'>
                                    <img src="/photos/keyNotesMainPic.jpg" alt="" srcSet="" className='w-full px-5 pt-7' />
                                </div>
                            </div>
                            <div className='w-full p-14'>
                                <div className='md:p-28'>
                                    <img src="/photos/imageFrame.jpg" alt="" srcSet="" className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    );
};

export default KeyNotes;