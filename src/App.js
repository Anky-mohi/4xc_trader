import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';

import About from './components/About';
import Accounttype from './components/Accounttype';
import Resources from './components/Resources';
import Learn from './components/Learn';
import Pertner from './components/Pertner';
import Trade from './components/Trade';




const App = () => {

  return (
    <>
    
     <Routes>
    

        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Trade' element={<Trade/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Accounttype' element={<Accounttype/>} />
        <Route path='/Resources' element={<Resources/>} />
        <Route path='/Learn' element={<Learn/>} />
        <Route path='/Pertner' element={<Pertner/>} />

        


       

      </Routes>
    
  

    </>
  )
}

export default App