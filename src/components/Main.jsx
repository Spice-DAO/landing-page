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
  const [availableHoodie, setAvailableHoodie] = useState(60);
  const [availableTshirt, setAvailableTshirt] = useState(60);


  countapi.get('spiceinternalhoodie', 'af4a9612-e8b2-4df3-9496-935ac3d8c42c').then((results) => {
    console.log("FROMAPI HOODIE::", results.value);
    setAvailableHoodie(60- results.value)
    if (results.value >= 59) {
      setSoldOutHoodie(true);
    };
  })

  countapi.get('spiceinternaltshirt', '75664dbd-e10b-457d-9a32-44f6a8685dea').then((results) => {
    console.log("FROMAPI SHIRT::", results.value);
    setAvailableTshirt(60- results.value)

    if (results.value >= 59) {
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