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
  const [inActiveImage, setinActiveImage] = useState(hoodieBack);
  const [viewActive, setViewActive] = useState(true);



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




  // onClick={() => props.setHoodieCount(props.hoodieCount + 1)}

  // Largely going to mirror cards in construction

  return (
    <div className="ShopItemContainer">
      <div className='ShopNavFix'>
        <NavBar
          hoodieCount={props.hoodieCount}
          tshirtCount={props.tshirtCount}
          homeColor={"#ffffff65"}
          bagColor={"#ffffff"}
          cartColor={"#ffffff65"}
        />
      </div>
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
          {windowDimenion.winWidth > 700 ? <NavLink to="/shop" style={{ marginTop: "10rem", marginBottom: "1rem", textAlign: 'left', color: "#ffffff90" }} >&lt; Back To cart</NavLink> : <div></div>}

          <div className='BoldBigText' style={{ marginBottom: "0.75rem" }}>Member Hoodie</div>
          <div className='LargeMediumText' style={{ marginBottom: "1.5rem" }}>50,000 $SPICE</div>
          <div className='DescriptionText'>Quality and feel of Carhartt brand. 320 GSM. Thick and warm. 100% Cotton.</div>
          <div className='DescriptionText' style={{marginBottom:"1rem", marginTop: "1rem"}}>Generous fit with a larger silhouette. Good for layering.</div>
          <div className='DescriptionText'>Oil-based screen print graphic to ensure longevity.</div>

          <div className='ShopItemDetailFlex' style={{ marginTop: "1rem" }}>
            <div >
              <div className='LargeMediumText' style={{ marginBottom: "0.35rem" }}>
                Color
              </div>
              <div className='ShopItemDetailFlex'>
                <div className="ShopItemCircleOuter"><div className='ShopItemCircleInner'></div></div>  <div style={{ marginRight: "2rem", fontSize: "18px" }}>(only)</div>
              </div>
            </div>

            <div>
              <div className='LargeMediumText' style={{ marginBottom: "0.35rem" }}>
                Size
              </div>
              <div className='ShopItemDetailFlex'>
                <div className='ShopItemTinyCard' style={{ marginRight: "0.5rem" }}>M</div>
                <div style={{ fontSize: "18px" }}>(only)</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "1.25rem" }}>
            <div className='LargeMediumText' style={{ marginBottom: "0.4rem" }}>
              Quantity
            </div>
            <div className='ShopItemDetailFlex'>
              <div className='ShopItemTinyCard' style={{ marginRight: "1.25rem" }} onClick={() => props.setHoodieCount(false)}>-</div>
              <div className='BiggerMediumText'>{props.hoodieCount? 1: 0}</div>
              <div className='ShopItemTinyCard' style={{ marginLeft: "1.25rem" }} onClick={() => props.setHoodieCount(true)}>+</div>
            </div>
          </div>

          {windowDimenion.winWidth > 700 ?
            <div className="Main__links" style={{ marginTop: "2rem", width: "50rem", height: "3.7rem" }}>
              <NavLink to="/shop" style={{fontWeight: "500"}}>Add To Cart</NavLink>
            </div>

            :

            <div className="Main__links" style={{ marginTop: "2rem", textAlign:'center',  alignContent:"center", height: "3.7rem" }}>
              <NavLink to="/shop" style={{fontWeight: "500"}}>Add To Cart</NavLink>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default Hoodie