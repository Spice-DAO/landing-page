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
import tshirt from '../../src/tshirt.png';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Checkout = (props) => {
  const [inputs, setInputs] = useState({});
  const [msg, setMsg] = useState('Submit Order');
  const [orderSubmitted, setOrderSubmitted] = useState(false);


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

  function getCheckoutButton(soldOut) {
    if (soldOut) {
      return (<button type='submit' style={{ width: "100%", padding: "0.5rem", fontWeight: "500" }}>Sold Out</button>
      )
    } else {
      return (<button type='submit' style={{ width: "100%", padding: "0.5rem", fontWeight: "500" }} onClick={() => handleSubmit()}>{msg}</button>
      )
    }
  }


  function getMessage(soldOut, orderSubmitted) {
    if (soldOut) {
      return (
        <div className='CheckoutThanksContainer'>
          <div className='LargeMediumText'>Spring 2022 Drop Has Sold Out</div>
          <div style={{ marginTop: "1rem", fontWeight: "400" }}>Join the waitlist for our next drop in our <span style={{textDecoration: "underline", cursor:"pointer"}} onClick={() => window.location = "https://discord.com/invite/spicedao"}>Discord!</span></div>
          <div style={{ marginTop: "1rem", fontWeight: "800" }}></div>
          <div style={{ marginTop: "1rem", fontWeight: "400" }}></div>
        </div>
      )
    } else if (orderSubmitted) {
      return (
        <div className='CheckoutThanksContainer'>
          <div className='LargeMediumText'>Your Order Has Been Submitted!</div>
          <div style={{ marginTop: "1rem", fontWeight: "400" }}>Your items will be shipped at the end of May.</div>
        </div>
      )
    } else {
      return (
        <div className='CheckoutThanksContainer'>
        <div className='LargeMediumText'>Please send the total amount of your order in $SPICE to the DAO:</div>
        <div style={{ marginTop: "1rem", fontWeight: "800" }}>0x1175185e62db6cea2517d14297333a63908c0cac</div>
        <div style={{ marginTop: "1rem", fontWeight: "400" }}>Copy and paste the transaction number into the field below.</div>
        <div style={{ marginTop: "1rem", fontWeight: "400" }}>Submit your order.</div>

      </div>
      )
    }

  }


  const handleSubmit = (event) => {
    if ((
      inputs.txn === "" ||
      inputs.txn === undefined ||
      inputs.txn.length < 35 ||

      inputs.address === "" ||
      inputs.address === undefined ||

      inputs.postalCode === "" ||
      inputs.postalCode === undefined ||

      inputs.city === "" ||
      inputs.city === undefined ||

      inputs.twitter === "" ||
      inputs.twitter === undefined ||

      inputs.discord === "" ||
      inputs.discord === undefined ||

      inputs.country === "" ||
      inputs.country === undefined)



    ) {
      alert("Please Fill Fields and Resubmit. If you dont have Discord or Twitter please enter N/A.")
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
          setMsg("Order Submitted");
          setOrderSubmitted(true);

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
          homeColor={"#ffffff"}
          bagColor={"#ffffff"}
          cartColor={"#ffffff"}
        />
      </div>
      <div className='CheckoutInputContainer'>

        <div className="CheckoutInputSpacer">

          {windowDimenion.winWidth > 700 ? <NavLink to="/cart" style={{ textAlign: 'left', color: "#ffffff90" }} >&lt; Back To Cart</NavLink> : <div></div>}

          {getMessage(props.soldOut, orderSubmitted)}


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

          <div className='BoldBigText' style={{ marginBottom: "0.5rem" }}>Checkout</div>
          <form onSubmit={handleSubmit}>
            <div className='CheckoutRowFlex'>
              <CustomInput label="Name" name="fullname" input={inputs.fullname} override="Spice DAO Member" change={handleChange} />
              <div style={{ marginLeft: '1rem', marginRight: '1rem' }}></div>
              <CustomInput label="Transaction Number" name="txn" input={inputs.txn} override="" change={handleChange} />
              {/* <form><input className='CleanForm' type="text"></input></form> */}
            </div>
            <div>
              <CustomInput label="Mailing Address" name="address" input={inputs.address} override="" change={handleChange} />
            </div>
            <div className='CheckoutRowFlex'>
              <CustomInput label="Postal Code" name="postalCode" input={inputs.postalCode} override="" change={handleChange} />
              <div style={{ marginLeft: '1rem', marginRight: '1rem' }}></div>
              <CustomInput label="City / State / Province" name="city" input={inputs.city} override="" change={handleChange} />
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
            {getCheckoutButton(props.soldOut)}
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
          {props.hoodieCount === false ? <div></div> : <CheckoutItem cardImg={hoodie} itemName={"Member Hoodie"} itemCount={props.hoodieCount} itemCost={50000} />}
          {/* Add Grey Line here */}
          {(props.hoodieCount && props.tshirtCount) ? <div style={{ marginTop: "1rem", marginBottom: "1rem" }} className='BorderBottom'></div> : <div></div>}

          {props.tshirtCount === false ? <div></div> : <CheckoutItem cardImg={tshirt} itemName={"Member T-Shirt"} itemCount={props.tshirtCount} itemCost={25000} />}
          {/* Add Grey Line here */}
        </div>

        :

        <div></div>}

    </div>

  )
}

export default Checkout