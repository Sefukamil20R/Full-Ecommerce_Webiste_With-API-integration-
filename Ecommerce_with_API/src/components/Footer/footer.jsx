import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane  } from "react-icons/fa";
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Exclusive</h3>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <div className="subscribe-bar">
          <input type="email" placeholder="Enter your email" />
          <button>
            <FaPaperPlane  />
          </button>
        </div>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <p>111 Bijoy Sarani, Dhaka,</p>
          <p> DH 1515, Bangladesh</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="footer-column">
        <h3>Account</h3>
        <p>My Account</p>
        <p>Login/Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className="footer-column">
        <h3>Quick Link</h3>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="footer-column">
        <h3>Download App</h3>
        <div className="app-links">
          <div className="qr-code"></div>
          <div className="playstore-icon"></div>
        </div>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
