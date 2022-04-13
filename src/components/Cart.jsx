import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';


const Cart = () => {

 
  //Do a map for each group of items and display them on the site.
  //Do the money math with the loops

  return (
    <div className='Cart'>
      <NavBar />
      <div className="CartContainer">
        <div>Shopping Cart</div>


        <div>
          <div>Subtotal</div>
          <div>Shipping Costs Are Included</div>
          <div className="Main__links">
            <NavLink to="/checkout" style={{ width: "100%" }}>Checkout</NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart