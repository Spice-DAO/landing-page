import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';

import tshirt from '../../src/tshirt.png';
import tshirtBack from '../../src/tshirtBack.png';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Tshirt = (props) => {

  const [activeImage, setActiveImage] = useState(tshirt);
  const [inActiveFront, setinActiveFront] = useState(tshirt);
  const [inActiveBack, setinActiveBack] = useState(tshirtBack);
  const [itemToBePurchased, setItemToBePurchased] = useState(props.tshirtCount);


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
      return(<a href="#0" onClick={() => props.setTshirtCount(itemToBePurchased)} style={{ fontWeight: "500" }}>Add To Cart</a>)
    }
  }


  // onClick={() => props.setHoodieCount(props.hoodieCount + 1)}

  // Largely going to mirror cards in construction

  return (
    <div className="ShopItemContainer">
      <NavBar
        hoodieCount={props.hoodieCount}
        tshirtCount={props.tshirtCount}
        homeColor={"#ffffff"}
        bagColor={"#ffffff"}
        cartColor={"#ffffff"}

      />
      <div className='ShopItemDetails' >
      <div className='ShopItemCardContainer'>
          <div className="ShopItemBigCard">
            <img src={activeImage} style={{ height: "30rem" }} className="ObjectFitContain" onClick={() => {activeImage === tshirt? setActiveImage(tshirtBack ) : setActiveImage(tshirt)}} ></img>
          </div>
          <div className='ShopItemSmallCardContainer'>
            <div className="ShopItemSmallCard">
              <img src={tshirt} style={{ height: "11.5rem" }} className="ObjectFitContain" onClick={() => setActiveImage(tshirt)}></img>
            </div>
            <div className="ShopItemSmallCard">
              <img src={tshirtBack} style={{ height: "11.5rem" }} className="ObjectFitContain" onClick={() => setActiveImage(tshirtBack)}></img>
            </div>
          </div>
        </div>


        <div className='ShopItemTextContainer'>
        {windowDimenion.winWidth > 700 ? <NavLink to="/shop" style={{ marginTop: "9.5rem", marginBottom: "1rem", textAlign: 'left', color: "#ffffff90" }} >&lt; Back To Cart</NavLink> : <div></div>}


          <div className='BoldBigText' style={{ marginBottom: "0.5rem" }}>Member T-Shirt</div>
          <div className='LargeMediumText' style={{ marginBottom: "1.5rem" }}>25,000 $SPICE</div>
          <div className='DescriptionText'>Quality and feel of Champion brand. 200 GSM. Thick and warm. 100% Cotton.
          </div>
          <div className='DescriptionText' style={{marginBottom:"1rem", marginTop: "1rem"}}>Relaxed fit with a roomy silhouette.</div>
          <div className='DescriptionText'>Oil-based screen print graphic to ensure longevity.</div>
          <div className='ColorTextContainer'><div>Men's Medium In Black.</div></div>
          {/* <div className='AvailableContainer'>{props.availableTshirt} Available.</div> */}

          {/* <div className='ShopItemDetailFlex' style={{ marginTop: "1rem", marginBottom: "0.35rem" }}>
            <div>
              <div className='LargeMediumText'>
                Color: Black
              </div>
            </div>

            <div>
              <div className='LargeMediumText' style={{marginLeft: "3rem" }}>
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
              {getButton(props.soldOutTshirt)}
            </div>
            :
            <div className="Main__links" style={{ marginTop: "2rem", textAlign: 'center', alignContent: "center", height: "3.7rem" }}>
              {getButton(props.soldOutTshirt)}
            </div>
          }

          
        </div>
      </div>
    </div>
  )
}

export default Tshirt