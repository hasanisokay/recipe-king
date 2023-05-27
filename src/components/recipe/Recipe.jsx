import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Swal from 'sweetalert2';
import 'react-lazy-load-image-component/src/effects/blur.css';
import blurry from "../../../public/blurry.svg"

const Recipe = ({ recipe }) => {
    const { name, image, description, ingredients, rating, method } = recipe
    const handleFavourite =()=>{
        console.log("added fav");
        setBtnFavouriteDisable(true)
        Swal.fire(
            'Favourite!',
            'Added to favourite items',
            'success'
          )
    }

    const [btnFavouriteDisable, setBtnFavouriteDisable] = useState(false)
    return (
        <div>
            <div className="card lg:w-5/6 mx-auto h-full bg-base-100 shadow-xl">
                <figure className='h-72'><LazyLoadImage src={image} 
                effect='blur' delayTime={6} placeholderSrc={blurry}
                delayMethod='throttle'
                className='object-fill w-full h-full' alt="recipe image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='my-1'> <span className='font-semibold'>Ingredients:</span> {ingredients.slice(0,6).map((ingredient, index) => <p key={index}>{ingredient}</p> )}</div>
                    <p><span className='font-semibold'>Method:</span> {method}</p>
                    <div className="card-actions">
                        <p><span className='font-semibold'>Rating</span> {rating}</p>
                        <button className='btn' disabled={btnFavouriteDisable} onClick={handleFavourite}>Favourite</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;