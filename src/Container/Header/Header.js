import React from "react";
import { Link } from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper";
import homeImg from "./Logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/"><img src={homeImg} alt="bookShopLogo" className="homeShopLogo" /></Link>
          <div className="d-flex justify-content-between align-content-center">
            <input className="form-control" />
            <Link to="/Main" className="text-decoration-none d-flex justify-content-center ms-3 w-50 btn btn-info">Main Page</Link>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
export default Header;
