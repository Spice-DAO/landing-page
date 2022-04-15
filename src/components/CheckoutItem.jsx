import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'

import { Card } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CheckoutItem = (props) => {

// Largely going to mirror cards in construction

  return (
    <div className="CheckoutItemContainer">
        
        <Card style={{ width: '6rem', height: "5.5rem" }}>
        <Card.Img variant="bottom" src={props.cardImg} />
      </Card>


        {/* Details  */}
      <div>
          <div>{props.itemName}</div>
          <div>Color: Black</div>
          <div>Size: Men's Medium</div>
          <div>Quantity: {props.itemCount} @ {props.itemCost} $SPICE </div>
      </div>
    </div>
  )
}

export default CheckoutItem