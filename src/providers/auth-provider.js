import React from 'react';
import {firebaseInstance, firebaseAuth, googleAuthProvider, facebookAuthProvider} from './../config/firebase';

const AuthContext = React.createContext({isLoggedIn: false, currentUser: null});

const loginWithGoogle = () => {
    return firebaseAuth().signInWithPopup(googleAuthProvider)
}

const loginWithFacebook = () => {
    return firebaseAuth().signInWithPopup(facebookAuthProvider)
}
export default AuthContext
export {
    AuthContext,
    firebaseInstance,
    loginWithGoogle,
    loginWithFacebook
} 