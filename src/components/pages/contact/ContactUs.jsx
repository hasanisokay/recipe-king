import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        Swal.fire(
            'Thanks',
            'Your feedback has been stored. We will contact you if need.',
            'success'
          )
    }
    return (
        <div>
            <div>
                <h1 className='my-4 font-bold text-2xl text-center'>Please fill up the form below</h1>
                <form className='shadow-xl w-[90%] mx-auto my-8' onSubmit={handleSubmit}>
                    <label className='block text-gray-700 text-sm font-bold my-2'>Name</label>
                    <input type="text" name="user_name" required className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Your Name' />
                    <label className='block text-gray-700 text-sm font-bold my-2'>Email</label>
                    <input type="email" name="user_email" required className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Your e-mail' />
                    <br />
                    <label className='block text-gray-700 text-sm font-bold my-2'>Message</label>
                    <input type="text" name="message" required className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight py-8 focus:outline-none focus:shadow-outline' placeholder='Type Your Message...' />
                    <br />
                    <input type="submit" value="Send" className='shadow border rounded w-full py-2 px-3 text-gray-700 mt-4 leading-tight focus:outline-none focus:shadow-outline font-bold cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;