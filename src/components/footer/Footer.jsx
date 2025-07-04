import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Rohan Das,Jeet Sadhukhan & Arindam Maity</a>
        </p>
        <div className="social-links">
            <a href=""><AiFillYoutube/></a>
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;