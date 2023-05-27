import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const location = useLocation()
    const { register, setProfile, withGihub, withGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [email, setEmail] = useState("")

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
    const handlePassword = e => {
        const input = e.target.value;
        if (input.length < 6) {
            setPasswordError("Password must be at least 6 character long")
        }
        else if (input.length > 5) {
            setPasswordError("")
        }
        if (input === "") {
            setPasswordError("")
        }
        setPassword(input)
    }

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photourl = form.photourl.value

        register(email, password)
            .then(result => {
                const user = result.user;
                setProfile(name, photourl)
                    .then()
                    .catch()
                navigate(location?.state?.pathname || "/")
            })
            .catch(error => {
                const message = error.message.slice(10)
                console.log(error, error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${message}`,
                })
            })
    }
    const handleGithubSignUp = () => {
        withGihub()
            .then(result => navigate(location?.state?.pathname || "/"))
            .catch(error => {
                const message = error.message.slice(10)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${message}`,
                })

            })
    }
    const handleGoogleSignUp = () => {
        withGoogle()
            .then(result => navigate(location?.state?.pathname || "/")
            )
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
            <div className="card-body shadow-xl mx-auto lg:w-1/2 my-4">
                <form onSubmit={handleRegister}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered w-5/6" required name='name' />

                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo url" className="input input-bordered w-5/6" required name='photourl' />

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered w-5/6" required name='email'
                        value={email} onChange={handleEmail} />
                    <p className='text-error'>{emailError}</p>

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered w-5/6" required name='password'
                        value={password} onChange={handlePassword}
                    />
                    <p className='text-error'>{passwordError}</p>
                    
                    <br />
                    <input className="btn btn-warning mt-4  w-5/6" type='submit' name='submit' value="register" />
                    <div>
                        <p>Already have an account? <Link to="/login" className='text-blue-800'>Please login</Link> </p>
                    </div>
                    <p className='text-sm my-1'>Continue With</p>
                    
                </form>
                <div className='flex gap-2 '>

                        <button className="btn btn-sm bg-red-800" onClick={handleGoogleSignUp} >google</button>
                        <button onClick={handleGithubSignUp} className="btn btn-sm">github</button>
                    </div>
            </div>
        </div>
    );
};

export default Register;