import React, { useEffect } from "react";

export default function VideoPage(props) {

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  })

  return (
    <div className="VideoPage">
      <div className='VideoTextContainer' style={{ marginTop: "-2rem", marginBottom: "3rem" }}>
        <div className='HeaderText'>
          TASHKA
        </div>
        <div className="Credits">Written, Directed and Animated by Ben Clarkson</div>
        <div className="Credits">Based on “Frontier South” by Manxome</div>
        <div className="Credits" style={{ marginBottom: "0.5rem" }}>Produced by Spice DAO</div>


      </div>


      <video height="60%" width="60%" controls controlsList="nodownload">
        <source src={props.vid} type="video/mp4" />
      </video>
    </div>
  )
}
