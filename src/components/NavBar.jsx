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
const NavBar = (props) => {

    //This can be used to store the items that they have requested.
    //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
    //const [msg, setMsg] = useState('Shop Merch');

    return (
        <div className='NavContainer'>
            <NavLink to="/"><img className='Nav__logo' src={logo} alt="Spice DAO logo" /></NavLink>
            <div className='NavContainer__icon_container'>
            <div className='NavContainer__icon_group'>
            <NavLink to="/"><FaHome size={30} className='NavContainer__icons' style={{color: props.homeColor}}  /></NavLink>
            <div style={{color: props.homeColor, fontWeight: "400", fontSize:"15px"}}>Home</div>
            </div>
            <div className='NavContainer__icon_group'>
            <NavLink to="/shop"><FaShoppingBag size={30} style={{color: props.bagColor}} /></NavLink>
            <div style={{color: props.bagColor, fontWeight: "400", fontSize:"15px"}}> Shop</div>
            </div>
            <div className='NavContainer__icon_group'>
            <NavLink to="/cart"><FaShoppingCart size={30} className='NavContainer__icons' style={{color: props.cartColor}} /></NavLink>
                {/* DO AN INTERPOLATION BELOW TO GET THE NUMBER OF ITEMS */}
                {/* Ternary for cart parenthesees */}
            {(props.hoodieCount + props.tshirtCount === 0) ? <div style={{color: props.cartColor, fontWeight: "400", fontSize:"15px"}}>Cart</div> : <div style={{color: props.cartColor, fontWeight: "400", fontSize:"15px"}}>Cart ({props.hoodieCount + props.tshirtCount})</div> }
            </div>
            </div>
        </div>

    )
}

export default NavBar