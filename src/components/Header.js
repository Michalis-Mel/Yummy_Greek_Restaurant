import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo-transparent.png";

const Header = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  return (
    <header>
      <nav className="row">
        <NavLink
          to="/Yummy_Greek_Restaurant"
          className={`head_link ${hovered1 ? "active" : ""}`}
          onMouseEnter={() => setHovered1(!hovered1)}
          onMouseLeave={() => setHovered1(!hovered1)}
        >
          MENU
        </NavLink>
        <NavLink className="logo" to="/Yummy_Greek_Restaurant">
          <img src={logo} alt="Logo" />
        </NavLink>
        <NavLink
          to="/my_order"
          className={`head_link ${hovered2 ? "active" : ""}`}
          onMouseEnter={() => setHovered2(!hovered2)}
          onMouseLeave={() => setHovered2(!hovered2)}
        >
          MY ORDER
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
