import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "../components/NavBar"
import { Card } from "react-bootstrap";
import hoodie from '../../src/hoodie.png';
import tshirt from '../../src/tshirtresize2.png';

import 'bootstrap/dist/css/bootstrap.min.css';


const Shop = (props) => {

  //This can be used to store the items that they have requested.
  //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
  //const [msg, setMsg] = useState('Shop Merch');


  //Change classname layout so this is a row
  //Decide on framework for cards

  const [hoodieDetails, setHoodieDetails] = useState(false);
  const [tshirtDetails, setTshirtDetails] = useState(false);

  //Take in numbers as props
  //These will be used to get the cart values. 


  // <a href='#0' onClick={() => setMsg('Coming Soon')} >{msg}</a>





  // {!hoodieDetails ?

  //   <Card style={{ width: '20rem', height: "32rem" }} className="CustomCard">
  //     <Card.Img variant="top" src={hoodie} />
  //     <div className='TextCenter'>
  //       <Card.Body>
  //         <Card.Title>Member Hoodie</Card.Title>
  //         <div>50,000 $SPICE</div>
  //         <div>Men's Medium</div>
  //         <div>Black</div>
  //         {console.log(props)}
  //         <div className='ButtonSpacer'>
  //           <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
  //           {/* <a href='#2'>Add To Cart</a> */}
  //           {/* <a href='#3'>Product Details</a> */}
  //           <button className='OppositeButtonThemer' onClick={() => setHoodieDetails(true)} >Product Details</button>
  //         </div>
  //       </Card.Body>
  //     </div>
  //   </Card>

  //   :

  //   <Card style={{ width: '22rem', height: "40rem" }} className="CustomCard">
  //     <Card.Img variant="top" src={hoodie} />
  //     <div className='TextCenter'>
  //       <Card.Body>
  //         <Card.Title>Member Hoodie</Card.Title>
  //         <div>Quality and feel of Carhartt brand. 320 GSM. Thick and warm. 100% Cotton.</div>
  //         <div>Generous fit with a larger silhouette. Good for layering.</div>
  //         <div>Oil-based screen print graphic to ensure longevity.</div>
  //         {console.log(props)}
  //         <div className='ButtonSpacer'>
  //           <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
  //           {/* <a href='#2'>Add To Cart</a> */}
  //           {/* <a href='#3'>Product Details</a> */}
  //           <button className='OppositeButtonThemer' onClick={() => setHoodieDetails(false)} >Product Details</button>
  //         </div>
  //       </Card.Body>
  //     </div>
  //   </Card>

  // }


  // {!tshirtDetails ?

  //   <Card style={{ width: '20rem', height: "35rem" }} className="CustomCard">
  //     <Card.Img variant="top" src={tshirt} />
  //     <div className='TextCenter'>
  //       <Card.Body>
  //         <Card.Title>Member T-Shirt</Card.Title>
  //         <div>25,000 $SPICE</div>
  //         <div>Men's Medium</div>
  //         <div>Black</div>
  //         {/* <div className="Main__links">
  //         <a href='#2'>Add To Cart</a>
  //         <a href='#3'>Product Details</a>
  //       </div> */}
  //         <div className='ButtonSpacer'>
  //           <button className='ButtonThemer' onClick={() => props.setTshirtCount(props.tshirtCount + 1)}>Add To Cart</button>
  //           {/* <a href='#2'>Add To Cart</a> */}
  //           {/* <a href='#3'>Product Details</a> */}
  //           <button className='OppositeButtonThemer' onClick={() => setTshirtDetails(true)}>Product Details</button>
  //         </div>
  //       </Card.Body>
  //     </div>
  //   </Card>

  //   :

  //   <Card style={{ width: '20rem', height: "35rem" }} className="CustomCard">
  //     <Card.Img variant="top" src={tshirt} />
  //     <div className='TextCenter'>
  //       <Card.Body>
  //         <Card.Title>Member T-Shirt</Card.Title>
  //         <div>Quality and feel of Champion brand. 200 GSM. Thick and warm. 100% Cotton.</div>
  //         <div>Relaxed fit with a roomy silhouette.</div>
  //         <div>Oil-based screen print graphic to ensure longevity.</div>
  //         {/* <div className="Main__links">
  //         <a href='#2'>Add To Cart</a>
  //         <a href='#3'>Product Details</a>
  //       </div> */}
  //         <div className='ButtonSpacer'>
  //           <button className='ButtonThemer' onClick={() => props.setTshirtCount(props.tshirtCount + 1)}>Add To Cart</button>
  //           {/* <a href='#2'>Add To Cart</a> */}
  //           {/* <a href='#3'>Product Details</a> */}
  //           <button className='OppositeButtonThemer' onClick={() => setTshirtDetails(false)}>Product Details</button>
  //         </div>
  //       </Card.Body>
  //     </div>

  //   </Card>}




  return (
    <div className='Shop'>
      <NavBar
        hoodieCount={props.hoodieCount}
        tshirtCount={props.tshirtCount}
        homeColor={"#ffffff65"}
        bagColor={"#ffffff"}
        cartColor={"#ffffff65"}

      />
      <div className="CardContainer">


        {!hoodieDetails ?

          <div style={{ width: '27rem', height: "35rem" }} className="CustomCard">
            <img src={hoodie} className="ObjectFitContain" style={{ height: "24rem" }} />
            <div>Member Hoodie</div>
            <div>50,000 $SPICE</div>
            <div>Men's Medium</div>
            <div>Black</div>

            <div className='ButtonSpacer'>
              <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
              {/* <a href='#2'>Add To Cart</a> */}
              {/* <a href='#3'>Product Details</a> */}
              <button className='OppositeButtonThemer' onClick={() => setHoodieDetails(true)} >Product Details</button>
            </div>

          </div>


          :

          <div style={{ width: '27rem', height: "35rem" }} className="CustomCard">
            <img src={hoodie} className="ObjectFitContain" style={{ height: "20rem" }} />
            <div>Member Hoodie</div>
            <div style={{ textAlign: "left", marginTop: "1rem" }}>
              <div>Quality and feel of Carhartt brand.</div>
              <div> 320 GSM. Thick and warm. 100% Cotton.</div>
              <div>Generous fit with a larger silhouette. Good for layering.</div>
              <div>Oil-based screen print graphic to ensure longevity.</div>
            </div>

            <div className='ButtonSpacer'>
              <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
              {/* <a href='#2'>Add To Cart</a> */}
              {/* <a href='#3'>Product Details</a> */}
              <button className='OppositeButtonThemer' onClick={() => setHoodieDetails(false)} >Product Details</button>
            </div>

          </div>
        }

        {!tshirtDetails ?
          <div style={{ width: '27rem', height: "35rem" }} className="CustomCard">
            <img src={tshirt} className="ObjectFitContain" />
            <div>Member T-Shirt</div>
            <div>25,000 $SPICE</div>
            <div>Men's Medium</div>
            <div>Black</div>

            <div className='ButtonSpacer'>
              <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
              {/* <a href='#2'>Add To Cart</a> */}
              {/* <a href='#3'>Product Details</a> */}
              <button className='OppositeButtonThemer' onClick={() => setTshirtDetails(true)} >Product Details</button>
            </div>

          </div>
          :

          <div style={{ width: '27rem', height: "35rem" }} className="CustomCard">
            <img src={tshirt} className="ObjectFitContain" style={{ height: "20rem" }} />
            <div>Member T-Shirt</div>
            <div style={{ textAlign: "left",  marginTop: "1rem" }}>
            <div>Quality and feel of Champion brand.</div>
            <div>200 GSM. Thick and warm. 100% Cotton.</div>
            <div>Relaxed fit with a roomy silhouette.</div>
            <div>Oil-based screen print graphic to ensure longevity.</div>
            </div>

            <div className='ButtonSpacer'>
              <button className='ButtonThemer' onClick={() => props.setHoodieCount(props.hoodieCount + 1)}>Add To Cart</button>
              {/* <a href='#2'>Add To Cart</a> */}
              {/* <a href='#3'>Product Details</a> */}
              <button className='OppositeButtonThemer' onClick={() => setTshirtDetails(false)} >Product Details</button>
            </div>

          </div>
        }





      </div>

      {/* Onclick event will add this item to cart. Need cart to be managed at outermost layer */}
      {/* Do some ugly hardcoding for the moment, this doesnt need to go too hard */}

    </div>

  )
}

export default Shop