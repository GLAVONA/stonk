import React from "react";
import "./Navbar.css";
import { Link as div } from "react-router-dom";
import fireEmoji from "../../imgs/fire-emoji.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-items">
        <div className="nav-item-burn">
          LIVE BURN
          <img src={fireEmoji} alt="fire-emoji" />{" "}
        </div>
        <div to="/" className="nav-item">
          WHAT?
        </div>
        <div to="/how" className="nav-item">HOW?</div>
      </div>
    </div>
  );
};

export default Navbar;
