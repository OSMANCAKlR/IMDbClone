import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import proLogo from "../assets/imdbpro-logo.png";
import { Link, useNavigate  } from "react-router-dom";
import MovieInfo from "../pages/MovieInfo";

function Nav() {
  const [searchName, setSearchName] = useState();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/${searchName}`);
    }
  };





  console.log(searchName)

  return (
    <nav>
      <div className="nav__container">
        <div className="logo__menu">

        <Link to="/">
          <figure>
            <img className="logo" src={logo} alt="" />
          </figure>
        </Link>
        <div className="menu__bar">
          <FontAwesomeIcon icon="fa-solid fa-bars" className="nav__menu" />
          <p className="menu__text">Menu </p> 
        </div>
        </div>
        <div className="search__container">
          <input
            onChange={(event) => setSearchName(event.target.value)}
            type="text"
            className="nav__search"
            placeholder="Search IMDb"
            onKeyPress={handleSearch}
          />
        <Link to={`/${searchName}`}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Link>
        </div>
        <figure>
          <img src={proLogo} alt="" className="pro__logo" />
        </figure>
        <ul className="nav__links">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <li className="nav__list nav__list--hide">
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
