import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logDOM } from '@testing-library/react';
import logo from '../../src/logo2.png';
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { NavLink } from 'react-router-dom';



// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'

//logo, home, shop, cart
//vertical flex centered.
//Dont worry about mobile display right now we can get that later.
//This needs to get some store values from app as well


const NavBar = () => {
 
    //This can be used to store the items that they have requested.
    //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
    //const [msg, setMsg] = useState('Shop Merch');

  return (
    <div className='NavContainer'>
        <img className='Main__logo' src={logo} alt="Spice DAO logo" />
        <NavLink to="/"><FaHome size={40} className='NavContainer__icons'/></NavLink>
        <div>Home</div>
        <FaShoppingBag size={40}  className='NavContainer__icons'/>
        <div>Shop</div>
        <FaShoppingCart size={40}  className='NavContainer__icons'/>
        {/* DO AN INTERPOLATION BELOW TO GET THE NUMBER OF ITEMS */}
        <div>Cart</div>
    </div>
  
  )
}

export default NavBar