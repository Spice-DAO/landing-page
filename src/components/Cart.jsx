import React, { useStat, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirtresize.png';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Cart = (props) => {

  //Do a map for each group of items and display them on the site.
  //Do the money math with the loops

  return (
    
    <div className='Cart'>
      <div className='ShopNavFix'>
      <NavBar
        hoodieCount={props.hoodieCount}
        tshirtCount={props.tshirtCount}
        homeColor={"#ffffff65"}
        bagColor={"#ffffff65"}
        cartColor={"#ffffff"}
      />
      </div>
      <div className="CartContainer">
        <div className="ShoppingCartTextContainer">Spring 2022 Drop</div>

        {/* Do a map over numbers to generate our card things */}
        <div className='ScrollBox'>
        {Array.from(Array(props.hoodieCount).keys()).map(item => <CartItem setCount={props.setHoodieCount} count={props.hoodieCount} cardImg={hoodie} itemName={"Member Hoodie"} itemCost={50000} itemColor={"Black"} itemSize={"Men's Medium"} />)}
        {Array.from(Array(props.tshirtCount).keys()).map(item => <CartItem setCount={props.setTshirtCount} count={props.tshirtCount} cardImg={tshirt} itemName={"Member T-shirt"} itemCost={25000} itemColor={"Black"} itemSize={"Men's Medium"} />)}
        </div>

        <div className='BottomContainer'>
          {/* This must be a flex with space around. */}
          <div className='SubtotalContainer'>
          <div className='BoldMidText'>Subtotal: <span style={{fontWeight:500}}>Free Shipping Worldwide</span></div>
            <div className='BiggerMediumText'>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
          </div>
          <div className="Main__links">
            <NavLink to="/checkout" style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem", fontWeight: "500"}}>Checkout</NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart