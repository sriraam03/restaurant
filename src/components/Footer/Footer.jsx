import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>FlavorFiesta</h1>
          <p>
          we deliver delicious meals straight to your door, fresh and fast. 
        From local favorites to international cuisines, we bring the best restaurants in town right to your fingertips. 
        Enjoy hassle-free ordering and quick delivery anytime, anywhere.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9863804580</li>
            <li>contact@foodieshub.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FOODIESHUB</p>
    </footer>
  );
};

export default Footer;
