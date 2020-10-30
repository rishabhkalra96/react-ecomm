import React from 'react';
import './tailwind.output.css';
import './App.scss';
import { Header } from './components/header/header';
import { ContentBody } from './components/content-body/content-body';
import { Login } from './components/login/login';
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { useEffect, useState } from 'react'
import AuthContext from './providers/auth-provider';
import { firebaseAuth } from './config/firebase';
import { ProtectedRoute } from './components/protected-router/protected-router';
import {Home} from './components/home/home'

function App() {
  const [loggedInDetails, setLoggedInDetails] = useState({ isLoggedIn: false, currentUser: null})

  useEffect(() => {
    firebaseAuth().onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        console.log('logged out');
        setLoggedInDetails({ isLoggedIn: false, currentUser: null})
      } else {
        console.log('user logged in')
        setLoggedInDetails({ isLoggedIn: true, currentUser })
        // ContentBodyService.utilities.populateDatabase(dumpData)
      }
    })
  },[])

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
          <ProtectedRoute path="/home" component={Home}/>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
