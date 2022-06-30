import React, { useEffect } from "react";

export default function VideoPage(props) {

  //RE-ENABLE BEFORE LAUNCH

  // useEffect(() => {
  //   document.addEventListener('contextmenu', (e) => {
  //     e.preventDefault();
  //   });
  // })


  function VidSizer(){
    if (props.flag === "tashka") {
      return (
        <video loop autoPlay height="55%" width="55%" controls controlsList="nodownload">
        <source src={props.vid} type="video/mp4" />
      </video>
      )}
    
      if (props.flag === "dune") {
        return(
          <video loop autoPlay height="75%" width="75%" controls controlsList="nodownload">
          <source src={props.vid} type="video/mp4" />
        </video>
        )}

  }

  function HeaderPicker() {
    console.log("FLAG::", props.flag);
    if (props.flag === "tashka") {
      return (
        <div className='VideoTextContainer' style={{ marginTop: "0rem", marginBottom: "3rem" }}>
          <div className='HeaderText'>
            TASHKA
          </div>
          <div className="Credits">Written, Direct and Animated by Ben Clarkson</div>
          <div className="Credits">Based on "Frontier South" by Manxome</div>
          <div className="Credits" style={{ marginBottom: "0.5rem" }}>Produced by Spice DAO</div>
        </div>
      )
    }
    if (props.flag === "dune") {
      return(
      <div className='VideoTextContainer' style={{marginTop: "-2rem", marginBottom: "3rem", width: "100%" }}>
        <div className='HeaderText'>
          DUNE BIBLE
        </div>
        <div className="Credits">Michel Seydoux presents Alejandro Jodorowsky’s Dune from Frank Herbert's novel. Design by Jean Giraud.  
        </div>
        <div className="Credits">Machines by Chris Foss. Special effects by Dan O’Bannon. Dialogue by M. Demuth and A. Jodorowsky</div>
        <div className="Credits">Edition 5 printed in 1975
        </div>
        
        <div className="Credits" style={{ marginBottom: "0.5rem" }}>Acquired at auction at Christie's Paris on Nov. 21, 2021 for €2,660,000 by Spice DAO</div>
      </div>
      )
    }
  }

  return (
    <div className="VideoPage">
      {HeaderPicker()}
      {VidSizer()}
    </div>
  )
}
