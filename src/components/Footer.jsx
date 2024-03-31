import React from "react";
import {Link} from "react-router-dom";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <Link to="/" className="logo">
          City Supermarket
        </Link>
      </div>
      <div className="aboutUs">
        Get To Know Us
        <ul className="footer-links">
          <Link to="#">
            <li className="footer-link">About Us</li>
          </Link>
          <Link to="#">
            <li className="footer-link">Careers</li>
          </Link>
        </ul>
      </div>
      <div className="connect">
        Connect With Us
        <ul className="footer-links">
          <Link to="#">
            <li className="footer-link">Facebook</li>
          </Link>
          <Link to="#">
            <li className="footer-link">Twitter</li>
          </Link>
          <Link to="#">
            <li className="footer-link">Instagram</li>
          </Link>
        </ul>
      </div>
      <div className="makemoney">
        Make Money with Us
        <ul className="footer-links">
          <Link to="/seller/login" target="_blank">
            <li className="footer-link">Sell On City Supermarket</li>
          </Link>
          <Link to="#">
            <li className="footer-link">Protect and Build Your Brand</li>
          </Link>
          <Link to="#">
            <li className="footer-link">Advertise Your Products</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
