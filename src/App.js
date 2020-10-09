import React from 'react';
import './tailwind.output.css';
import './App.scss';
import { Header } from './components/header/header';
import { ContentBody } from './components/content-body/content-body';
import { Login } from './components/login/login';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react'
import AuthContext, { firebaseInstance } from './providers/auth-provider';

function App() {
  const [loggedInDetails, setLoggedInDetails] = useState({ isLoggedIn: false, currentUser: null, logout: logOutUser })
  useEffect(() => {
    setupAuthListener()
  },[])


  function logOutUser() {
    firebaseInstance.auth().signOut().then(() => { }).catch(err => {
      console.log('error while logging out the user', err);
    })
  }


  function setupAuthListener() {
    firebaseInstance.auth().onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        console.log('logged out');
        setLoggedInDetails({ isLoggedIn: false, currentUser: null, logout: logOutUser })
      } else {
        console.log('user logged in')
        setLoggedInDetails({ isLoggedIn: true, currentUser, logout: logOutUser })
      }
    })
  }
  return (
    <AuthContext.Provider value={{ ...loggedInDetails }}>
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/">
            <ContentBody />
          </Route>
          <Route exact path="/login">
            <Login formType='login' />
          </Route>
          <Route exact path="/signup">
            <Login formType='signup' />
          </Route>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
