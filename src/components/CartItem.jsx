import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CartItem = (props) => {

  //Small border on the bottom of eahc item.

  //Props
  //Image
  //Description
  //Price


  //Gonna be a display flex algned in row with some margins on it, not too hard.

  return (
    <div className='CartItemContainer'>
      <div className='CartItemCard'> <img src={props.cardImg}></img>  </div>

        <div className="CartItemDetailsContainer">
          <div className='CartItemSpacer' style={{marginBottom: "1rem"}}>
          <div className='BoldMidText'>{props.itemName}</div>
          <div className='BiggerMediumText'>{numberWithCommas(props.itemCost)} $SPICE</div>
          </div>
          <div className='CartItemSpacer'>
            <div style={{fontWeight:"400"}}>{props.itemColor}</div>
            <div style={{color: "#ded5b5", fontWeight:"700", cursor: "pointer"}} onClick={() => props.setCount(false)}>Remove</div>
            </div>
          <div style={{fontWeight:"400"}}>{props.itemSize}</div>
        </div>
    </div>
  )
}

export default CartItem