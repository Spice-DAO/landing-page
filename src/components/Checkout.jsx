import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"


const Checkout = (props) => {
 
    //This can be used to store the items that they have requested.
    //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
    //const [msg, setMsg] = useState('Shop Merch');

  return (
    <div className='Checkout'>
      <NavBar
      hoodieCount={props.hoodieCount}
      tshirtCount={props.tshirtCount}
      />    <div className='CheckoutContainer'>

    </div>

    </div>
  
  )
}

export default Checkout