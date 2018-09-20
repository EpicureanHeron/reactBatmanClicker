import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light custom">
    <h2>Batman Game</h2>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
     
       
      <ul class="nav navbar-nav navbar-center">
            <li>Your Score: {props.currentScore} &nbsp;</li>
            <li>High Score: {props.highScore} &nbsp;</li>
          
        </ul>
       

  </nav>
);

export default Navbar;
