import React from "react";
import "../../styles/NavBar.css";

const NavBar = () => {
  // const navigateTo= () => history.push("loging");

  // state = {clicked:false}
  return (
    // <nav className="NavbarItems">
    //   <h1 className="logo">
    //    VL <i className="fa-solid fa-car"></i>
    //     <i className=""></i>
    //   </h1>
    //   {/* <div className="menu-icon">
    //             <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
    //         </div> */}
    // </nav>
    <section className="navSection">
      <section className="bar">
        <nav>
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#skil">Skils</a>
            </li>
            <li>
              <a href="#myprojects">My Projects</a>
            </li>
            <li>
              <a href="#myservice">My Service</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav> 
       <h1 className="logo">
        VL <i className="fa-solid fa-car"></i>
         <i className=""></i>
       </h1>
       {/* <div className="menu-icon">
    //             <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
    //         </div> */}
     
      </section>
    </section>
  );
};

export default NavBar;
