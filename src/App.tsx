import React from 'react';
import './App.css';
import { Header } from './components/shared/header';
import { Banner } from './components/banner';
import { Candidates } from './components/candidates';
import { Footer } from './components/shared/footer';

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Candidates/>
      <Footer/>
    </>
  );
}

export default App;
