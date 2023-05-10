import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Swiggy.svg"

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
      <img
        className="logo"
        alt="App logo"
        src={logo}
      />
      </Link>
     
      <div className="header-categories">
        <ul>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>
            <Link to={"/about"}> About</Link>
          </li>
          <li><Link to={"/instamart"}>Instamart </Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
