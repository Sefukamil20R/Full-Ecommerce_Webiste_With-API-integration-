import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Exclusive</h1>
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <FaSearch />
        </div>
        <FaHeart className="icon" />
        <div className="cart-icon">
          {/* Add a Link wrapper to the cart icon */}
          <Link to="/CartPage">


            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
        <div className="profile-icon" onClick={toggleDropdown}>
          <FaUser />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/my-account">Manage My Account</Link>
              <Link to="/my-orders">My Orders</Link>
              <Link to="/my-cancellations">My Cancellations</Link>
              <Link to="/my-reviews">My Reviews</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
