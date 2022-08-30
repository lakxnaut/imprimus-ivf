import { Button } from "@mui/material";
import React from "react";
import "./HeroSection.css";

import {
  BsFileMedicalFill,
  BsFillFileEarmarkMedicalFill,
} from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="hero-container">
        <div className="hero-contact-box">
          <h1>World Class Fertility Treatment</h1>
          <h4 className="hero-desc">
            Imprimis IVF is emerging as the fastest growing and trusted
            fertility chain in india that provides a wide range of infertility
            treatments to help people start their families
          </h4>
          <div className="contact-box">
            <Button
              //   variant="outlined"
              className="contact-btn"
              style={{
                padding: "10px 20px",
                fontSize: 20,
                marginRight: -10,
                backgroundColor: "red",
                color: "white",
                borderRadius: 30,
              }}
            >
              Contact
            </Button>
            <h2 className="contact-number">767-855-6881</h2>
          </div>
        </div>

        <div className="feature-box">
          <h1 className="feature-heading">
            Wondering if it's time to see a fertility specialist?
          </h1>
          <div className="icon-box">
            <BsFileMedicalFill style={{ fontSize: 60 }} />
            <p>-------------------</p>
            <BsFillFileEarmarkMedicalFill style={{ fontSize: 60 }} />
            <p>-----------------</p>
            <BsFillFileEarmarkMedicalFill style={{ fontSize: 60 }} />
          </div>
          <div className="icon-names">
            <p>IUI Treatment</p>
            <p>IVF Treatment</p>
            <p>ICSI Treatment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
