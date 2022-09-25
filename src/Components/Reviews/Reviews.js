import React from 'react';
import useReviews from '../../Hooks/useReviews';
import './Reviews.css';
// import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';


const Reviews = () => {
    const [review] = useReviews();
    return (
        <div className='bg-gray-200'>
            <div className='w-10/12 mx-auto pb-32'>
                <h1 className='text-center md:text-5xl text-2xl lg:text-6xl font-bold md:pt-24 pt-10 text-slate-800 pb-20'>What Our Customers Say!!!</h1>
                <div className='w-full grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200'>
                    {
                        review.map(rating => <div key={rating.id}>
                            <Zoom cascade>
                                <div className='text-slate-800 border-4 rounded-md border-white p-5 md:p-3 h-[420px] scrollbar-hide md:overflow-y-auto   hover:bg-slate-800 hover:text-gray-200 hover:ease-out duration-1000  animate-pulse hover:animate-none hover:drop-shadow-md hover:outline-double hover:outline-offset-8 rotate-45 hover:rotate-0'>
                                    <div className='flex justify-center'>
                                        <div className=' w-24 h-24 rounded-full border-4 border-white'>
                                            <img src={rating.img} alt="userPic" className=' w-full h-full rounded-full' />
                                        </div>
                                    </div>
                                    <h1 className='text-center text-xl md:text-2xl font-semibold md:font-bold'>{rating.name}</h1>
                                    <p className='text-center font-medium'><small>Rating:{rating.rating}</small></p>
                                    <p className=' select-none'>
                                        " {rating.review} "
                                    </p>
                                </div>
                            </Zoom>
                        </div>)
                    }
                </div>
            </div>
            <div className='relative'>
                <div className="custom-shape-divider-bottom-1664091212">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Reviews;