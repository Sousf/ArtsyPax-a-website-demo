import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div
        className="toggle-btn"
        onClick={() => {
          document.querySelector("nav").classList.toggle("active");
        }}
      >
        <i class="fas fa-arrow-right"></i> <span>Discover</span>
      </div>
      <ul>
        <li className="title">ArtsyPAX</li>
        <li className="link">
          <a href="#">
            <i class="fas fa-users"></i> Artist
          </a>
        </li>
        <li className="link">
          <Link to="/Showcase">
            <a href="#">
              <i class="fas fa-palette"></i> Showcase Your Art
            </a>
          </Link>
        </li>
        <li className="link">
          <Link to="/ads">
            <a href="#">
              <i class="fas fa-window-restore"></i> Browse
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
