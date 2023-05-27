import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Header = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const goToProfile = ()=>{
        navigate("/userdetails")
    }

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catcg(error=>{
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
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="normal-case text-xl text-gray-800 btn-warning btn btn-ghost">Recipe King</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div className='flex gap-2 items-center'>
                        <div className="h-10 w-10 rounded-full cursor-pointer" onClick={goToProfile}>
                            <img src={user?.photoURL} className='rounded-full h-10 w-10' title={user?.displayName}/>
                        </div>
                        <Link onClick={handleLogOut} className="btn btn-warning">Logout</Link>
                    </div> :<Link to="login" className="btn btn-warning">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;