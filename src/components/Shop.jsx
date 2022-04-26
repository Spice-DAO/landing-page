import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "../components/NavBar"
import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirt.png';

import countapi from 'countapi-js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Shop = (props) => {




  // countapi.get('spiceinternalhoodie', 'af4a9612-e8b2-4df3-9496-935ac3d8c42c').then((results) => {
  //   console.log("FROMAPI::", results.value);
  //   setAvailableHoodie(60 - results.value);
  // })

  // countapi.get('spiceinternaltshirt', '75664dbd-e10b-457d-9a32-44f6a8685dea').then((results) => {
  //   console.log("FROMAPI::", results.value);
  //   setAvailableTshirt(60 - results.value);
  // })


  function getProperButton(soldOut, itemCount, setCount){
    if(soldOut){
      return (
        <a href="#0" className='ShopButtonStyle'>Sold Out</a>

      )
    } else if (!itemCount){
      return (
        <a href="#0" className='ShopButtonStyle' onClick={() => setCount(true)}>Add To Cart</a>
      )
    } else{
      return (
        <a href="#0" className='ShopButtonStyle' onClick={() => props.setTshirtCount(true)}>Added</a>
      )
    }
    
    // return (
      
    // )
  }



  return (
    <div className='Shop'>
      <div className='ShopNavFix'>
        <NavBar
          hoodieCount={props.hoodieCount}
          tshirtCount={props.tshirtCount}
          homeColor={"#ffffff"}
          bagColor={"#ffffff"}
          cartColor={"#ffffff"}
        />
      </div>
      <div className="CardContainer">

        <div className="CustomCard">
          <img src={hoodie} className="ObjectFitContain" style={{ height: "20rem" }} />
          <div className='BiggerMediumText'>Member Hoodie</div>
          <div style={{ marginTop: "0.5rem", fontWeight: "500" }}>50,000 $SPICE</div>
          <div style={{ marginTop: "1rem" }}>Men's Medium</div>
          <div style={{ marginTop: "1rem" }}>Black</div>

          <div className='ButtonSpacer'>

            <div className="Main__links" style={{ marginTop: "auto", marginLeft: "1rem", marginRight: "1rem", width: "100%", justifyContent: "space-around" }}>
              {/* {!props.hoodieCount ?
                <a href="#0" className='ShopButtonStyle' onClick={() => props.setHoodieCount(true)}>Add To Cart</a>
                :
                <a href="#0" className='ShopButtonStyle' onClick={() => props.setHoodieCount(true)}>Added</a>
              } */}
              {getProperButton(props.soldOutHoodie, props.hoodieCount, props.setHoodieCount)}


              <NavLink to="/hoodie" className='ShopButtonStyle'>Product Details</NavLink>
            </div>
            {/* <a href='#2'>Add To Cart</a> */}
            {/* <a href='#3'>Product Details</a> */}
          </div>

        </div>



        <div className="CustomCard">
          <img src={tshirt} className="ObjectFitContain" style={{ height: "20rem" }} />
          <div className='BiggerMediumText'>Member T-Shirt</div>
          <div style={{ marginTop: "0.5rem", fontWeight: "500" }}>25,000 $SPICE</div>
          <div style={{ marginTop: "1rem" }}>Men's Medium</div>
          <div style={{ marginTop: "1rem" }}>Black</div>

          <div className='ButtonSpacer'>
            <div className="Main__links" style={{ marginTop: "auto", marginLeft: "1rem", marginRight: "1rem", width: "100%", justifyContent: "space-around" }}>

            {getProperButton(props.soldOutTshirt, props.tshirtCount, props.setTshirtCount)}


            {/* {!props.tshirtCount ?
                <a href="#0" className='ShopButtonStyle' onClick={() => props.setTshirtCount(true)}>Add To Cart</a>
                :
                <a href="#0" className='ShopButtonStyle' onClick={() => props.setTshirtCount(true)}>Added</a>
              } */}
              <NavLink to="/tshirt" className='ShopButtonStyle'>Product Details</NavLink>
            </div>
          </div>
        </div>





      </div>

      {/* Onclick event will add this item to cart. Need cart to be managed at outermost layer */}
      {/* Do some ugly hardcoding for the moment, this doesnt need to go too hard */}

    </div>

  )
}

export default Shop