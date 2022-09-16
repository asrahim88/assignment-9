import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";

const Safari = () => {
    return (
        <div className='md:w-5/6 md:mx-auto flex  justify-center items-center'>
            <div className='text-center text-lg font-normal'>
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
            <div>
                <img src="" alt="" srcSet="" />
            </div>
        </div>
    );
};

export default Safari;