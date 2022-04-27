import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav nav-pills justify-content-center p-2 shadow">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive && "active btn btn-primary mx-2"}`}>
          Home
        </NavLink>
        <NavLink to="/films" className={({ isActive }) => `nav-link ${isActive && "active btn btn-primary mx-2"}`}>
          Films
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
