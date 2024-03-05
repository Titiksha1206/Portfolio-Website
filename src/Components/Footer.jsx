import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Titiksha Gupta</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#certification" className="footer__link">
              Certifications
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualifications
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-facebook"></i>
          </a>

          <a
            href="https://twitter.com/Titiksha2105"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-twitter"></i>
          </a>

          <a
            href="https://instagram.com/__._.titiksha._.__?igshid=NGVhN2U2NjQ0Yg=="
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Titiksha Gupta. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
