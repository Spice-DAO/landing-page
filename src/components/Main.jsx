import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

const Main = () => {

  const [hoodieCount, setHoodieCount] = useState(0);
  const [tshirtCount, setTshirtCount] = useState(0);


  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop
        setHoodieCount={setHoodieCount}
        setTshirtCount={setTshirtCount}
        hoodieCount={hoodieCount}
        tshirtCount={tshirtCount} />} />
      <Route path='/cart' element={<Cart 
              setHoodieCount={setHoodieCount}
              setTshirtCount={setTshirtCount}
              hoodieCount={hoodieCount}
              tshirtCount={tshirtCount} />} />
      <Route path='/checkout' element={<Checkout 
              setHoodieCount={setHoodieCount}
              setTshirtCount={setTshirtCount}
              hoodieCount={hoodieCount}
              tshirtCount={tshirtCount} />} />
    </Routes>
  );
}

export default Main;