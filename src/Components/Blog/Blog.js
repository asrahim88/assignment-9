import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { heading, title, blogImg, blog, date, id } = props.blog;
    return (
        <div>
            <div className='border-2 m-10 rounded-md hover:shadow-[0_5px_30px_-15px_white]  md:h-80'>
                <Link to={`/blogsDetails/}`}>
                    <div className='w-full  h-40 overflow-hidden'>
                        <img src={blogImg} alt="" className='w-full h-full' />
                    </div>
                </Link>
                <div className='p-3'>
                    <p className='text-gray-100 my-1'>
                        <span className='text-[#ff7518]'> {heading} </span> - <small> {date}</small>
                    </p>
                    <Link to='/blogsDetails'>
                        <h1 className='text-xl hover:underline underline-offset-8 text-gray-100 my-5'>
                            {title}
                        </h1>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Blog;