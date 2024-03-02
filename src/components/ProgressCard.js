import React from "react";

const ProgressCard = ({image, title, date, author, description}) => {
    return(
            <div className="progresscard">
                <h1 className= "progress-top">{date}</h1>
                <h3 className="progress-title"> {title} </h3>
                <h5 className="progress-author"> {author} </h5>
                <img src = {image} className="progress-image"></img>      
                <p className = "progress-description"> {description} </p>
                <div className= "button-position"><button className="progress-button"><a className="button-label">Learn More</a></button></div>     
            </div>
    )
};

export default ProgressCard;