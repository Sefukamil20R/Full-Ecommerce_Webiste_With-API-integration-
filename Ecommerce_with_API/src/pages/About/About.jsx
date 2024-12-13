import React from "react";
import "./About.css";
import Africans from '../../assets/Africans.png';
import Meno from '../../assets/Meno.png';
import Women from '../../assets/women.png';
import menot from '../../assets/menot.png';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTruck, FaHeadset, FaRedoAlt } from "react-icons/fa"; // Import icons


const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Top Section */}
        <div className="about-header">
            <div className="in">
            <h1 className="about-title">Our Story</h1>
          <p className="about-description">
            Founded in 2018, Exclusive is South Asia’s premier online shopping marketplace
            with an active presence in Bangladesh. Supported by a wide range of tailored
            marketing, data, and service solutions, Exclusive hosts 10.5K sellers and
            brands and serves 45.5K customers across the region.
            <br />
            <br />
            Exclusive now has a million products on offer, growing at a very fast
            pace. Exclusive offers a diverse assortment of categories ranging from
            consumer...
          </p>
            </div>
           
          <div className="about-image">
            <img
              src =  {Africans} // Replace with the actual image link
              alt="About Us"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <h3>10.5k</h3>
            <p>Sellers active on our site</p>
          </div>
          <div className="stat-card highlighted">
            <h3>33k</h3>
            <p>Monthly Product Sales</p>
          </div>
          <div className="stat-card">
            <h3>45.5k</h3>
            <p>Customers active on our site</p>
          </div>
          <div className="stat-card">
            <h3>25k</h3>
            <p>Annual gross sale on site</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="team-member">
            <img
              src= {Meno} // Replace with actual image
              alt="Tom Cruise"
            />
            <h4>Tom Cruise</h4>
            <p>Founder & Chairman</p>
            <div className="social-icons">
              <span><FaInstagram />
              </span>
              <span><FaLinkedin/></span>
              <span><FaTwitter/></span>
            </div>
          </div>
          <div className="team-member">
            <img
              src= {Women} // Replace
              alt="Emma Watson"
            />
            <h4>Emma Watson</h4>
            <p>Managing Director</p>
            <div className="social-icons">
            <span><FaInstagram />
              </span>
              <span><FaLinkedin/></span>
              <span><FaTwitter/></span>

            </div>
          </div>
          <div className="team-member">
            <img
              src= {menot} // Replace with actual image
              alt="Will Smith"
            />
            <h4>Will Smith</h4>
            <p>Product Designer</p>
            <div className="social-icons">
            <span><FaInstagram />
              </span>
              <span><FaLinkedin/></span>
              <span><FaTwitter/></span>

            </div>
          </div>
        </div>

      </div>
      <div className="features-containerall">
      <div className="featureall">
        <FaTruck className="feature-iconall" />
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $40</p>
      </div>
      <div className="featureall">
        <FaHeadset className="feature-iconall" />
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="featureall">
        <FaRedoAlt className="feature-iconall" />
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
    </div>
  );
};

export default About;
