import React from 'react';
import './App.css';
import { Header } from './components/shared/header';
import { Banner } from './components/banner';
import { Candidates } from './components/candidates';

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Candidates/>
    </>
  );
}

export default App;
