import React from 'react';
import CommonButton from './CommonButton/CommonButton';

const Banner = () => {
    return (
        <div className='banner-container mb-24 flex'>
            <div className="banner-info w-1/2">
                <h1 className='text-6xl mb-5'>One Step<br></br>Closer To Your<br></br><span className='text-blue-700'>Dream Job</span></h1>
                <p className='text-lg mb-10'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <CommonButton>Get Started</CommonButton>
            </div>
            <div className="banner-image w-1/2  ">
                <img className='w-3/4 m-auto' src="https://images.pexels.com/photos/4043022/pexels-photo-4043022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            
        </div>
    );
};

export default Banner;