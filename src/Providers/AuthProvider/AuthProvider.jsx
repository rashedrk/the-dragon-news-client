import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    //crate user on signup 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //updating user profile
    const setProfile = (displayName,photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: `${displayName}`, photoURL: `${photoURL}`
        })
    }

    //sign in user
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // get if user is logged in or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("currently logged in user,", loggedUser);
            setUser(loggedUser);
        })

        //if user leave the site then the function don't looked for user / unmounted
        return () => unsubscribe()
    },[])

    //sing out user
    const logOut = () => {
        return signOut(auth)
    }
    
    const authInfo = {
        user,
        createUser,
        setProfile,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;