import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "../Components/user";
import Ads from "../Components/Ads";
import MainPage from "./MainPage";
import Showcase from "./showcase";
import Shop from "./shop";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/user" exact component={User} />
        <Route path="/Ads" exact component={Ads} />
        <Route path="/Showcase" exact component={Showcase} />
        <Route path="/Shop" exact component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
