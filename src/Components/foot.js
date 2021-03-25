import React from "react";
import "../css/foot.css";

function Foot() {
  return (
    <div className="footer">
      <ul>
        <li>Cookie</li>
        <li>Privacy Policy</li>
        <li>Legal</li>
        <li>Cookie Preferences</li>
        <li>Email Preferences</li>
      </ul>
      <div className="copyright">
        <p className="contributor">Made With Reactjs</p>
        <p className="rights">Copyright © 2018 - 2020 ArtsyPAX, Inc.</p>
      </div>
    </div>
  );
}

export default Foot;
