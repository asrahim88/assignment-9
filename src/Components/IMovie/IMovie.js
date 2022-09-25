import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";
import Bounce from 'react-reveal/Bounce';


const IMovie = () => {
    return (
        <div className='md:w-5/6 md:mx-auto flex  justify-center items-center'>
            <div>
                <Bounce right>
                    <div className='text-center md:text-base lg:text-lg text-xs p-10 md:px-10 md:pt-0'>
                        <p>
                            Tell stories like never before. A simple design and intuitive editing features make it easy to
                        </p>
                        <p>
                            create beautiful 4K movies and Hollywood-style trailers.
                        </p>
                        <p className='hover:underline text-[#ff7518] mt-5 flex justify-center items-center'>
                            <a href="#" target="_blank"> Learn More About iMovie </a>

                            <IoChevronForwardOutline></IoChevronForwardOutline>
                        </p>
                    </div>
                </Bounce>
                <Bounce left>
                    <div className='relative md:mt-[-180px] lg:mt-0'>
                        <div className='mt-[-60px] md:mt-[-160px] md:mb-[-150px]'>
                            <div className='absolute w-full p-12'>
                                <div className='flex justify-center items-center md:p-28'>
                                    <img src="/photos/iMovieMainImage.jpg" alt="" srcSet="" className='w-full px-5 pt-6' />
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

export default IMovie;