import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Cart = (props) => {


  //Do a map for each group of items and display them on the site.
  //Do the money math with the loops

  return (
    <div className='Cart'>
      <NavBar
        hoodieCount={props.hoodieCount}
        tshirtCount={props.tshirtCount}
      />
      <div className="CartContainer">
        <div className="ShoppingCartTextContainer">Shopping Cart</div>

        {/* Do a map over numbers to generate our card things */}
        {Array.from(Array(props.hoodieCount).keys()).map(item => <CartItem/>)}
        {Array.from(Array(props.tshirtCount).keys()).map(item => <CartItem/>)}

        <div className='BottomContainer'>
          {/* This must be a flex with space around. */}
          <div className='SubtotalContainer'>
            <div>Subtotal</div>
            <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
          </div>
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