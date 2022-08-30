import React from "react";
import "./Footer.css";

import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo-description-container">
          <div className="logo-container">
            <img src="" alt="LOGO"></img>
          </div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="icons-container">
            <BsFacebook color="blue"></BsFacebook>
            <SiGmail></SiGmail>
            <BsLinkedin color="blue"></BsLinkedin>
            <AiFillYoutube></AiFillYoutube>
          </div>
        </div>
        <div className="contact-and-company">
          <div className="contact-us footer-info-container">
            <h3 className="contact-heading footer-heading">Contact us</h3>
            <div className="contact-info-section info-section">
              <p>hello@trank.com</p>
              <p>F.A.Q</p>
              <p>Glossary</p>
            </div>
          </div>
          <div className="company footer-info-container">
            <h3 className="contact-heading footer-heading">company</h3>
            <div className="contact-info-section info-section">
              <p>hello@trank.com</p>
              <p>F.A.Q</p>
              <p>Glossary</p>
            </div>
          </div>
          <div className="legal footer-info-container">
            <h3 className="contact-heading footer-heading">legal</h3>
            <div className="contact-info-section info-section">
              <p>hello@trank.com</p>
              <p>F.A.Q</p>
              <p>Glossary</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright @2022 Imprimis IVF, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
