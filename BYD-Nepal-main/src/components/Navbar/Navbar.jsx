import React from "react";
import "./Navbar.css";
import "../../App.css";
import "../../index.css";
const col = {
  fontSize: "30px",
  fontWeight: "800",
  fontFamily: "Barlow",
};

const Navbar = () => {
  return (
    <nav className="navbar" style={col}>
      <ul className="nav-links">
        <li>
          <a href="/">Build Your Dreams</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
