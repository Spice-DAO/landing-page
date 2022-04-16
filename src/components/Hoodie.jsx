import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';

import hoodie from '../../src/hoodie.png';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Hoodie = (props) => {

  const [activeImage, setActiveImage] = useState(hoodie);
  // const [inActiveImage, setinActiveImage] = useState(hoodieBack);


  // Largely going to mirror cards in construction

  return (
    <div className="ShopItemContainer">
      <NavBar
        hoodieCount={props.hoodieCount}
        tshirtCount={props.tshirtCount}
        homeColor={"#ffffff65"}
        bagColor={"#ffffff"}
        cartColor={"#ffffff65"}

      />
      <div className='ShopItemDetails' >
        <div className='ShopItemsCardContainer'>
          <div className="ShopItemBigCard">
            <img src={activeImage} style={{ height: "30rem" }} className="ObjectFitContain"></img>
          </div>
          <div className="ShopItemSmallCard">
            <img src={activeImage} style={{ height: "11.5rem" }} className="ObjectFitContain"></img>
          </div>
        </div>


        <div className='ShopItemTextContainer'>
            <NavLink to="/shop" style={{marginTop: "7rem", textAlign: 'left'}}>&lt; Back To cart</NavLink>
            <div>Spice DAO Hoodie</div>
            <div>50,000 $SPICE</div>
            <div>Quality and feel of Carhartt brand. 320 GSM. Thick and warm. 100% Cotton.
              Generous fit with a larger silhouette. Good for layering. Oil-based screen print graphic to ensure longevity.</div>
          </div>

      </div>
    </div>
  )
}

export default Hoodie