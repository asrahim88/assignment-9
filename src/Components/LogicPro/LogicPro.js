import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";
import Bounce from 'react-reveal/Bounce';


const LogicPro = () => {
    return (
        <div className='md:w-5/6 md:mx-auto flex  justify-center items-center'>
            <div className='block'>
                <Bounce right>
                    <div className='text-center md:text-base lg:text-lg text-xs p-10 md:px-10 md:pt-0'>
                        <p>
                            Logic Pro puts a complete recording and MIDI production studio on your Mac, with
                        </p>
                        <p>
                            everything you need to write, record, edit, and mix like never before. And with a huge
                        </p>
                        <p>
                            collection of full-featured plug-ins along with thousands of sounds and loops, you’ll have
                        </p>
                        <p>
                            everything you need to go from first inspiration to final master, no matter what kind of music
                        </p>
                        <p>
                            you want to create.
                        </p>
                        <p className='hover:underline text-[#ff7518] mt-5 flex justify-center items-center'>
                            <a href="#" target="_blank"> Learn More About Logic Pro </a>

                            <IoChevronForwardOutline></IoChevronForwardOutline>
                        </p>
                    </div>
                </Bounce>
                <Bounce left>
                    <div className='relative md:mt-[-180px] lg:mt-0'>
                        <div className='mt-[-60px] md:mt-[-160px] md:mb-[-150px]'>
                            <div className='absolute w-full p-12'>
                                <div className='flex justify-center items-center md:px-32 md:py-28 w-10/12 md:w-11/12 mx-auto '>
                                    <img src="/photos/proMainPic.jpg" alt="" srcSet="" className='px-5 pt-7 w-full' />
                                </div>
                            </div>
                            <div className='w-full p-14'>
                                <div className='md:p-28'>
                                    <img src="/photos/proFrame.png" alt="" srcSet="" className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    );
};

export default LogicPro;