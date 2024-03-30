import { useState } from 'react'

import './App.css'
import Header from './Components/Header'

import Portfolio from './Components/portafolio'
import Footer from './Components/Footer'
import Cv from './Components/Cv';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
      <Header />
      
      
      <Portfolio/>
      <Cv/>
      <Footer />
      
    </div>
  );
}

export default App
