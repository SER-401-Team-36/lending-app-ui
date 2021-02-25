import './Navbar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/asuLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li>
          <img className="navbar__asuLogo" alt="" src={logo} />
        </li>
        <li>
          <NavLink
            to="/ViewPlayers"
            className="navbar__links navbar__links--hover"
            activeClassName="underline"
          >
            Players
          </NavLink>
        </li>
        <li>
          <Link
            to="/ViewAnalytics"
            className="navbar__links navbar__links--hover"
          >
            Analytics
          </Link>
        </li>
        <li></li>
        <li></li> <li></li> <li></li>
        <li></li> <li></li> <li></li>
        <li></li> <li></li>
        <li></li> <li></li>
        <li></li> <li></li>
        <li>
          <Link to="/LoginPage" className="loginPage">
            <i id="loginimage" class="fas fa-sign-in-alt"></i>
            <br></br>
            Login
          </Link>
        </li>
        <li>
          <Link to="/Signup" className="signup">
            <i id="signupimg" class="fas fa-user-plus"></i>
            <br></br>
            Signup
          </Link>
        </li>
        <li>
          <Link to="/LoginPage" className="accountPage">
            <i id="accountimg" class="fas fa-user-circle fa-lg"></i>
            <br></br>
            Account
          </Link>
        </li>
        <li>
          <Link to="/LoginPage" className="signout">
            <i id="signoutimg" class="fas fa-sign-out-alt"></i>
            <br></br>
            Signout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
