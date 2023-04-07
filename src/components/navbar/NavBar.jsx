import React from "react";
import "../../styles/NavBar.css";

const NavBar = () => {
  // const navigateTo= () => history.push("loging");

  // state = {clicked:false}
  return (
    <nav className="NavbarItems">
      <h1 className="logo">
       VL <i className="fa-solid fa-car"></i>
        <i className=""></i>
      </h1>
      {/* <div className="menu-icon">
                <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div> */}
    </nav>
  );
};

export default NavBar;