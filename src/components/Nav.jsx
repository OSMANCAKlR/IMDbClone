import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../assets/logo.png";
import proLogo from "../assets/imdbpro-logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
        <figure>
          <img className="logo" src={logo} alt="" />
        </figure>
        </Link>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-bars" className="nav__menu" />
          Menu
        </div>
        <div className="search__container">
        <input type="text" className="nav__search" placeholder="Search IMDb" />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
        <figure>
          <img src={proLogo} alt="" className="pro__logo" />
        </figure>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Watchlist
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
