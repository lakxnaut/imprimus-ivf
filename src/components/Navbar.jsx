import React from "react";
import logo from "../assets/ivf.png";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Navbar.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-top-menu">
          <div className="logo-box">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="nav-menu">
            <h3 className="nav-home">Home</h3>
            <h3 className="nav-about">About Us</h3>
            <h3 className="nav-treatment">Treatment</h3>
            <h3 className="nav-infertility">Infertility Factor</h3>
            <div className="accord">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography> Menu </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link href="#">Home</Link>
                  </Typography>
                  <Typography>
                    <Link href="#">About us</Link>
                  </Typography>
                  <Typography>
                    <Link href="#">Treatment</Link>
                  </Typography>
                  <Typography>
                    <Link href="#">Infertility Factor</Link>
                  </Typography>
                  <Typography>
                    <Link
                      style={{
                        color: "red",
                        fontWeight: "bold",
                      }}
                      href="#"
                    >
                      Schedule Appointment
                    </Link>
                  </Typography>
                  <Typography>
                    <Link
                      style={{
                        color: "red",
                        fontWeight: "bold",
                      }}
                      href="#"
                    >
                      Login
                    </Link>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="menu-buttons">
              <Button
                // variant="outlined"

                style={{
                  padding: "8px 20px",

                  textTransform: "none",

                  marginRight: 10,
                  borderRadius: 50,
                  background: "red",
                  color: "white",
                }}
                size="large"
              >
                Schedule Appointment
              </Button>
              <div className="btn-login">
                <Button
                  variant="outlined"
                  style={{
                    padding: "8px 25px",
                    textTransform: "none",

                    color: "red",
                    borderRadius: 50,
                    background: "white",
                  }}
                  size="large"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bottom-menu">
          <h3>Get Started </h3>
          <h3>Treatment</h3>
          <h3>Resources</h3>
          <h3>Patient Hub</h3>
          <AiOutlineSearch
            style={{
              fontSize: 25,
              marginLeft: 25,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
