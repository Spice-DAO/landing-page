import React, { useState, useEffect } from 'react';
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
  const [inActiveFront, setinActiveFront] = useState(hoodie);
  const [inActiveBack, setinActiveBack] = useState(hoodieBack);

  const [viewActive, setViewActive] = useState(true);

  const [itemToBePurchased, setItemToBePurchased] = useState(props.hoodieCount);



  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  function getButton(soldOut){
    if(soldOut){
      return(<a href="#0" style={{ fontWeight: "500" }}>Sold Out</a>)
    } else {
      return(<a href="#0" onClick={() => props.setHoodieCount(itemToBePurchased)} style={{ fontWeight: "500" }}>Add To Cart</a>)
    }
  }



  // onClick={() => props.setHoodieCount(props.hoodieCount + 1)}

  // Largely going to mirror cards in construction

  return (
    <div className="ShopItemContainer">
      <div className='ShopNavFix'>
        <NavBar
          hoodieCount={props.hoodieCount}
          tshirtCount={props.tshirtCount}
          homeColor={"#ffffff"}
          bagColor={"#ffffff"}
          cartColor={"#ffffff"}
        />
      </div>
      <div className='ShopItemDetails' >
        <div className='ShopItemCardContainer'>
          <div className="ShopItemBigCard">
            <img src={activeImage} style={{ height: "30rem" }} className="ObjectFitContain" onClick={() => {activeImage === hoodie? setActiveImage(hoodieBack) : setActiveImage(hoodie)}} ></img>
          </div>
          <div className='ShopItemSmallCardContainer'>
            <div className="ShopItemSmallCard">
              <img src={hoodie} style={{ height: "11.5rem" }} className="ObjectFitContain" onClick={() => setActiveImage(hoodie)}></img>
            </div>
            <div className="ShopItemSmallCard">
              <img src={hoodieBack} style={{ height: "11.5rem" }} className="ObjectFitContain" onClick={() => setActiveImage(hoodieBack)}></img>
            </div>
          </div>
        </div>


        <div className='ShopItemTextContainer'>
          {windowDimenion.winWidth > 700 ? <NavLink to="/shop" style={{ marginTop: "9.5rem", marginBottom: "1rem", textAlign: 'left', color: "#ffffff90" }} >&lt; Back To Cart</NavLink> : <div></div>}

          <div className='BoldBigText' style={{ marginBottom: "0.75rem" }}>Member Hoodie</div>
          <div className='LargeMediumText' style={{ marginBottom: "1.5rem" }}>50,000 $SPICE</div>
          <div className='DescriptionText'>Quality and feel of Carhartt brand. 320 GSM. Thick and warm. 100% Cotton.</div>
          <div className='DescriptionText' style={{ marginBottom: "1rem", marginTop: "1rem" }}>Generous fit with a larger silhouette. Good for layering.</div>
          <div className='DescriptionText'>Oil-based screen print graphic to ensure longevity.</div>
          <div className='ColorTextContainer'><div>Men's Medium In Black.</div></div>
          {/* <div className='AvailableContainer'>{props.availableHoodie} Available.</div> */}


          {/* <div className='ShopItemDetailFlex' style={{ marginTop: "1rem", marginBottom: "0.35rem" }}>
            <div>
              <div className='LargeMediumText'>
                Color: Black
              </div>
            </div>

            <div>
              <div className='LargeMediumText' style={{ marginLeft: "3rem" }}>
                Size: Men's Medium
              </div>
            </div>
          </div> */}

          <div>
            <div className='LargeMediumText' style={{ marginBottom: "0.4rem" }}>
              Quantity
            </div>
            <div className='ShopItemDetailFlex'>
              <div className='ShopItemTinyCard' style={{ marginRight: "1.25rem" }} onClick={() => setItemToBePurchased(false)}>-</div>
              <div className='BiggerMediumText'>{itemToBePurchased ? 1 : 0}</div>
              <div className='ShopItemTinyCard' style={{ marginLeft: "1.25rem" }} onClick={() => setItemToBePurchased(true)}>+</div>
            </div>
          </div>

          {windowDimenion.winWidth > 700 ?
            <div className="Main__links" style={{ marginTop: "2rem", width: "50rem", height: "3.7rem" }}>
              {getButton(props.soldOutHoodie, props.setItemToBePurchased)}
            </div>

            :

            <div className="Main__links" style={{ marginTop: "2rem", textAlign: 'center', alignContent: "center", height: "3.7rem" }}>
              {getButton(props.soldOutHoodie, props.setItemToBePurchased)}
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default Hoodie