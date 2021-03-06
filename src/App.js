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
import {ProductDescription} from './components/product-description/product-description'
import {AddProduct} from './components/add-product/add-product'
import { UserProfile } from './components/user-profile/user-profile';
import { UserSettings } from './components/user-settings/user-settings';
import SearchResults from './components/search-results/search-results';

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
          <Route exact path="/search/results">
            <SearchResults />
          </Route>
          <ProtectedRoute path="/user/profile" component={UserProfile}/>
          <ProtectedRoute path="/user/settings" component={UserSettings}/>
          <Route exact path="/login">
            <Login formType='login' />
          </Route>
          <Route exact path="/signup">
            <Login formType='signup' />
          </Route>
          <ProtectedRoute path="/home" component={Home}/>
          <ProtectedRoute path="/products/add" component={AddProduct}/>
          <Route path="/product/:productID">
            <ProductDescription />
          </Route>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
