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

//take numbers as props
const NavBar = () => {

    //This can be used to store the items that they have requested.
    //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
    //const [msg, setMsg] = useState('Shop Merch');

    return (
        <div className='NavContainer'>
            <img className='Nav__logo' src={logo} alt="Spice DAO logo" />
            <div className='NavContainer__icon_group'>
                <NavLink to="/"><FaHome size={40} className='NavContainer__icons' /></NavLink>
                <span>Home</span>
            </div>
            <div className='NavContainer__icon_group'>
            <NavLink to="/shop"><FaShoppingBag size={40} className='NavContainer__icons' /></NavLink>
                <span>Shop</span>
            </div>
            <div className='NavContainer__icon_group'>
            <NavLink to="/cart"><FaShoppingCart size={40} className='NavContainer__icons' /></NavLink>
                {/* DO AN INTERPOLATION BELOW TO GET THE NUMBER OF ITEMS */}
                {/* Ternary for cart parenthesees */}
                <span>Cart</span>
            </div>
        </div>

    )
}

export default NavBar