import React from "react";
import NavBar from "../components/navbar/NavBar";
import Home from "./Home";
import "../styles/Main.css"
import AboutMe from "./AboutMe";
import Skils from "./Skils";

const Main = () => {
    return (
        <div className="body">
            <div>
                <NavBar/>
            </div>
            <div className="home">
                <Home/>
            </div>
            <div >
                <AboutMe/>
            </div>
            <div >
                <Skils/>
            </div>
        </div>
    )
}

export default Main;