import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app)

const AuthProvider = ({children}) => {
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
    const user = null;
    
    const authInfo = {
        user,
        createUser,
        setProfile,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;