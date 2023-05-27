import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
       
        return <div className='text-center my-40'><button className="btn btn-ghost text-2xl text-orange-700 btn-xl loading">loading</button></div>
    }
    if(user){
      
        return children
    }
    else{
    
        return <Navigate to="/login" state={location}></Navigate>
    }
    
};

export default PrivateRoute;