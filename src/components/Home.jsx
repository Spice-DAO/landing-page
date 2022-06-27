import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import logo from '../../src/logo2.png';
import SeriesBible from './SeriesBible';
import WalletCheck from './WalletCheck';
import { set } from 'countapi-js';
import VideoPage from './VideoPage';


const Home = (props) => {

  const [dolkorothMsg, setDolkorothMsg] = useState('Dolkoroth');
  const [duneMsg, setDuneMsg] = useState('Dune Bible');
  const [tashkaMsg, setTashkaMsg] = useState('Tashka');


  //These flags will be used to determine what shows on the homepage. Will need a complex ternary or some function to determine what is output



  //This will determine what is shown on the main page.
  function pagePicker(){
    if(props.walletAndSpice && props.dolkorothFlag){
      return(<SeriesBible/>)
    }
    else if(props.walletAndSpice && props.duneFlag){
      return(<VideoPage videoURL="DUNETEST"/>)
    }
    else if(props.walletAndSpice && props.tashkaFlag){
      return(<VideoPage videoURL="TASHKATEST"/>)
    }
    else{
        return(
          <div className='Main'>
      <img className='Main__logo' src={logo} alt="Spice DAO logo" />
      <div className="Landing__links">
        <a href="/#" onMouseOver={() => setDuneMsg("July 1")} onMouseLeave={() => setDuneMsg("Dune Bible")}>{duneMsg}</a>
        {props.walletConnected ? (<div className="TransitionButton" onClick={() => {props.checkSpiceHandler("dolkoroth");}}>{props.dolkorothButtonText}</div>) : (<div className="TransitionButton" onMouseOver={() => setDolkorothMsg("Connect Wallet")}  onClick={() => {props.connectWalletHandler();}}> {dolkorothMsg}</div>)}
        {props.walletConnected ? (<div className="TransitionButton" onClick={() => {props.checkSpiceHandler("tashka");}}>{props.buttonText}</div>) : (<div className="TransitionButton" onMouseOver={() => setTashkaMsg("Connect Wallet")}  onClick={() => {props.connectWalletHandler();}}> {tashkaMsg}</div>)}

        {/*  */}



        {/* <a href="#0" onMouseOver={() => setMsg("Connect Wallet")}
        onMouseLeave={() => setMsg("Animation")}
        >{msg}</a>  */}
        {/* <NavLink to="/shop">{msg}</NavLink> */}
      </div>
      <div className="Landing__links">
        <a href="https://forum.spicedao.xyz/">Forum</a>
        <a href="https://snapshot.org/#/dunedao.eth">Governance</a>
        {/* <a href="#0" onMouseOver={() => setMsg("Connect Wallet")}
        onMouseLeave={() => setMsg("Animation")}
        >{msg}</a>  */}
        <a href="https://forum.spicedao.xyz/t/redemption-option-and-timeline/231/4">Redemptions</a>
        {/* <NavLink to="/shop">{msg}</NavLink> */}
      </div>
      <div className="Main__text">
      <p> <b>Spice DAO </b> is a Web3 production studio publishing sci-fi animation and NFTs from established writers and artists.
      </p>
      <p>The DAO was founded by 800+ pop culture enthusiasts that crowdfunded $12M to win the auction of the Dune Bible at Christie’s Paris in November 2021 for $3M.
      </p>
      <p>We are currently producing an original animated limited series to be distributed by a streaming service and are opening an NFT studio that provides white glove service to high profile creators to develop strategy and concepts; design and build technology products; and advise on marketing campaigns to onboard the next million users to Web3.
      </p>
      <p>The DAO has been featured in The Guardian, The New Yorker, Financial Times, Business Insider, Wired Magazine and more mainstream news outlets. We have a combined following of 10K+ on social media.
      </p>
      </div>
      <div className="Main__social_icons">
      <a href="https://twitter.com/TheSpiceDao"> { <FontAwesomeIcon icon={ faTwitter } /> } </a>
      <a href="http://discord.gg/SPICEDAO">{ <FontAwesomeIcon icon={ faDiscord } /> }</a>
      <a href="https://medium.com/@SpiceDao">{ <FontAwesomeIcon icon={ faMedium } /> }</a>
      <a href="mailto:team@spicedao.xyz">< FaEnvelope/></a>
    </div>
    {/* <Shop /> */}
    </div>
        )

    }
  }


  return (
    // <div className='LandingFix'>
    // {props.walletAndSpice? (<SeriesBible/>) : ( <div className='Main'>
    //   <img className='Main__logo' src={logo} alt="Spice DAO logo" />
    //   <div className="Landing__links">
    //     <a href="/#" onMouseOver={() => setDuneMsg("July 1")} onMouseLeave={() => setDuneMsg("Dune Bible")}>{duneMsg}</a>
    //     <a href="/#">Dolkoroth</a>
    //     <a href="/#" onMouseOver={() => setTashkaMsg("Connect Wallet")} onMouseLeave={() => setTashkaMsg("Tashka")}>{tashkaMsg}</a>
    //     {/* {props.walletConnected ? (<div className="TransitionButton" onClick={props.checkSpiceHandler}>{props.buttonText}</div>) : (<div className="TransitionButton" onMouseOver={() => setMsg("Connect Wallet")} onClick={props.connectWalletHandler}> {msg}</div>)} */}



    //     {/* <a href="#0" onMouseOver={() => setMsg("Connect Wallet")}
    //     onMouseLeave={() => setMsg("Animation")}
    //     >{msg}</a>  */}
    //     {/* <NavLink to="/shop">{msg}</NavLink> */}
    //   </div>
    //   <div className="Landing__links">
    //     <a href="https://forum.spicedao.xyz/">Forum</a>
    //     <a href="https://snapshot.org/#/dunedao.eth">Governance</a>
    //     {/* <a href="#0" onMouseOver={() => setMsg("Connect Wallet")}
    //     onMouseLeave={() => setMsg("Animation")}
    //     >{msg}</a>  */}
    //     <a href="https://forum.spicedao.xyz/t/redemption-option-and-timeline/231/4">Redemptions</a>
    //     {/* <NavLink to="/shop">{msg}</NavLink> */}
    //   </div>
    //   <div className="Main__text">
    //   <p> <b>Spice DAO </b> is a Web3 production studio publishing sci-fi animation and NFTs from established writers and artists.
    //   </p>
    //   <p>The DAO was founded by 800+ pop culture enthusiasts that crowdfunded $12M to win the auction of the Dune Bible at Christie’s Paris in November 2021 for $3M.
    //   </p>
    //   <p>We are currently producing an original animated limited series to be distributed by a streaming service and are opening an NFT studio that provides white glove service to high profile creators to develop strategy and concepts; design and build technology products; and advise on marketing campaigns to onboard the next million users to Web3.
    //   </p>
    //   <p>The DAO has been featured in The Guardian, The New Yorker, Financial Times, Business Insider, Wired Magazine and more mainstream news outlets. We have a combined following of 10K+ on social media.
    //   </p>
    //   </div>
    //   <div className="Main__social_icons">
    //   <a href="https://twitter.com/TheSpiceDao"> { <FontAwesomeIcon icon={ faTwitter } /> } </a>
    //   <a href="http://discord.gg/SPICEDAO">{ <FontAwesomeIcon icon={ faDiscord } /> }</a>
    //   <a href="https://medium.com/@SpiceDao">{ <FontAwesomeIcon icon={ faMedium } /> }</a>
    //   <a href="mailto:team@spicedao.xyz">< FaEnvelope/></a>
    // </div>
    // {/* <Shop /> */}
    // </div>)}
    // </div>
   pagePicker()

  )
}

export default Home