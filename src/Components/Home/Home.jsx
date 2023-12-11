import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Company from '../Company/Company';
import Banner from '../Banner/Banner';
import SectionHeader from '../SectionHeader/SectionHeader';
import Category from '../Category/Category';

import './Home.css'



const Home = () => {
    let companies = useLoaderData();
    const [all, setAll] = useState(false);
    if (!all) {
        companies = companies.slice(0, 4)
    }
    const allButton = () => {
        setAll(!all);

    }
    
    return (
        <div className='home-container px-20 mt-24'>
            <Banner></Banner>
            <SectionHeader>Job Category List</SectionHeader>
            <Category></Category>
            <SectionHeader>Featured Jobs</SectionHeader>
            <div className='grid gap-x-4 gap-y-8 grid-cols-2'>
                {companies.map(company => <Company key={company.id} company={company}></Company>)}
            </div>

            <button className={!all ? 'block' : 'hidden'} onClick={allButton}>View All</button>
        </div>
    );
};

export default Home;