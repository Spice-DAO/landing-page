import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import tshirt from '../../src/tshirtresize2.png';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Tshirt = (props) => {


    const [activeImage, setActiveImage] = useState(tshirt);
    // const [inActiveImage, setinActiveImage] = useState(tshirtBack);
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
      <div></div>
    </div>
    </div>
  )
}

export default Tshirt