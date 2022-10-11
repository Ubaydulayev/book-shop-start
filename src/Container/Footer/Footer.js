import React from "react";
import FooterWrapper from "./FooterWrapper";
import homeImg from "../Header/Logo.svg";
import algorismic from "./Algorismic.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src={homeImg} alt="bookShopLogo" className="homeShopLogo" />
          </Link>
          <a href="https://www.algorismic.uz/">
            <img src={algorismic} alt="algorismic" className="algorismic" />
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
