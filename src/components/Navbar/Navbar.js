import React from "react";
import Button from "../Button";
import Hamburger from "../Hamburger";
import logo from "./NavbarImages/Alphalog.png";
import "./Navbar.css";

const Navbar = () => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="navTools">
      <div className="logo-container">
        {" "}
        <img className="blockdLogo" src={logo} alt="Blockd Logo" />
      </div>
      <div className="hamburger-container">
        <Hamburger />
      </div>
      <div className="contact-btn-container">
        <Button text="CONTACT US" onClick={onClick} />
      </div>
    </header>
  );
};

export default Navbar;
