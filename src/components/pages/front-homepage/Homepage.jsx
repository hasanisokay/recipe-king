import React, { useContext, useEffect, useState } from 'react';
import SingleChef from '../../singlechef/SingleChef';
import HomeBanner from '../homepage-banner/HomeBanner';
import Features from '../feature/Features';
import TopViewed from '../top-viewed/TopViewed';
import { AuthContext } from '../../../providers/AuthProvider';

const Homepage = () => {
    const {chefData} = useContext(AuthContext)
    return (
        <>
        <div className='mx-4'>
        { <HomeBanner></HomeBanner>}
        <h1 className='text-2xl font-semibold text-center'>See Our Cheffs and their recipes</h1>
        </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1 my-4 mx-4 '>
                {
                    chefData.map(chef => <SingleChef
                        key={chef.id}
                        chef={chef}
                    ></SingleChef>)
                }
            </div>
            {
                <Features></Features>
            }
            {
                <TopViewed></TopViewed>
            }
        </>
    );
};

export default Homepage;