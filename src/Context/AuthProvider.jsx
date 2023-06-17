/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config.js';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
 
    const updateUser = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

  

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);

            if (loggedUser) {
                axios
                    .post('http://localhost:4000/jwt', {
                        email: loggedUser.email,
                    })
                    .then((data) => localStorage.setItem('access-token', data.data.token));
                setLoading(false);
            } else {
                localStorage.removeItem('access-token');
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        registerUser,
        updateUser,
        loading,
        loginUser,
        logoutUser,
        loginWithGoogle

    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
