import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, sendEmailVerification } from "firebase/auth"
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("")
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true)
    const [chefData, setChefData] = useState([])


    const varifyEmail =()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth, email)
    }
    const register = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const setProfile = (displayName,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName,photoURL})
    }
    const withGoogle = ()=>{
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }
    const withGihub = ()=>{
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }
    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        signOut(auth);    
    }
    useEffect(() => {
        setLoading(true)
        fetch("https://recipe-king-hasanisokay.vercel.app/chefData")
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(error => console.log(error))
            setLoading(false)
    }, [])

    useEffect(()=>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])

    const authInfo = {user,setUser,loading, withGoogle, chefData, withGihub ,login, varifyEmail, register, setProfile, logOut, resetPassword}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;