import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Hoodie from "../components/Hoodie"
import Tshirt from "../components/Tshirt"
import countapi from 'countapi-js';
import { ethers } from 'ethers';
import erc20ABI from "./genericABI.json";





const Main = () => {


  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAndSpice, setWalletAndSpice] = useState(false);
  const spiceTokenAddress = "0x9b6dB7597a74602a5A806E33408e7E2DAFa58193";
  const [provider, setProvider] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState(null);

  const contract = new ethers.Contract(spiceTokenAddress, erc20ABI, ethers.getDefaultProvider());

  const [buttonText, setButtonText] = useState('Connect Wallet');
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");




  const connectWalletHandler = () => {
    if ((window).ethereum) {
      (window).ethereum.request({ method: 'eth_requestAccounts' })
        .then((result) => {
          //Provides a list of connected eth
          accountChangedHandler(result[0]);
          setConnectedAddress(result[0]);
          setWalletConnected(true);
          setButtonText('Check For $SPICE');

        })
    } else {
      setErrorMessage("Please Install A Wallet!");
    }
  }

  const checkSpiceHandler = async () => {
    connectWalletHandler();
    if ((window).ethereum) {
      await contract.balanceOf(connectedAddress)
        .then((result) => {
          setButtonText("Checking...");
          if (result.toString() !== "0") {
            setWalletAndSpice(true);
          }
          else {
            setButtonText("No $SPICE Found");
          }
        })
    } else {
      setErrorMessage("Please Install A Wallet!");
    }

  }


  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  }


  const [hoodieCount, setHoodieCount] = useState(false);
  const [tshirtCount, setTshirtCount] = useState(false);
  const [soldOutHoodie, setSoldOutHoodie] = useState(false);
  const [soldOutTshirt, setSoldOutTshirt] = useState(false);
  const [availableHoodie, setAvailableHoodie] = useState(50);
  const [availableTshirt, setAvailableTshirt] = useState(50);
  const test = false;




  if(test){
    countapi.get('spicedao.hoodie.test', '3cee1f92-c8ef-46fc-8378-5d330ee911f7').then((results) => {
      //console.log("FROMAPI HOODIE::", results.value);
      setAvailableHoodie(50 - results.value)
      if (results.value >= 50) {
        setSoldOutHoodie(true);
      };
    })
  
    countapi.get('spicedao.tshirt.test', '5c0ce0ca-2786-419e-9c3f-d7eff5c152e0').then((results) => {
      //console.log("FROMAPI SHIRT::", results.value);
      setAvailableTshirt(49 - results.value)
  
      if (results.value >= 49) {
        setSoldOutTshirt(true);
      };
    })
  
  }

  if(!test){
    countapi.get('spicedao.hoodie', '82e12bc6-f99e-42ea-80e5-6eda087c59ca').then((results) => {
      //console.log("FROMAPI HOODIE::", results.value);
      setAvailableHoodie(50 - results.value)
      if (results.value >= 50) {
        setSoldOutHoodie(true);
      };
    })
  
    countapi.get('spicedao.tshirt', 'cb02f5cc-9ada-4604-bf16-e4c0ee44f7bd').then((results) => {
      //console.log("FROMAPI SHIRT::", results.value);
      setAvailableTshirt(49 - results.value)
  
      if (results.value >= 49) {
        setSoldOutTshirt(true);
      };
    })
  
  }




  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home
      walletAndSpice={walletAndSpice}
      walletConnected={walletConnected} 
      connectWalletHandler={connectWalletHandler}
      buttonText={buttonText}
      checkSpiceHandler={checkSpiceHandler}/>} />
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