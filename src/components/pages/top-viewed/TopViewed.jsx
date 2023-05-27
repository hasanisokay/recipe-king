import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import blurry from "../../../../public/blurry.svg"
const TopViewed = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-16 mb-4'>Top Viewed in this month</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mx-4 gap-2'>
                <div className="card lg:w-96 w-full mx-auto bg-base-100 shadow-xl">
                    <figure className='h-96'>
                        <LazyLoadImage
                            height={300}
                            effect='blur' delayTime={6} placeholderSrc={blurry} delayMethod='throttle'
                            src="https://i.ibb.co/DbJDF8S/top-viewed-1.jpg"
                            width={400}
                        />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold">Vagetable Salad</h2>
                        <p>Vagetable salad with smashed potato...</p>
                    </div>
                </div>
                <div className="card lg:w-96 w-full mx-auto bg-base-100 shadow-xl">
                    <figure className='h-96'>
                    <LazyLoadImage
                            effect='blur'
                            height={300}
                            src="https://i.ibb.co/M8mj5vK/top-viewed-2.jpg"
                            width={400}
                        />
                        
                        </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold">Arabic Tumatun</h2>
                        <p>Tomato with grilled chicken...</p>
                    </div>
                </div>
                <div className="card lg:w-96 w-full mx-auto bg-base-100 shadow-xl">
                    <figure className='h-96'>
                    <LazyLoadImage
                            effect='blur'
                            height={300}
                            src="https://i.ibb.co/L6N4z3V/top-viewed-3.jpg"
                            width={400}
                        />
                        
                        </figure>
                    <div className="card-body text-center">
                        <h2 className="tex-xl font-semibold ">Chocokalte Cake</h2>
                        <p>Simple delicious cake with egg and flower...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopViewed;