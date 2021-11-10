import "./LandingPage.css";
import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <NavLink className="photo" to="/home">
        <img className="photo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyh2N-IkRh8ZMA63IPfR173PpDJ2CRC0APzZc7e-KDVWajJAE5L61rbsgh5-Qxpmvd98&usqp=CAU'/>
      </NavLink>
    </div>
  );
};

export default LandingPage;
