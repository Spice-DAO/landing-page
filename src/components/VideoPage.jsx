// Token Gated Page Component

// Props
// Video URL
import React, { useState, useEffect } from "react";
// import Video from "react-h5-video";



export default function VideoPage(props) {

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  })

  var sources = [props.vid]


    return(
        <div className="VideoPage">
          <div>TASHKA</div>
          <video height="80%" width="80%" controls controlsList="nodownload"> 
          <source src={props.vid} type="video/mp4"/>
            </video>        
       {/* <Video sources={sources} poster={props.thumb} >
				<h3 className="video-logo pull-right"><a href="http://glexe.com" target="_blank">LOGO</a></h3>
				<p>Any HTML content</p>
			</Video> */}
        </div>
    )
}

