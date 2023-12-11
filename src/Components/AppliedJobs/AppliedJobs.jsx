import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = (props) => {
    const {image,company, role, remote ,id} = props.singlejob

    return (
        <div className='p-5 bg-blue-300 my-12'>
            <div className='flex h-36 '>
                <img className='border-grey-300 border-2 h-32 w-1/6 mr-8' src={image} alt="" />
                <div className='flex flex-col w-4/6 h-36'>
                    <h1>{company}</h1>
                    <h1>{role}</h1>
                    <button className='p-2 w-36 border-2 bg-purple-300 border-purple-600'>{remote}</button>
                </div>
                
            <Link to={`/details/${id}`}><button className='p-5 mt-5 apply bg-blue-700 text-white text-xs'>Details</button></Link>
    
            </div>
            
            
        </div>
    );
};

export default AppliedJobs;