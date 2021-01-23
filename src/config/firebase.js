import firebase from 'firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: process.env.REACT_APP_ECOMM_FB_API_KEY,
    authDomain: process.env.REACT_APP_ECOMM_FB_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_ECOMM_FB_DB_URL,
    projectId: process.env.REACT_APP_ECOMM_FB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_ECOMM_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_ECOMM_FB_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_ECOMM_FB_APP_ID,
    measurementId: process.env.REACT_APP_ECOMM_FB_MEASUREMENT_ID
  };
const firebaseInstance = firebase.initializeApp(firebaseConfig);
firebase.analytics()
const firebaseAuth = firebase.auth
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
const fbStorageCore = firebase.storage()
const firebaseDB = firebase.firestore()
const storageRef = fbStorageCore.ref()
const FBstorage = {
  imageRef: storageRef.child('images'),
}
const FBTimeStamp = firebase.firestore.FieldValue.serverTimestamp

export {
  firebaseInstance,
  firebaseAuth,
  googleAuthProvider,
  facebookAuthProvider,
  FBstorage,
  firebaseDB,
  storageRef,
  FBTimeStamp,
}