import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Homepage from '../pages/front-homepage/Homepage';
import Blog from '../pages/blog/Blog';
import ContactUs from '../pages/contact/ContactUs';
import ForgetPassword from '../pages/forget-password/ForgetPassword.jsx';
import Tos from '../pages/tos/Tos.jsx';
import ChefDetails from '../chefDetails/ChefDetails.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import ErrorPage from '../errorpage/ErrorPage.jsx';
import UserDetails from '../pages/userDetails/UserDetails.jsx';
export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Homepage></Homepage>
            },
            {
                path:"blog",
                element: <Blog></Blog>
            },
            {
                path:"contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path:"login",
                element: <Login></Login>
            },
            {
                path: "register",
                element:<Register></Register>
            },
            {
                path:"forget-password",
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: "reset-password",
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path:"/:id",
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>
            },
            {
                path:"/userdetails",
                element: <PrivateRoute><UserDetails></UserDetails></PrivateRoute>
            }
        ]
    },
 
])

const Routes = () => {

    return (
        <div>
            
        </div>
    );
};

export default Routes;