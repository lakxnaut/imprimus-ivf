import React from "react";
import ServiceComponent from "./ServiceComponent";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <h1 className="service-heading">Services We Offer</h1>
        <div className="services-component-container">
          <ServiceComponent />
          <ServiceComponent />
          <ServiceComponent />
        </div>
        <div className="services-component-container">
          <ServiceComponent />
          <ServiceComponent />
          <ServiceComponent />
        </div>
      </div>
    </div>
  );
};

export default Services;
