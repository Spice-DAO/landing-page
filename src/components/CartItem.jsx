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

const CartItem = (props) => {

  //Small border on the bottom of eahc item.

  //Props
  //Image
  //Description
  //Price


  //Gonna be a display flex algned in row with some margins on it, not too hard.

  return (
    <div className='CartItemContainer'>
      <Card style={{ width: '9rem', height: "8.5rem" }}>
        <Card.Img variant="bottom" src={props.cardImg} />
      </Card>
        <div className="CartItemDetailsContainer">
          <div className='CartItemSpacer' style={{marginBottom: "1.5rem"}}>
          <div className='BoldMidText'>{props.itemName}</div>
          <div className='BiggerMediumText'>{numberWithCommas(props.itemCost)} $SPICE</div>
          </div>
          <div className='CartItemSpacer'>
            <div>{props.itemColor}</div>
            <div onClick={() => props.setCount(props.count - 1)}>Remove</div>
            </div>
          <div>{props.itemSize}</div>
        </div>
    </div>
  )
}

export default CartItem