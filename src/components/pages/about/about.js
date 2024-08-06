import React from "react";
import AboutUs from "./aboutus";
import Maps from "./maps";
import Contact from "../contact/contact";
import Service from './service.js'
const About = () => {
  return (
    <>
        <AboutUs/>
        <Service/>
        <Maps/>
        <Contact/>
    </>
  );
};

export default About;
