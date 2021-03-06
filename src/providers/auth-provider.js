import React from 'react';
import {firebaseInstance, firebaseAuth} from './../config/firebase';

const AuthContext = React.createContext({isLoggedIn: false, currentUser: null});

const getbasicUserObject = (currentUser) => {
    return {
        email: currentUser.email,
        id: currentUser.uid,
        name: currentUser.displayName,
    }
}

const googleProvider = new firebaseAuth.GoogleAuthProvider();
const facebookProvider = new firebaseAuth.FacebookAuthProvider();

const loginWithGoogle = () => {
    return firebaseAuth().signInWithPopup(googleProvider)
}

const loginWithFacebook = () => {
    return firebaseAuth().signInWithPopup(facebookProvider)
}

const logout = () => firebaseAuth().signOut()
export default AuthContext
export {
    AuthContext,
    firebaseInstance,
    loginWithGoogle,
    loginWithFacebook,
    logout,
    getbasicUserObject,
} 