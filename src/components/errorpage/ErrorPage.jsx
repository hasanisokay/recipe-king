import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from "../../../public/error404.webp"
const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div className='text-center overflow-hidden'>
            <h1 className='text-red-600 text-xl font-bold'>{status}</h1>
            <h1 className='text-red-900 text-xl font-bold mb-4'> {error ?.message}</h1>
            <Link to="/" className='btn text-xl font-semibold bg-yellow-400 p-2 rounded'>Back to Home</Link>
            <div className='lg:w-5/6 mx-auto'><img src={errorImage} className='shadow-xl rounded mt-2 h-96 w-full' alt="error" /></div>
        </div>
    );
};

export default ErrorPage;