import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";

const Compressor = () => {
    return (
        <div className='md:w-5/6 md:mx-auto flex  justify-center items-center'>
            <div className='block'>
                <div className='text-center md:text-base lg:text-lg text-xs p-10 md:px-10 md:pt-0'>
                    <p>
                        Add power and flexibility for exporting projects from Final Cut Pro. Customize output
                    </p>
                    <p>
                        settings, work faster with distributed encoding, and easily package your film for the
                    </p>
                    <p>
                        iTunes Store.
                    </p>
                    <p className='hover:underline text-[#ff7518] mt-5 flex justify-center items-center'>
                        <a href="#" target="_blank"> Learn More About Compressor </a>

                        <IoChevronForwardOutline></IoChevronForwardOutline>
                    </p>
                </div>
                <div className='relative md:mt-[-180px] lg:mt-0'>
                    <div className='mt-[-60px] md:mt-[-160px] md:mb-[-150px]'>
                        <div className='absolute w-full p-12'>
                            <div className='flex justify-center items-center md:px-32 md:py-28 w-10/12 md:w-11/12 mx-auto '>
                                <img src="/photos/compressorMainPic.jpg" alt="" srcSet="" className='px-5 pt-7 w-full' />
                            </div>
                        </div>
                        <div className='w-full p-14'>
                            <div className='md:p-28'>
                                <img src="/photos/proFrame.png" alt="" srcSet="" className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compressor;