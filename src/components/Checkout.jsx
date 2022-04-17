import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import CustomInput from '../components/CustomInput';
import { send } from 'emailjs-com';

import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirtresize2.png';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Checkout = (props) => {
  const [inputs, setInputs] = useState({});
  const [msg, setMsg] = useState('Save and continue');

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



  const [toSend, setToSend] = useState({
    fullname: '',
    txn: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
    twitter: '',
    discord: '',
    hoodieCount: props.hoodieCount,
    tshirtCount: props.tshirtCount,
    totalCost: numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000)),
  });

  const templateID = "template_tx2r16l";

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    setToSend({ ...toSend, [event.target.name]: event.target.value });

  }

  function getFullname() {
    return inputs.fullname;
  }

  const handleSubmit = (event) => {
    if (inputs.fullname === "" ||
      inputs.fullname === undefined ||
      inputs.txn === "" ||
      inputs.txn === undefined ||

      inputs.address === "" ||
      inputs.address === undefined ||

      inputs.postalCode === "" ||
      inputs.postalCode === undefined ||

      inputs.city === "" ||
      inputs.city === undefined ||

      inputs.country === "" ||
      inputs.country === undefined
    ) {
      alert("Please Fill Out Required Fields and Resubmit")
    } else {
      setMsg("Submitting Order");

      send(
        "service_epu7tsc",
        templateID,
        toSend,
        "83UFMfSgMOuGdFG5Q"
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMsg("Order Submittied");

        })
        .catch((err) => {
          console.log('FAILED...', err);
          setMsg("Order Failed Please Try Again");
        });

      //Figure out if both twitter and discord are needed for this
      //setToSend({ ...toSend, twitter: inputs.twitter });
      //setToSend({ ...toSend, discord: inputs.discord });
      //alert(inputs);
    }

  }




  //This can be used to store the items that they have requested.
  //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
  //const [msg, setMsg] = useState('Shop Merch');

  return (
    <div className='Checkout'>


      <div className="ShopNavFix">
        <NavBar
          hoodieCount={props.hoodieCount}
          tshirtCount={props.tshirtCount}
          homeColor={"#ffffff65"}
          bagColor={"#ffffff65"}
          cartColor={"#ffffff"}
        />
      </div>
      <div className='CheckoutInputContainer'>

        <div className="CheckoutInputSpacer">

          {windowDimenion.winWidth > 700 ? <NavLink to="/shop" style={{ textAlign: 'left', color: "#ffffff90" }} >&lt; Back To cart</NavLink> : <div></div>}

          {/* <NavLink to="/shop" style={{ textAlign: 'left', color: "#ffffff90" }} >&lt; Back To cart</NavLink> */}
          <div className='CheckoutThanksContainer'>
            <div className='LargeMediumText'>Thanks for your purchase!</div>
            <div style={{ marginTop: "1rem", fontWeight: "400" }}>Please send the total amount of your order in $SPICE to the DAO:</div>
            <div style={{ marginTop: "1rem", fontWeight: "800" }}>[multisig alpha numeric address]</div>
            <div style={{ marginTop: "1rem", fontWeight: "400" }}>Copy and paste the transaction number into the field below.</div>
          </div>

          {windowDimenion.winWidth < 700 ?

<div className='CheckoutDetailsContainer'>
  <div className='Bold24Text' style={{ marginBottom: "1.5rem" }}>In Your Cart</div>
  <div className='CheckoutItemRowFlex'>
    <div>Subtotal</div>
    <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
  </div>
  <div className='CheckoutItemRowFlex'>

    <div>Worldwide Shipping</div>
    <div>FREE</div>
  </div>

  <div className='CheckoutItemRowFlexBorder'>
    <div className='BoldMidText'>TOTAL</div>
    <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
  </div>

  {/* Two ternarys here on if hoodieCount != 0 */}
  {props.hoodieCount === 0 ? <div></div> : <CheckoutItem cardImg={hoodie} itemName={"Member Hoodie"} itemCount={props.hoodieCount} itemCost={50000} />}
  {/* Add Grey Line here */}
  {props.tshirtCount === 0 ? <div></div> : <CheckoutItem cardImg={tshirt} itemName={"Member T-Shirt"} itemCount={props.tshirtCount} itemCost={25000} />}
  {/* Add Grey Line here */}
</div>

:

<div></div>}

          <div className='BoldBigText' style={{ marginBottom: "1rem" }}>Checkout</div>
          <form onSubmit={handleSubmit}>
            <div className='CheckoutRowFlex'>
              <CustomInput label="Name" name="fullname" input={inputs.fullname} override="Spice DAO Member" change={handleChange} />
              <div style={{ marginLeft: '1rem', marginRight: '1rem' }}></div>
              <CustomInput label="Transaction Number" name="txn" input={inputs.txn} override="" change={handleChange} />
              {/* <form><input className='CleanForm' type="text"></input></form> */}
            </div>
            <div>
              <CustomInput label="Address (Number and street name)" name="address" input={inputs.address} override="" change={handleChange} />
            </div>
            <div className='CheckoutRowFlex'>
              <CustomInput label="Postal Code" name="postalCode" input={inputs.postalCode} override="" change={handleChange} />
              <div style={{ marginLeft: '1rem', marginRight: '1rem' }}></div>
              <CustomInput label="City" name="city" input={inputs.city} override="" change={handleChange} />
              <div style={{ marginLeft: '1rem', marginRight: '1rem' }}></div>
              <CustomInput label="Country" name="country" input={inputs.country} override="" change={handleChange} />
            </div>
            <div className='CheckoutRowFlex'>
              <CustomInput label="Twitter" name="twitter" input={inputs.twitter} override="@" change={handleChange} />
              <div style={{ marginLeft: '1rem', marginRight: '1rem' }}></div>
              <CustomInput label="Discord" name="discord" input={inputs.discord} override="" change={handleChange} />
            </div>
          </form>

          {/*         <a href='#0' onClick={() => setMsg('Coming Soon')} >{msg}</a>
 */}
          <div className="Main__links">
            <button type='submit' style={{ width: "100%", padding: "0.5rem", fontWeight: "500" }} onClick={() => handleSubmit()}>{msg}</button>
          </div>


        </div>
      </div>

      {windowDimenion.winWidth > 700 ?

        <div className='CheckoutDetailsContainer'>
          <div className='Bold24Text' style={{ marginBottom: "1.5rem" }}>In Your Cart</div>
          <div className='CheckoutItemRowFlex'>
            <div>Subtotal</div>
            <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
          </div>
          <div className='CheckoutItemRowFlex'>

            <div>Worldwide Shipping</div>
            <div>FREE</div>
          </div>

          <div className='CheckoutItemRowFlexBorder'>
            <div className='BoldMidText'>TOTAL</div>
            <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
          </div>

          {/* Two ternarys here on if hoodieCount != 0 */}
          {props.hoodieCount === 0 ? <div></div> : <CheckoutItem cardImg={hoodie} itemName={"Member Hoodie"} itemCount={props.hoodieCount} itemCost={50000} />}
          {/* Add Grey Line here */}
          {props.tshirtCount === 0 ? <div></div> : <CheckoutItem cardImg={tshirt} itemName={"Member T-Shirt"} itemCount={props.tshirtCount} itemCost={25000} />}
          {/* Add Grey Line here */}
        </div>

        :

        <div></div>}

    </div>

  )
}

export default Checkout