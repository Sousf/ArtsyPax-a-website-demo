import React from "react";
import "../css/video.css";

function Video({ video }) {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Video;
