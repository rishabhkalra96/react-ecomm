import React from 'react';
import './tailwind.output.css';
import './App.scss';
import { Header } from './components/header/header';
import { ContentBody } from './components/content-body/content-body';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentBody/>
    </div>
  );
}

export default App;
