import React from 'react';
import './tailwind.output.css';
import './App.scss';
import { Header } from './components/header/header';
import { ContentBody } from './components/content-body/content-body';
import {Login} from './components/login/login';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Route exact path="/">
        <ContentBody />
      </Route>
      <Route exact path="/login">
        <Login formType='login'/>
      </Route>
      <Route exact path="/signup">
        <Login formType='signup'/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
