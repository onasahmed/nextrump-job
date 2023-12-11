import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const companyDetails = useLoaderData();

    const handleApplied = (id) => {
        let appliedJobs = {}
        const getJobs = localStorage.getItem('applied-jobs')
        if (getJobs) {
            appliedJobs = JSON.parse(getJobs);
        }
        const applied = appliedJobs[id];
        if (applied) {
            alert('already applied');
        } else {
            appliedJobs[id] = 1;
        }
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))



    }
    return (
        <div className='flex flex-col px-32  items-center'>
            <h1 className='grid justify-center items-center py-20 text-4xl font-bold text-blue-700'>JOB DETAILS</h1>
            <div className='flex'>
                <div className='job-info w-1/2'>
                    <h1 className='text-xl mb-5'><span className='font-bold mr-3'>Job Description:</span>{companyDetails.jobDescription}</h1>
                    <h1 className='text-xl mb-5'><span className='font-bold mr-3'>Educational Requirement:</span>{companyDetails.education}</h1>
                    <h1 className='text-xl'><span className='font-bold mr-3'>Experience:</span>{companyDetails.experience}</h1>
                </div>
                <div className='job-details w-1/2'>
                    <div className="w-2/3 h-72 cart bg-purple-300 p-5 ">
                        <h1 className='text-xl font-normal'>Job Details</h1>
                        <hr className='mb-3' />
                        <div className='flex mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p><span className='font-bold'>Salary:</span> {companyDetails.salary}</p>



                        </div>
                        <div className='flex mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                            </svg>

                            <p><span className='font-bold'>Role:</span> {companyDetails.role}</p>



                        </div>


                        <h1 className='text-xl font-normal'>Contact Information</h1>
                        <hr className='mb-3' />
                        <div className='flex mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>


                            <p><span className='font-bold mr-1'>Phone:</span> 01904324917</p>



                        </div>
                        <div className='flex mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>



                            <p><span className='font-bold mr-1'>Email:</span> nextrump@gmail.com</p>



                        </div>
                        <div className='flex mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>




                            <p><span className='font-bold mr-1'>Address:</span> Gulshan, Dhaka</p>



                        </div>









                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => handleApplied(companyDetails.id)}
                            className="p-5 mt-5 apply w-1/2 bg-blue-700 text-white text-xs"
                        >
                            Apply Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;