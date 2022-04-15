import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import logo from '../../src/logo2.png'
import NavBar from "../components/NavBar"
import { NavLink } from 'react-router-dom';
import { Card } from "react-bootstrap";
import CheckoutItem from '../components/CheckoutItem';
import CustomInput from '../components/CustomInput';

import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirtresize.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Checkout = (props) => {
  const [inputs, setInputs] = useState({});
  const [msg, setMsg] = useState('Checkout');


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("CHANGED::", name, value);
    setInputs(values => ({ ...values, [name]: value }))
  }

  function handleSubmit() {
    console.log(inputs.fullname);
    console.log(inputs.txn);
    console.log(inputs.address);
    console.log(inputs.postalCode);
    console.log(inputs.city);
    console.log(inputs.country);
    console.log(inputs.twitter);
    console.log(inputs.discord);
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
      setMsg("Order Submittied")
    }

  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(inputs);
  // }



  //This can be used to store the items that they have requested.
  //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
  //const [msg, setMsg] = useState('Shop Merch');

  return (
    <div className='Checkout'>
      <NavBar
        hoodieCount={props.hoodieCount}
        tshirtCount={props.tshirtCount}
      />
      <div className='CheckoutInputContainer'>
        <div></div><NavLink to="/shop">&lt; Back To cart</NavLink><div>
          <Card><div>Thanks For Your Purchase</div></Card>

          <div>Checkout</div>
          <form>
            <div className='CheckoutRowFlex'>
              <CustomInput label="Name" name="fullname" input={inputs.fullname} override="" change={handleChange} />
              <CustomInput label="Transaction Number" name="txn" input={inputs.txn} override="" change={handleChange} />
              {/* <form><input className='CleanForm' type="text"></input></form> */}
            </div>
            <div>
              <CustomInput label="Address (Number and street name)" name="address" input={inputs.address} override="" change={handleChange} />
            </div>
            <div className='CheckoutRowFlex'>
              <CustomInput label="Postal Code" name="postalCode" input={inputs.postalCode} override="" change={handleChange} />
              <CustomInput label="City" name="city" input={inputs.city} override="" change={handleChange} />
              <CustomInput label="Country" name="country" input={inputs.country} override="" change={handleChange} />
            </div>
            <div className='CheckoutRowFlex'>
              <CustomInput label="Twitter" name="twitter" input={inputs.twitter} override="@" change={handleChange} />
              <CustomInput label="Discord" name="discord" input={inputs.discord} override="" change={handleChange} />
            </div>
          </form>

          {/*         <a href='#0' onClick={() => setMsg('Coming Soon')} >{msg}</a>
 */}
          <div className="Main__links">
            <a href='#0' style={{ width: "100%" }} onClick={() => handleSubmit()}>{msg}</a>
          </div>


        </div>
      </div>


      <div className='CheckoutDetailsContainer'>
        <div>In your cart</div>
        <div className='CheckoutRowFlex'>
          <div>Subtotal</div>
          <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
        </div>
        <div className='CheckoutRowFlex'>

          <div>Estimated Shipping Costs</div>
          <div>FREE</div>
        </div>

        <div className='CheckoutRowFlexBorder'>
          <div>TOTAL</div>
          <div>{numberWithCommas((props.hoodieCount * 50000) + (props.tshirtCount * 25000))} $SPICE</div>
        </div>

        {/* Two ternarys here on if hoodieCount != 0 */}
        {props.hoodieCount === 0 ? <div></div> : <CheckoutItem cardImg={hoodie} itemName={"Member Hoodie"} itemCount={props.hoodieCount} itemCost={50000} />}
        {/* Add Grey Line here */}
        {props.tshirtCount === 0 ? <div></div> : <CheckoutItem cardImg={tshirt} itemName={"Member T-Shirt"} itemCount={props.tshirtCount} itemCost={25000} />}
        {/* Add Grey Line here */}
      </div>

    </div>

  )
}

export default Checkout