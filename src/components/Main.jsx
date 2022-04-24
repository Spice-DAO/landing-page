import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Hoodie from "../components/Hoodie"
import Tshirt from "../components/Tshirt"
import countapi from 'countapi-js';






const Main = () => {

  const [hoodieCount, setHoodieCount] = useState(false);
  const [tshirtCount, setTshirtCount] = useState(false);
  const [soldOutHoodie, setSoldOutHoodie] = useState(false);
  const [soldOutTshirt, setSoldOutTshirt] = useState(false);
  const [availableHoodie, setAvailableHoodie] = useState(50);
  const [availableTshirt, setAvailableTshirt] = useState(50);


  countapi.get('spicedao.hoodie', '82e12bc6-f99e-42ea-80e5-6eda087c59ca').then((results) => {
    //console.log("FROMAPI HOODIE::", results.value);
    setAvailableHoodie(50 - results.value)
    if (results.value >= 50) {
      setSoldOutHoodie(true);
    };
  })

  countapi.get('spicedao.tshirt', 'cb02f5cc-9ada-4604-bf16-e4c0ee44f7bd').then((results) => {
    //console.log("FROMAPI SHIRT::", results.value);
    setAvailableTshirt(50 - results.value)

    if (results.value >= 50) {
      setSoldOutTshirt(true);
    };
  })



  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop
        setHoodieCount={setHoodieCount}
        setTshirtCount={setTshirtCount}
        hoodieCount={hoodieCount}
        tshirtCount={tshirtCount}
        soldOutHoodie={soldOutHoodie}
        soldOutTshirt={soldOutTshirt}
        availableHoodie={availableHoodie}
        availableTshirt={availableTshirt}
      />} />
      <Route path='/cart' element={<Cart
        setHoodieCount={setHoodieCount}
        setTshirtCount={setTshirtCount}
        hoodieCount={hoodieCount}
        tshirtCount={tshirtCount} />} />
      <Route path='/checkout' element={<Checkout
        setHoodieCount={setHoodieCount}
        setTshirtCount={setTshirtCount}
        hoodieCount={hoodieCount}
        tshirtCount={tshirtCount}
        soldOutHoodie={soldOutHoodie}
        soldOutTshirt={soldOutTshirt}
        setSoldOutHoodie={setSoldOutHoodie}
        setSoldOutTshirt={setSoldOutTshirt}
        setAvailableHoodie={setAvailableHoodie}
        setAvailableTshirt={setAvailableTshirt}
      />} />

      <Route path="/hoodie" element={
        <Hoodie
          setHoodieCount={setHoodieCount}
          hoodieCount={hoodieCount}
          tshirtCount={tshirtCount}
          soldOutHoodie={soldOutHoodie}
          availableHoodie={availableHoodie}

        />} />

      <Route path="/tshirt" element={
        <Tshirt
          setTshirtCount={setTshirtCount}
          hoodieCount={hoodieCount}
          tshirtCount={tshirtCount}
          soldOutTshirt={soldOutTshirt}
          availableTshirt={availableTshirt}

        />} />

    </Routes>
  );
}

export default Main;