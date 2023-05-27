import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const { resetPassword } = useContext(AuthContext)
    const [emailError, setEmailError] = useState("")
    const [email, setEmail] = useState("")

    const handleForgetPassword = e => {
        e.preventDefault()
        const email = e.target.email.value
        resetPassword(email)
            .then(() => {
                Swal.fire(
                    'Email sent',
                    `Please check your email: ${email} to reset your password`,
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

    const handleEmail = e => {
        const input = e.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
            setEmailError("Invalid email. Please enter a valid email")
        }
        else {
            setEmailError("")
        }
        if (input === "") {
            setEmailError("")
        }
        setEmail(input)
    }
    return (
        <div className='mx-4'> 
            <div className='lg:w-1/2 w-full mx-auto my-8 shadow-2xl p-4'>
                <h1 className='text-2xl font-bold'>Forgot your password?</h1>
                <p className='font-semibold text-lg'>No worry! You can reset your password anytime. Put your email and hit reset my password. </p>
                <div className=''>
                    <form onSubmit={handleForgetPassword}>
                        <input type="email" placeholder="type your registered email" value={email} onChange={handleEmail} className="input input-bordered w-3/4" required name='email' />
                        <br />
                        <p className='text-error'>{emailError}</p>
                        <input className="btn  bg-red-800 hover:bg-red-700 mt-2" type='submit' name='submit' value="reset my password" />
                        <br />
                        <p><Link to="/login" className=' mt-2 btn btn-sm bg-green-900 '>Back to login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;