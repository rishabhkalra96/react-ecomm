import React from 'react';
import './App.scss';
import { Header } from './components/header/header';
import { ContentBody } from './components/content-body/content-body';
import { CommonFeatureSearch } from './components/common-feature-search/common-feature-search';

function App() {
  return (
    <div className="App">
      <Header />
      <CommonFeatureSearch/>
      <ContentBody/>
    </div>
  );
}

export default App;
