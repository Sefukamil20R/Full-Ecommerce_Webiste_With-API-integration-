import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-left">
        <div className="contact-item">
          <div className="icon red-circle">
            <FaPhoneAlt />
          </div>
          <div>
            <h4>Call To Us</h4>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8800123456789</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon red-circle">
            <FaEnvelope />
          </div>
          <div>
            <h4>Write to Us</h4>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: customer@breakfast.com</p>
            <p>Email: support@breakfast.com</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-right">
        <div className="form-group">
          <input type="text" placeholder="Your Name*" />
          <input type="email" placeholder="Your Email*" />
          <input type="tel" placeholder="Your Phone*" />
        </div>
        <textarea placeholder="Your Message"></textarea>
        <button className="btn-send">Send Message</button>
      </div>
    </div>
  );
};

export default ContactUs;
