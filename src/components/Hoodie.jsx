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

  const [tempCount, setTempCount] = useState(0);

  function handleAdd() {
    props.setHoodieCount(tempCount + props.hoodieCount);
    setTempCount(0);
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
        <div className='ShopItemsCardContainer'>
          <div className="ShopItemBigCard">
            <img src={activeImage} style={{ height: "30rem" }} className="ObjectFitContain"></img>
          </div>
          <div className="ShopItemSmallCard">
            <img src={activeImage} style={{ height: "11.5rem" }} className="ObjectFitContain"></img>
          </div>
        </div>


        <div className='ShopItemTextContainer'>
          <NavLink to="/shop" style={{ marginTop: "7rem", textAlign: 'left' }}>&lt; Back To cart</NavLink>
          <div>Spice DAO Hoodie</div>
          <div>50,000 $SPICE</div>
          <div>Quality and feel of Carhartt brand. 320 GSM. Thick and warm. 100% Cotton.
            Generous fit with a larger silhouette. Good for layering. Oil-based screen print graphic to ensure longevity.</div>

          <div className='ShopItemDetailFlex'>


            <div>
              <div>
                Color
              </div>
              <div className='ShopItemDetailFlex'>
                <div className="ShopItemCircleOuter"><div className='ShopItemCircleInner'></div></div>  <div style={{marginRight: "2rem"}}>(only)</div>
              </div>
            </div>

            <div>
              <div>
                Size
              </div>
              <div className='ShopItemDetailFlex'>
                <div className='ShopItemTinyCard'>M</div> (only)
              </div>
            </div>
          </div>

          <div>
            <div>
              Quantity
            </div>
            <div className='ShopItemDetailFlex'>
              <div className='ShopItemTinyCard' style={{marginRight: "1rem"}}  onClick={() => ((tempCount + props.hoodieCount) > 0) ? setTempCount(tempCount - 1) : setTempCount(tempCount)}>-</div>
              {tempCount + props.hoodieCount} 
              <div className='ShopItemTinyCard' style={{marginLeft: "1rem"}} onClick={() => setTempCount(tempCount + 1)}>+</div>
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