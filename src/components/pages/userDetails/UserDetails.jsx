import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserDetails = () => {
    const { user, varifyEmail } = useContext(AuthContext)
    const {photoURL, emailVerified, displayName, email} = user
    const handleVarifyEmail =()=>{
        varifyEmail()
        .then(result=>{
            console.log(result);
            Swal.fire(
                'Email sent!',
                'Varification email has been send. Please check your spam folder if not found.',
                'success'
              )
        })
        .catch(error => {
            const message = error.message.slice(10)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${message}`,
            })

        })
    }
    return (
        <div>
            <div className="card lg:w-1/2 my-6 mx-auto bg-gray-400 shadow-2xl">
                <figure className='h-96'><img src={photoURL} className='w-full h-full' alt="user photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {displayName}</h2>
                    <p>User email: {email}</p>
                    <p>Email Verified: {emailVerified? "Yes":"No"}</p>
                    <div className="card-actions">
                        <button className="btn" onClick={handleVarifyEmail}>Varify Email</button>
                        <Link to='/reset-password'><button className="btn ">Reset your password</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserDetails;