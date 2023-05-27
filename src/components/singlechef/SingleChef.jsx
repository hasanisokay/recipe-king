import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import blurry from "../../../public/blurry.svg"

const SingleChef = ({ chef }) => {

    const {chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, id}=chef
    return (
        <div>
            <div className="card lg:w-96 w-full mx-auto bg-base-100 shadow-xl">
            {/*  */}
                <figure className='h-72 w-full'>
                <LazyLoadImage  src={chefPicture} className='object-fill'  
                effect='blur' delayTime={6} placeholderSrc={blurry} delayMethod='throttle'
                
                loading='lazy' alt='chef photo' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p> {yearsOfExperience} Years of Experience</p>
                    <p> Number of Recipes: {numberOfRecipes} </p>
                    <p> Likes: {likes} </p>

                    <div className="card-actions ">
                        <Link to={`/${id}`} ><button className="btn">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;