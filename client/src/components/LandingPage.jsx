import "./LandingPage.css"
import React from "react";
import { NavLink } from "react-router-dom";






const LandingPage = () => {
    return (
        <div className="landing">
            <NavLink className="photo" to="/home" ></NavLink>
        </div>
    )
}

export default LandingPage;