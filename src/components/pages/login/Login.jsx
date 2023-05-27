import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { login, withGoogle, withGihub  } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

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

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        login(email, password)
            .then(result => {
                navigate(location?.state?.pathname || "/", {replace:true})
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
    const handleGithubLogin = () =>{
        withGihub()
        .then(result=>navigate(location?.state?.pathname || "/", {replace:true}))
        .catch(error => {
            const message = error.message.slice(10)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${message}`,
            })

        })
    }
    const handleGoogleLogin=()=>{
        withGoogle()
        .then(result=>navigate(location?.state?.pathname || "/", {replace:true})
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
                <form onSubmit={handleLogin} className=''>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" value={email} onChange={handleEmail} className="input input-bordered w-5/6" required name='email' />
                    <p className='text-error'>{emailError}</p>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" value={password} onChange={handlePassword} placeholder="password" className="input input-bordered w-5/6" required name='password' />
                    <p className='text-error'>{passwordError}</p>
                    <label className="label">
                        <Link to="/forget-password" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>

                    <input className="btn btn-warning w-5/6" type='submit' name='submit' value="login" />
                    <div>
                        <p>New here? <Link to="/register" className='text-blue-800' state={location.state}>Please register</Link> </p>
                    </div>
                    <p className='text-sm my-1'>Login With</p>
                    
                </form>
                <div className='flex gap-2 '>
                        
                    <button className="btn btn-sm bg-red-800" onClick={handleGoogleLogin} >google</button>
                    <button onClick={handleGithubLogin} className="btn btn-sm">github</button>
                    </div>
            </div>
        </div>
    );
};

export default Login;