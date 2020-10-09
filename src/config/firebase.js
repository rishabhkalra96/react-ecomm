import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBq_JwdnMOW94QzFs8N1I27HoRw1yG-KII",
    authDomain: "react-ecomm-61f67.firebaseapp.com",
    databaseURL: "https://react-ecomm-61f67.firebaseio.com",
    projectId: "react-ecomm-61f67",
    storageBucket: "react-ecomm-61f67.appspot.com",
    messagingSenderId: "335658446317",
    appId: "1:335658446317:web:2ca180526849fbb1af8be4",
    measurementId: "G-VM9HPE8ER8"
  };
const firebaseInstance = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export {
  firebaseInstance,
  firebaseAuth,
  googleAuthProvider,
  facebookAuthProvider,
}