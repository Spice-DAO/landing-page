import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "../components/NavBar"

const Shop = () => {
 
    //This can be used to store the items that they have requested.
    //Can be kinda ugly and just track the shirt and hoodie numbers rather than any object orients stuff 
    //const [msg, setMsg] = useState('Shop Merch');

  
    //Change classname layout so this is a row
    //Decide on framework for cards

  return (
    <div className='Shop'>
      <NavBar/>
      <div>Some cards</div>
      {/* Onclick event will add this item to cart. Need cart to be managed at outermost layer */}
      {/* Do some ugly hardcoding for the moment, this doesnt need to go too hard */}

    </div>
  
  )
}

export default Shop