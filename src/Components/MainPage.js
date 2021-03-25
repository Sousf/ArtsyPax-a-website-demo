import React from "react";
import thevideo from "../resources/artsy3.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Nav from "./nav";
import "../css/App.css";
import Video from "./video";

function MainPage() {
  return (
    <div>
      <Video video={thevideo} />
      <div className="btnGroup">
        <span className="title">Support for Current Artists</span> <br />
        <span className="sub">
          Millions of free resources to be discovered by you
        </span>
        <br />
        <Button color="success">Sign up Now</Button>
      </div>
      <Nav></Nav>
    </div>
  );
}

export default MainPage;
