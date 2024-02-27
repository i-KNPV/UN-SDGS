import React from "react";
import LOGO from "../assets/LOGO/un.png";

const Navbar = () => {
    return(
        <div className="navbar">
            <img src={LOGO} alt="UN Logo" />
            <div className="buttons">
                <button><a href="#">PROGRESS</a></button>
                <button><a href="#">HISTORY</a></button>
                <button><a href="#">RESOURCES</a></button>
            </div>
        </div>
    )
};

export default Navbar;
