import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "../components/NavBar"
import { Card } from "react-bootstrap";
import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirtresize.png';
import Button from "react-bootstrap/Button";

import 'bootstrap/dist/css/bootstrap.min.css';


const Shop = () => {

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
      <NavBar />
      <div className="CardContainer">
        <Card style={{ width: '20rem', height: "32rem" }} className="CustomCard">
          <Card.Img variant="top" src={hoodie} />
          <div className='TextCenter'>
            <Card.Body>
              <Card.Title>Member T-Shirt</Card.Title>
              <div>25,000 $SPICE</div>
              <div>Men's Medium</div>
              <div>Black</div>
              <div className='ButtonSpacer'>
                <Button className='ButtonThemer'>Add To Cart</Button>
                  {/* <a href='#2'>Add To Cart</a> */}
                  {/* <a href='#3'>Product Details</a> */}
                  <Button className='OppositeButtonThemer'>Product Details</Button>
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
                <Button className='ButtonThemer'>Add To Cart</Button>
                  {/* <a href='#2'>Add To Cart</a> */}
                  {/* <a href='#3'>Product Details</a> */}
                  <Button className='OppositeButtonThemer'>Product Details</Button>
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