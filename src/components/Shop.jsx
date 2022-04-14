import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "../components/NavBar"
import { Card } from "react-bootstrap";
import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirtresize.png';

import 'bootstrap/dist/css/bootstrap.min.css';


const Shop = (props) => {

  //This can be used to store the items that they have requested.
  //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
  //const [msg, setMsg] = useState('Shop Merch');


  //Change classname layout so this is a row
  //Decide on framework for cards

  const [hoodieDetails, setHoodieDetails] = useState(false);
  const [shirtDetails, setShirtDetails] = useState(false);

  //Take in numbers as props
  //These will be used to get the cart values. 


  // <a href='#0' onClick={() => setMsg('Coming Soon')} >{msg}</a>


  return (
    <div className='Shop'>
      <NavBar
      hoodieCount={props.hoodieCount}
      tshirtCount={props.tshirtCount}
      />
      <div className="CardContainer">
        <Card style={{ width: '20rem', height: "32rem" }} className="CustomCard">
          <Card.Img variant="top" src={hoodie} />
          <div className='TextCenter'>
            <Card.Body>
              <Card.Title>Member Hoodie</Card.Title>
              <div>50,000 $SPICE</div>
              <div>Men's Medium</div>
              <div>Black</div>
              {console.log(props)}
              <div className='ButtonSpacer'>
                <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
                  {/* <a href='#2'>Add To Cart</a> */}
                  {/* <a href='#3'>Product Details</a> */}
                  <button className='OppositeButtonThemer'>Product Details</button>
                  </div>
            </Card.Body>

          </div>
        </Card>

        <Card style={{ width: '20rem', height: "32rem" }} className="CustomCard">
          <Card.Img variant="top" src={tshirt} />
          <div className='TextCenter'>
            <Card.Body>
              <Card.Title>Member T-Shirt</Card.Title>
              <div>25,000 $SPICE</div>
              <div>Men's Medium</div>
              <div>Black</div>
              {/* <div className="Main__links">
                <a href='#2'>Add To Cart</a>
                <a href='#3'>Product Details</a>
              </div> */}
              <div className='ButtonSpacer'>
              <button className='ButtonThemer' onClick={() => props.setTshirtCount(props.tshirtCount + 1)}>Add To Cart</button>
                  {/* <a href='#2'>Add To Cart</a> */}
                  {/* <a href='#3'>Product Details</a> */}
                  <button className='OppositeButtonThemer'>Product Details</button>
                  </div>
            </Card.Body>
          </div>

        </Card>
      </div>

      {/* Onclick event will add this item to cart. Need cart to be managed at outermost layer */}
      {/* Do some ugly hardcoding for the moment, this doesnt need to go too hard */}

    </div>

  )
}

export default Shop