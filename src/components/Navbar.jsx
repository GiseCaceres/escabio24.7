import React, { useState } from "react";
import logo from "../img/logo.jpg";
import  "../Styles/navbar.css";


const Navbar = () => {
  const [openLink, openLinkToggle] = useState (false);

  const handleNavLinksToggle = () => {
    openLinkToggle (!openLink);
  }

  const renderClasses = () =>{
    let classes = "navLinks";

    if (openLink) {
      classes += " active"
    }

    return classes
  }

  return (
    <>
      <nav>
        <div className="logo">
         <img src={logo}></img> 
        </div>

        <ul className={renderClasses()}>
            <li className="links"><a href="#">CERVEZAS</a></li>
            <li className="links"><a href="#">FERNET</a></li>
            <li className="links"><a href="#">VODKA</a></li>
            <li className="links"><a href="#">VINOS</a></li>
            <li className="links"><a href="#">APERITIVOS</a></li>
        </ul>
        <div className="hamburger-toggler" onClick={handleNavLinksToggle}>
        <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;