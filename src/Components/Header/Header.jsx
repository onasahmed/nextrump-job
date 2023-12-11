import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css'
import CommonButton from '../Banner/CommonButton/CommonButton';

const Header = () => {
    
    return (
        <div className=' px-10'>
            <nav className= 'flex  items-center'>
                <div className='w-1/6  justify-center' >
                   <p className='text-4xl'>NexTrump</p>
                </div>
                <ul className= 'flex justify-center space-x-4  items-center w-4/6 h-20'>
                <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? "text-blue-700" : ""
                        }
                    >
                        Home
                    </NavLink></li>
                    <li><NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? "text-blue-700" : ""
                        }
                    >
                        Statistics
                    </NavLink></li>
                    <li><NavLink
                        to="/jobs"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? "text-blue-700" : ""
                        }
                    >
                       Jobs
                    </NavLink></li>
                    <li><NavLink
                        to="/blogs"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? "text-blue-700" : ""
                        }
                    >
                       Blogs
                    </NavLink></li>
                </ul>
                <CommonButton>Start Applying</CommonButton>




            </nav>
        </div>
    );
};

export default Header;