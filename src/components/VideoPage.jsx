import React, { useEffect } from "react";

export default function VideoPage(props) {

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  })

  return (
    <div className="VideoPage">
      <div className='BibleTextContainer' style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div className='HeaderText'>
          TASHKA
        </div>
      </div>


      <video height="60%" width="60%" controls controlsList="nodownload">
        <source src={props.vid} type="video/mp4" />
      </video>
    </div>
  )
}
