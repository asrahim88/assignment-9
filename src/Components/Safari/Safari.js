import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";
import Bounce from 'react-reveal/Bounce';

const Safari = () => {
    return (
        <div className='md:w-5/6 md:mx-auto flex  justify-center items-center'>
            <div className='block'>
                <Bounce top>
                    <div className='text-center md:text-base lg:text-lg text-xs p-10 md:px-10 md:pt-0'>
                        <p>
                            Safari has innovative features that let you enjoy more of the web. In even more ways. Built-in
                        </p>
                        <p>
                            privacy features help protect your information and keep your Mac secure. An updated start
                        </p>
                        <p>
                            page helps you easily and quickly save, find, and share your favorite sites. And Siri
                        </p>
                        <p>
                            suggestions surface bookmarks, links from your reading list, iCloud Tabs, links you receive in
                        </p>
                        <p>
                            Messages, and more.
                        </p>
                        <p className='hover:underline text-[#ff7518] mt-5 flex justify-center items-center'>
                            <a href="#" target="_blank"> Learn More About Safari </a>

                            <IoChevronForwardOutline></IoChevronForwardOutline>
                        </p>
                    </div>
                </Bounce>
                <Bounce bottom>
                    <div className='relative md:mt-[-180px] lg:mt-0'>
                        <div className='mt-[-60px] md:mt-[-160px] md:mb-[-150px]'>
                            <div className='absolute w-full p-12'>
                                <div className='flex justify-center items-center md:p-28'>
                                    <img src="/photos/safariMainPic.jpg" alt="" srcSet="" className='w-full px-5 pt-7' />
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

export default Safari;