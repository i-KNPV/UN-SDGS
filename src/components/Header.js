import React from "react";

const Header = ({title, description}) => {
    return(
        <div className="header">
            <div className="header-inner">
            <h3 className="header-title"> {title} </h3>
            <p className = "header-description"> {description} </p>
        </div>
        </div>
    )
};

export default Header;