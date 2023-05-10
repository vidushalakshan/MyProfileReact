import React from "react";
import NavBar from "../components/navbar/NavBar";
import Home from "./Home";
import "../styles/Main.css";
import AboutMe from "./AboutMe";
import Skils from "./Skils";
import Project from "./Project";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="home">
        <Home />
      </div>
      <div className="body">
        <div>
          <AboutMe />
        </div>
        <div>
          <Skils />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Service />
        </div>

        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
