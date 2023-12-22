import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebse"

export const Authpro = createContext()
const Authprovider = ({children}) => {
    const [user, setUser] = useState()


    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const LogIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()
    const GoogleLogIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (presentUser)=>{
            setUser(presentUser)
        })
        return unSubscribe
    }, [])


    const authinfo = {
        signUp,
        LogIn,
        GoogleLogIn,
        user,

    }
    return (
        <Authpro.Provider value={authinfo}>
            {
                children
            }
        </Authpro.Provider>
    );
};

export default Authprovider;