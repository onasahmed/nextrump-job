import React from 'react';
import { Link } from 'react-router-dom';


const Company = (props) => {
    const {id, company, image, role, remote, salary} = props.company;
    const handleDetails = props.handleDetails;
  
    return (
        <div className=''>
            <img src={image} className='h-24 w-48' boalt="" />
            <h1 className='text-xl font-bold text-gray-600'>{role}</h1>
            <h1 className='text-md font-normal'>{company}</h1>
            <Link to={`/details/${id}`}><button className='p-5 bg-blue-700 text-white text-xs'>Details</button></Link>
        </div>
    );
};

export default Company;