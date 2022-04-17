import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Hoodie from "../components/Hoodie"
import Tshirt from "../components/Tshirt"

const Main = () => {

  const [hoodieCount, setHoodieCount] = useState(false);
  const [tshirtCount, setTshirtCount] = useState(false);
  const [soldOut, setSoldOut] = useState(true);




  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop
        setHoodieCount={setHoodieCount}
        setTshirtCount={setTshirtCount}
        hoodieCount={hoodieCount}
        tshirtCount={tshirtCount}
        soldOut={soldOut}
        />} />
      <Route path='/cart' element={<Cart 
              setHoodieCount={setHoodieCount}
              setTshirtCount={setTshirtCount}
              hoodieCount={hoodieCount}
              tshirtCount={tshirtCount} />} />
      <Route path='/checkout' element={<Checkout 
              hoodieCount={hoodieCount}
              tshirtCount={tshirtCount}
              soldOut={soldOut}
              />} />
              
      <Route path="/hoodie" element={
        <Hoodie
        setHoodieCount={setHoodieCount}
        hoodieCount={hoodieCount}
        tshirtCount={tshirtCount}
        soldOut={soldOut}
        />} />
      
      <Route path="/tshirt" element={
        <Tshirt
        setTshirtCount={setTshirtCount}
        hoodieCount={hoodieCount}
        tshirtCount={tshirtCount}
        soldOut={soldOut}
        />} />
      

    </Routes>
  );
}

export default Main;