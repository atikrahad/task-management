import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebse"
import PropTypes from "prop-types";

export const Authpro = createContext(null)
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const LogIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()
    const GoogleLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const Logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setLoading(false)
            setUser(user)
        })
        return unSubscribe;
    }, [])


    const authinfo = {
        signUp,
        LogIn,
        GoogleLogIn,
        user,
        loading, 
        setLoading,
        Logout
    }
    return (
        <Authpro.Provider value={authinfo}>
            {
                children
            }
        </Authpro.Provider>
    );
};
Authprovider.propTypes = {
    children: PropTypes.node,
  };
export default Authprovider;