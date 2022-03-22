import React from "react";

import Logo from "../img/airbnb.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="logo_img" />
    </div>
  );
};

export default Navbar;
