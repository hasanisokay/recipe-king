import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Recipe from '../recipe/Recipe';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import blurry from "../../../public/blurry.svg"
const ChefDetails = () => {
    const { id } = useParams();
    const { chefData } = useContext(AuthContext)
    const selectedChef = chefData.find(chef => chef.id == id)
    const {chefPicture, recipes, bio, chefName, yearsOfExperience, numberOfRecipes, likes}= selectedChef
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-4 my-4">
                <figure className='lg:w-5/12 h-72'><LazyLoadImage width={400} height={500} 
                effect='blur' delayTime={6} placeholderSrc={blurry} delayMethod='throttle'
                src={chefPicture} alt="Chef Picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold ">Chef: {chefName}</h2>
                    {/* likes, number of recipes, and years of experience. */}
                    <p className='text-lg font-semibold'>Bio: {bio}</p>
                    <p className='text-lg font-semibold'>{yearsOfExperience} Years of experience</p>
                    <p className='text-lg font-semibold'>Number of Recipes: {numberOfRecipes} </p>
                    <p className='text-lg font-semibold'>Likes: {likes}</p>
                </div>
            </div>
            <p className='font-bold text-xl text-center my-6 '>His Recipes...</p>
            <div className='grid lg:grid-cols-2 gap-4 mx-4'>
                {
                    recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} ></Recipe> )
                }
            </div>
        </div>
    );
};

export default ChefDetails;