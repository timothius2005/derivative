
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import ActiveSession from './pages/ActiveSession';
import Layout from './pages/Layout';
import  './App.css';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ <Home />} />
          <Route  path='About' element={<About />} />
          <Route  path='ActiveSession' element={<ActiveSession />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
