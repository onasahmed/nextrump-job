import React from 'react';

const SectionHeader = ({children}) => {
    return (
        <div className='grid w-100 my-14'> 
            <h1 className='text-4xl  font-bold text-blue-700 mb-3 grid justify-center  section-title'>{children}</h1>
            <p className='grid justify-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
    );
};

export default SectionHeader;