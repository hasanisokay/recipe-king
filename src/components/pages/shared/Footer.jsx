import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pt-12 bg-base-200 text-center text-lg'>
            <p>© 2007 - 2023 recipeking.org - <Link to="contact-us">Contact Us</Link> </p>
        </div>
    );
};

export default Footer;