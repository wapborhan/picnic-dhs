import React from "react";
import Nav from "./NavMenu";
import { FaTimes, FaBars } from "react-icons/fa";

const MobileMenu = ({ menuShow, toggleMenu }) => {
  return (
    <div className={`vs-menu-wrapper ${menuShow && "vs-body-visible"}`}>
      <div className="vs-menu-area">
        <button className="vs-menu-toggle" onClick={toggleMenu}>
          <FaTimes />
        </button>
        <div className="mobile-logo">
          {/* <!-- <img src="assets/img/logo.png" alt="Evona"> --> */}
          SSC Batch 2012
        </div>
        <div className="vs-mobile-menu">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
