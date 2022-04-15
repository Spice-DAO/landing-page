import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';
import { Card } from "react-bootstrap";
import CheckoutItem from '../components/CheckoutItem';
import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirtresize.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Checkout = (props) => {

  //This can be used to store the items that they have requested.
  //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
  //const [msg, setMsg] = useState('Shop Merch');

  return (
    <div className='Checkout'>
      <NavBar
        hoodieCount={props.hoodieCount}
        tshirtCount={props.tshirtCount}
      />
      <div className='CheckoutInputContainer'>
        <div></div><NavLink to="/shop">&lt; Back To cart</NavLink><div>
          <Card><div>Thanks For Your Purchase</div></Card>
          <div>
            <form><input type="text"></input></form>
          </div>
        </div>
      </div>


      <div className='CheckoutDetailsContainer'>
        <div>In your cart</div>
        <div className='CheckoutRowFlex'>
          <div>Subtotal</div>
          <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
        </div>
        <div className='CheckoutRowFlex'>

          <div>Estimated Shipping Costs</div>
          <div>FREE</div>
        </div>

        <div className='CheckoutRowFlexBorder'>
          <div>TOTAL</div>
          <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
        </div>

        {/* Two ternarys here on if hoodieCount != 0 */}
        {props.hoodieCount === 0 ? <div></div> : <CheckoutItem cardImg={hoodie} itemName={"Member Hoodie"} itemCount={props.hoodieCount} itemCost={50000} />}
        {/* Add Grey Line here */}
        {props.tshirtCount === 0 ? <div></div> : <CheckoutItem cardImg={tshirt} itemName={"Member T-Shirt"} itemCount={props.tshirtCount} itemCost={25000} />}
        {/* Add Grey Line here */}
      </div>

    </div>

  )
}

export default Checkout