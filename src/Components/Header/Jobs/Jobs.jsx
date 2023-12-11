import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobs from '../../AppliedJobs/AppliedJobs';

const Jobs = () => {
    const [sortBy, setSortby] = useState(false);
    const sortButton = () =>{
        setSortby(!sortBy)
    }
    const [remoteJob, setRemoteJob] = useState(false);
    const remoteButton = () =>{
        setRemoteJob(!remoteJob)
    }

    const availableJobs = useLoaderData();
    const getStoredJobs = localStorage.getItem('applied-jobs');
    const cart = [];
    if (getStoredJobs) {
        const storedJobs = JSON.parse(getStoredJobs);
        for (const id in storedJobs) {
            const apply = availableJobs.find(info => info.id == id)
            if (apply) {
                cart.push(apply);
            }
        }

    }
 


    return (
        <div className='px-36'>

            <h1 className=' py-20 text-4xl font-bold text-blue-700'>Jobs You have Applied Recently</h1>
            <div>
                {/* SortBy Button Management */}

                <div className='flex justify-end '>
                    <div className='flex flex-col relative'>
                        <div className='flex'><button onClick={sortButton} className='p-3 w-36 inline-block border border-black'> Sort By <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                        </span></button></div>

                        <div className={`w-36 border border-black bg-white absolute top-12 ${sortBy ? 'block' : 'hidden'}`}>
                        <div><button onClick={remoteButton} className='hover:bg-blue-700 hover:text-white w-full'>Remote</button></div>
                        <div><button className='hover:bg-blue-700 hover:text-white w-full'>Full-Time</button></div>
                        </div>
                    </div>

                </div>
                {/* Single Card which is selected */}
                
                {
                    cart.map(singlejob => <AppliedJobs singlejob={singlejob} key={singlejob.id}></AppliedJobs>)
                }
            


            </div>


        </div>
    );
};

export default Jobs;