import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { RiWechatLine } from "react-icons/ri";
import { Link, Outlet } from 'react-router-dom';
import LogicPro from '../LogicPro/LogicPro';
import MainStage from '../MainStage/MainStage';
import Safari from '../Safari/Safari';
import Photos from '../Photos/Photos';
import GarageBand from '../GarageBand/GarageBand';
import Pages from '../Pages/Pages';
import Numbers from '../Numbers/Numbers';
import KeyNotes from '../KeyNotes/KeyNotes';
import { useState } from 'react';
import IMovie from '../IMovie/IMovie';

const Home = () => {

    // Built In Apps Functionality
    const safari = <Safari></Safari>;
    const photos = <Photos></Photos>;
    const iMovie = <IMovie></IMovie>;
    const garageBand = <GarageBand></GarageBand>;
    const pages = <Pages></Pages>;
    const numbers = <Numbers></Numbers>;
    const keyNotes = <KeyNotes></KeyNotes>;

    const [builtInApps, setBuiltInApps] = useState(safari);
    const handleBuiltInApps = (builtIn) => {
        setBuiltInApps(builtIn);
    };



    // Pro apps functionality
    const main_stage = <MainStage></MainStage>;
    const logic_pro = <LogicPro></LogicPro>;
    const [proApps, setProApps] = useState(logic_pro);
    const handleProApps = (comp) => {
        setProApps(comp)
    };

    return (
        <div className='md:w-11/12 md:mx-auto'>
            {/* apple work */}
            <div className='bg-[url("https://i.ibb.co/1RYWJMQ/bg-1.jpg")] h-[500px] w-full flex  items-center bg-no-repeat bg-center md:bg-top bg-cover'>
                <div className='w-full text-center text-white font-bold'>
                    <h1 className='text-6xl '>Apple at Work</h1>
                    <p className='mt-2 text-lg'>Get the power to take your business to the next level.</p>
                    <p className='mt-1 hover:underline text-lg flex justify-center items-center'><a href="#" target='_blank '>Learn about Apple at Work</a> <IoChevronForwardOutline></IoChevronForwardOutline></p>
                    <p className='mt-1 hover:underline text-lg flex justify-center items-center'><a href="#" target='_blank'>See why Mac means business</a> <IoChevronForwardOutline></IoChevronForwardOutline></p>
                </div>
            </div>
            {/* shop for college */}
            <div className='bg-gray-100 mt-5'>
                <div className='md:w-5/6 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px]'>
                    <div className='flex items-center'>
                        <div className='font-bold mt-[-100px] md:mt-0 md:px-0 px-5 text-slate-800'>
                            <p className='text-lg'>Shop for College</p>
                            <h1 className='md:text-5xl text-3xl'>Save on Mac with an</h1>
                            <h1 className='md:text-5xl text-3xl'>education discount.◊</h1>
                            <p className='text-lg mt-5 font-semibold text-[#ff7518]'>Plus get a $150 gift card.◊◊</p>
                            <button className='bg-slate-800 text-lg px-3 py-2 rounded-md mt-5 text-white hover:bg-transparent hover:text-slate-800 hover:border-2 hover:border-slate-800 hover:transition hover:duration-1000 ease-in-out'>Live Demo</button>
                        </div>
                    </div>
                    <div className='md:order-last order-first flex justify-center items-center'>
                        <img src="https://i.ibb.co/KFDVJNw/header.png" alt="" srcSet="" className='w-full h-full' />
                    </div>
                </div>
            </div>
            {/* accessories */}
            <div className='gap-8 mt-8 mb-5 grid grid-cols-1 md:grid-cols-2'>
                <div className='bg-gray-100'>
                    <div className='flex items-center justify-center'>
                        <div className='text-center pt-10 pb-5 font-semibold text-slate-800'>
                            <p className='text-2xl'>Accessories</p>
                            <h1 className='text-6xl'>Explore Mac</h1>
                            <h1 className='text-6xl'>accessories.</h1>
                            <button className='bg-slate-800 text-lg px-3 py-2 rounded-md mt-5 text-white hover:bg-transparent hover:text-slate-800 hover:border-2 hover:border-slate-800 hover:transition hover:duration-1000 ease-in-out'>Shop</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Gnry7NZ/accessories-tile-cybkm8f034uq-large.jpg" alt="" srcSet="" />
                    </div>
                </div>
                <div className='bg-gray-100'>
                    <div className='flex items-center justify-center'>
                        <div className='text-center pt-10 font-semibold text-slate-800 text-lg'>
                            <p className='text-xl'>Apple Trade In</p>
                            <h1 className='text-4xl mt-2'>Get credit toward a</h1>
                            <h1 className='text-4xl'>new Mac.</h1>
                            <p className='mt-2'>
                                Just trade in your eligible computer for credit or recycle
                            </p>
                            <p>
                                it for free. It’s good for you and the planet.10
                            </p>
                            <p className='flex justify-center items-center mt-3 mb-1 hover:underline'>
                                <a href="#"> Find your trade‑in value </a> <IoChevronForwardOutline></IoChevronForwardOutline>
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/DLrGJF2/trade-in-mac-tile-d67bvlqow1ua-large.jpg" alt="" srcSet="" />
                    </div>
                </div>
            </div>
            {/* delivery payment help */}
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='flex items-center justify-center md:h-[350px] h-[250px]'>
                    <div className='text-center text-lg font-semibold text-slate-700'>
                        <div className='flex justify-center'>
                            <TbTruckDelivery className='text-6xl text-gray-200  font-normal'></TbTruckDelivery>
                        </div>
                        <h1 className='text-2xl font-bold text-slate-700'>Free delivery</h1>
                        <p>And free returns. See checkout</p>
                        <p>for delivery dates.</p>
                        <p className='flex justify-center items-center text-[#ff7518] hover:underline'>
                            <a href="#"> Learn more </a>
                            <IoChevronForwardOutline></IoChevronForwardOutline>
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center md:h-[350px] h-[250px]'>
                    <div className='text-center text-lg font-semibold text-slate-700'>
                        <div className='flex justify-center'>
                            <BiDollarCircle className='text-6xl text-gray-200  font-normal'></BiDollarCircle>
                        </div>
                        <h1 className='text-2xl font-bold text-slate-700'>Pay monthly at 0% APR</h1>
                        <p>You can pay over time when you</p>
                        <p>choose to check out with Apple Card</p>
                        <p>Monthly Installments.*</p>
                        <p className='flex justify-center items-center text-[#ff7518] hover:underline'>
                            <a href="#"> Learn more </a>
                            <IoChevronForwardOutline></IoChevronForwardOutline>
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center md:h-[350px] h-[250px]'>
                    <div className='text-center text-lg font-semibold text-slate-700'>
                        <div className='flex justify-center'>
                            <RiWechatLine className='text-6xl text-gray-200  font-normal'></RiWechatLine>
                        </div>
                        <h1 className='text-2xl font-bold text-slate-700'>Get help buying</h1>
                        <p>Have a question? Call a Specialist or</p>
                        <p>chat online. Call 1‑800-MY‑APPLE.</p>
                        <p className='flex justify-center items-center text-[#ff7518] hover:underline'>
                            <a href="#"> Contact us </a>
                            <IoChevronForwardOutline></IoChevronForwardOutline>
                        </p>
                    </div>
                </div>
            </div>
            {/* BuiltInApps */}
            <div className='bg-[#FBFBFD] pt-10'>
                <div className='flex justify-center items-center text-slate-800'>
                    <div className='text-lg font-semibold'>
                        <h1 className='text-center font-bold text-6xl'>Built-in Apps</h1>
                        <p className='text-center mt-5'>
                            Powerful creativity and productivity tools live inside every Mac — apps that help you explore, connect,
                        </p>
                        <p className='text-center'>
                            and work more efficiently.
                        </p>
                    </div>
                </div>
                <div>
                    <ul className='sm:grid grid-cols-3 md:flex space-x-1 md:space-x-14 justify-center border-b-2 mt-10'>
                        <li className='hover:underline block text-center cursor-pointer' onClick={() => handleBuiltInApps(safari)}>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/zNqX3hh/nav-icon-safari-b4hes9xilhjm-large.jpg" alt="" srcSet="" />
                            </div>
                            <span className=' font-semibold text-slate-800'>
                                Safari
                            </span>
                        </li>
                        <li className='hover:underline block text-center cursor-pointer' onClick={() => handleBuiltInApps(photos)}>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/gtT6tWP/nav-icon-photos-f2izri0oyzee-large.jpg" alt="" srcSet="" />
                            </div>
                            <span className=' font-semibold text-slate-800'>
                                Photos
                            </span>
                        </li>
                        <li className='hover:underline block text-center cursor-pointer' onClick={() => handleBuiltInApps(iMovie)}>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/J5nYPvF/nav-icon-imovie-b0pjfv6j5w9y-large.jpg" alt="" srcSet="" />
                            </div>
                            <span className=' font-semibold text-slate-800'>
                                iMovie
                            </span>
                        </li>
                        <li className='hover:underline block text-center cursor-pointer' onClick={() => handleBuiltInApps(garageBand)}>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/5RHQZmn/nav-icon-garageband-cxmciudp6k02-large.jpg" alt="" srcSet="" />
                            </div>
                            <span className=' font-semibold text-slate-800'>
                                GarageBand
                            </span>
                        </li>
                        <li className='hover:underline block text-center cursor-pointer' onClick={() => handleBuiltInApps(pages)}>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/0sqqT2W/nav-icon-pages-ci5gjd3xa5si-large.jpg.jpg" alt="" srcSet="" />
                            </div>
                            <span className=' font-semibold text-slate-800'>
                                Pages
                            </span>
                        </li>
                        <li className='hover:underline block text-center cursor-pointer' onClick={() => handleBuiltInApps(numbers)}>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/8B3ZyKh/nav-icon-numbers-e9eog351v3iy-large.jpg" alt="" srcSet="" />
                            </div>
                            <span className=' font-semibold text-slate-800'>
                                Numbers
                            </span>
                        </li>
                        <li className='hover:underline block text-center cursor-pointer' onClick={() => handleBuiltInApps(keyNotes)}>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/cLWzCry/nav-icon-keynote-e5b6yp23dx2e-large.jpg" alt="" srcSet="" />
                            </div>
                            <span className=' font-semibold text-slate-800'>
                                Key Notes
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='pt-5 pb-5'>
                    {builtInApps}
                </div>

            </div>
            {/* proApps */}
            <div>
                <div>
                    <ul className='flex space-x-10 justify-center py-5'>
                        <li className='hover:underline cursor-pointer' onClick={() => handleProApps(logic_pro)}>Logic Pro</li>
                        <li className='hover:underline cursor-pointer' onClick={() => handleProApps(main_stage)}>Main Stage</li>
                        <li className='hover:underline cursor-pointer'>Final Cut Pro</li>
                        <li className='hover:underline cursor-pointer'>Motion</li>
                        <li className='hover:underline cursor-pointer'>Compressor</li>
                    </ul>
                </div>
                <div>
                    {proApps}
                </div>
            </div>
        </div>
    );
};

export default Home;