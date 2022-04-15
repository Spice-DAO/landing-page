import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "../components/NavBar"
import { Card } from "react-bootstrap";
import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirtresize2.png';

import 'bootstrap/dist/css/bootstrap.min.css';


const Shop = (props) => {

  const [hoodieDetails, setHoodieDetails] = useState(false);
  const [tshirtDetails, setTshirtDetails] = useState(false);




  return (
    <div className='Shop'>
      <NavBar
        hoodieCount={props.hoodieCount}
        tshirtCount={props.tshirtCount}
        homeColor={"#ffffff65"}
        bagColor={"#ffffff"}
        cartColor={"#ffffff65"}

      />
      <div className="CardContainer">


          <div style={{ width: '22rem', height: "35rem" }} className="CustomCard">
            <img src={hoodie} className="ObjectFitContain" style={{ height: "20rem" }} />
            <div className='BiggerMediumText'>Member Hoodie</div>
            <div  style={{marginTop: "1rem", fontWeight: "500"}}>50,000 $SPICE</div>
            <div  style={{marginTop: "1rem"}}>Men's Medium</div>
            <div  style={{marginTop: "1rem"}}>Black</div>

            <div className='ButtonSpacer'>
              <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
              {/* <a href='#2'>Add To Cart</a> */}
              {/* <a href='#3'>Product Details</a> */}
              <button className='ButtonThemer' onClick={() => setHoodieDetails(true)} >Product Details</button>
            </div>

          </div>


 
          <div style={{ width: '22rem', height: "35rem" }} className="CustomCard">
            <img src={tshirt} className="ObjectFitContain" style={{ height: "20rem" }} />
            <div  className='BiggerMediumText'>Member T-Shirt</div>
            <div style={{marginTop: "1rem", fontWeight: "500"}}>25,000 $SPICE</div>
            <div  style={{marginTop: "1rem"}}>Men's Medium</div>
            <div style={{marginTop: "1rem"}}>Black</div>

            <div className='ButtonSpacer'>
              <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
              {/* <a href='#2'>Add To Cart</a> */}
              {/* <a href='#3'>Product Details</a> */}
              <button className='ButtonThemer' onClick={() => setTshirtDetails(true)} >Product Details</button>
            </div>

          </div>





      </div>

      {/* Onclick event will add this item to cart. Need cart to be managed at outermost layer */}
      {/* Do some ugly hardcoding for the moment, this doesnt need to go too hard */}

    </div>

  )
}

export default Shop