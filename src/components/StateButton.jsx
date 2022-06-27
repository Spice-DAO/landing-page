import React, { useState } from 'react';

//This needs to handle multistate buttons
//MouseOverText
//MouseLeaveText
//ConnectedWalletText
//ConnectWalletAndCheckSpiceText

//FlagHandler

export default function StateButton(props) {
    const [msg, setMsg] = useState(props.buttonText);
    const [altMsg, setAltMsg] = useState(props.buttonText);
 
    // {props.walletConnected ? (<div className="TransitionButton" onClick={() => {props.checkSpiceHandler("tashka");}}>{props.buttonText}</div>) : (<div className="TransitionButton" onMouseOver={() => setTashkaMsg("Connect Wallet")}  onClick={() => {props.connectWalletHandler();}}> {tashkaMsg}</div>)}
    
    function validate(){
        if(!props.spiceFound){
            setAltMsg("No $SPICE Found")
        }
    }



    return(
    <div>
    {props.walletConnected ? 
    (<div className="TransitionButton" onMouseOver={() => {setAltMsg(props.action);}} onMouseLeave={() => {setAltMsg(props.buttonText);}} onClick={() => {props.checkSpiceHandler(props.flagHandler);}}>{altMsg}</div>) 
    : 
    (<div className="TransitionButton" onMouseOver={() => setMsg("Connect Wallet")} onMouseLeave={() => setMsg(props.buttonText)} onClick={() => {props.connectWalletHandler();}}> {msg}</div>)}
    </div>
    
    )
}



