import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by - <b>Soutrik Acharya</b>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/soutrikacharya/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/soutrik-acharya-51b76a16a/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/soutrikacharya/" target="__blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a href="mailto:soutrik1.acharya@gmail.com" target="__blank">
          <i className="far fa-envelope fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/soutrik.acharya/" target="__blank">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;