import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";

const Numbers = () => {
    return (
        <div className='md:w-5/6 md:mx-auto flex  justify-center items-center'>
            <div>
                <div className='text-center md:text-base lg:text-lg text-xs p-10 md:px-10 md:pt-0'>
                    <p>
                        Create sophisticated spreadsheets with dramatic interactive charts, tables, and images that
                    </p>
                    <p>
                        paint a revealing picture of your data. Work seamlessly between Mac, iOS, and iPadOS
                    </p>
                    <p>
                        devices. And work effortlessly with people who use Microsoft Excel.
                    </p>
                    <p className='hover:underline text-[#ff7518] mt-5 flex justify-center items-center'>
                        <a href="#" target="_blank"> Learn More About Numbers </a>

                        <IoChevronForwardOutline></IoChevronForwardOutline>
                    </p>
                </div>
                <div className='relative md:mt-[-180px] lg:mt-0'>
                    <div className='mt-[-60px] md:mt-[-160px] md:mb-[-150px]'>
                        <div className='absolute w-full p-12'>
                            <div className='flex justify-center items-center md:p-28'>
                                <img src="/photos/NumbersMainPic.jpg" alt="" srcSet="" className='w-full px-5 pt-7' />
                            </div>
                        </div>
                        <div className='w-full p-14'>
                            <div className='md:p-28'>
                                <img src="/photos/imageFrame.jpg" alt="" srcSet="" className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Numbers;