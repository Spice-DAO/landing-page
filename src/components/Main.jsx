import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import Shop from '../components/Shop';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
  );
}

export default Main;