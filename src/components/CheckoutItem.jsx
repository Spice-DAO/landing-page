import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CheckoutItem = (props) => {

// Largely going to mirror cards in construction

  return (
    <div className="CheckoutItemContainer">
      <div className='CheckoutItemCard'> <img src={props.cardImg} className="ObjectFitContain"></img>  </div>
        {/* Details  */}
      <div>
          <div style={{fontWeight: "bold"}}>{props.itemName}</div>
          <div >Color: Black</div>
          <div>Size: Men's Medium</div>
          <div>Quantity: {props.itemCount} @ {numberWithCommas(props.itemCost)} $SPICE </div>
      </div>
    </div>
  )
}

export default CheckoutItem