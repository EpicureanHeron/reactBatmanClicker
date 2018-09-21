import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light custom custom-font">
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <h2 className="custom-font">Batman Memory</h2>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  </div>

    <ul className="nav navbar-nav navbar-center selection">
      {props.message}

    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="custom-font">Your Score: {props.currentScore} &nbsp;</li>
      <li className="custom-font"> High Score: {props.highScore}</li>
    </ul>


  </nav>
);

export default Navbar;
