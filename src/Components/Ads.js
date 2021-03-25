import React from "react";
import { Link } from "react-router-dom";
import "../css/ads.css";
import Foot from "./foot";

function Ads() {
  window.onscroll = function() {
    const topnav = document.querySelector(".main-nav");
    const mininav = document.querySelector(".mininav");
    var top = window.scrollY;
    if (top >= 50 && topnav) {
      topnav.classList.add("isactive");
      mininav.classList.add("inactive");
    } else if (top < 50 && topnav) {
      topnav.classList.remove("isactive");
      mininav.classList.remove("inactive");
    }
  };

  return (
    <div>
      <div className="mininav">
        <p>
          <Link>Sign up for news and Updates</Link>, fresh in your inbox
        </p>
      </div>

      <div className="main-nav">
        <h4>ArtsyPAX</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Artists</Link>
          </li>
          <li>
            <Link>Contributors</Link>
          </li>
          <li>
            <Link to="/shop" id="shop">
              Shop
            </Link>
          </li>
        </ul>
      </div>
      <div className="mySection"></div>
      <div className="section-2">
        <p>Most Popular Downloads</p>
        <div className="wrapper">
          <div className="pic first"></div>
          <div className="pic second"></div>
          <div className="pic third"></div>
          <div className="pic fourth"></div>
          <div className="pic fifth"></div>
          <div className="pic sixth"></div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Ads;
