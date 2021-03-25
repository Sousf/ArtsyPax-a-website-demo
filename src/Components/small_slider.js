import React, { useState } from "react";
import "../css/minslide.css";

function MinSlide({ sArray }) {
  function getID() {
    var x =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9);
    return String(x);
  }

  var id = getID();
  return (
    <div className="minslide-wrapper">
      <ul>
        <li>Pablo Picasso</li>
        <li>Banksy</li>
        <li>Andy Warhol</li>
        <li>Keith Harring</li>
        <li>Takashi Murakami</li>
      </ul>
      <div
        className="arrow"
        onClick={() => {
          const slide = document.querySelector("." + id);
          slide.scrollLeft -= 100;
        }}
      >
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className={`minslide-show ${id}`}>
        <div className="slide-container">
          {sArray.map((v, i) => (
            <div
              className={"minslide-slides"}
              style={{ backgroundImage: `url(${v})` }}
            ></div>
          ))}
        </div>
      </div>
      <div
        className="arrow a1"
        onClick={() => {
          const slide = document.querySelector("." + id);
          slide.scrollLeft += 100;
        }}
      >
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default MinSlide;
