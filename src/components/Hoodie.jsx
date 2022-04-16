import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';

import hoodie from '../../src/hoodie.png';
import hoodieBack from '../../src/hoodieBack.png';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Hoodie = (props) => {

  const [activeImage, setActiveImage] = useState(hoodie);
  const [inActiveImage, setinActiveImage] = useState(hoodieBack);
  const [viewActive, setViewActive] = useState(true);

  const [tempCount, setTempCount] = useState(0);

  function handleAdd() {
    props.setHoodieCount(tempCount + props.hoodieCount);
    setTempCount(0);
  };

  function swapImages(a, b) {
    setActiveImage(a);
    setinActiveImage(b);
  };

  // onClick={() => props.setHoodieCount(props.hoodieCount + 1)}

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
        <div className='ShopItemCardContainer'>
          <div className="ShopItemBigCard">
            <img src={viewActive ? hoodie : hoodieBack} style={{ height: "30rem" }} className="ObjectFitContain" onClick={() => setViewActive(!viewActive)} ></img>
          </div>
          <div className="ShopItemSmallCard">
            <img src={viewActive ? hoodieBack : hoodie} style={{ height: "11.5rem" }} className="ObjectFitContain" onClick={() => setViewActive(!viewActive)}></img>
          </div>
        </div>


        <div className='ShopItemTextContainer'>
          <NavLink to="/shop" style={{ marginTop: "10rem", marginBottom: "1rem", textAlign: 'left', color: "#ffffff90" }} >&lt; Back To cart</NavLink>

          <div className='BoldBigText' style={{ marginBottom: "0.75rem" }}>Spice DAO Hoodie</div>
          <div className='LargeMediumText' style={{ marginBottom: "1.5rem" }}>50,000 $SPICE</div>
          <div className='DescriptionText'>Quality and feel of Carhartt brand. 320 GSM. Thick and warm. 100% Cotton.
          </div>
          <div className='DescriptionText'>Generous fit with a larger silhouette. Good for layering.</div> <div className='DescriptionText'>Oil-based screen print graphic to ensure longevity.</div>

          <div className='ShopItemDetailFlex' style={{ marginTop: "1rem" }}>
            <div >
              <div className='LargeMediumText'>
                Color
              </div>
              <div className='ShopItemDetailFlex'>
                <div className="ShopItemCircleOuter"><div className='ShopItemCircleInner'></div></div>  <div style={{ marginRight: "2rem", fontSize:"18px"}}>(only)</div>
              </div>
            </div>

            <div>
              <div className='LargeMediumText'>
                Size
              </div>
              <div className='ShopItemDetailFlex'>
                <div className='ShopItemTinyCard' style={{ marginRight: "0.5rem" }}>M</div> 
                <div style={{fontSize: "18px"}}>(only)</div>
              </div>
            </div>
          </div>

          <div style={{marginTop: "1.25rem"}}>
            <div className='LargeMediumText'>
              Quantity
            </div>
            <div className='ShopItemDetailFlex'>
              <div className='ShopItemTinyCard' style={{ marginRight: "1rem" }} onClick={() => ((tempCount + props.hoodieCount) > 0) ? setTempCount(tempCount - 1) : setTempCount(tempCount)}>-</div>
              <div className='BiggerMediumText'>{tempCount + props.hoodieCount}</div>
              <div className='ShopItemTinyCard' style={{ marginLeft: "1rem" }} onClick={() => setTempCount(tempCount + 1)}>+</div>
            </div>
          </div>


          <div className="Main__links" style={{ marginTop: "2rem" }}>
            <button onClick={() => handleAdd()}>Add to Cart</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hoodie