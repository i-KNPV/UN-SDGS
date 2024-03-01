import React from "react";

const HistoryCard = ({image, title, description}) => {
    return(
            <div className="historycard">
            <img src = {image} className="history-image"></img>      
            <div className="history-content">
                <h3 className="history-title"> {title} </h3>
                <p className = "history-description"> {description} </p>
            </div>
        </div>
    )
};

export default HistoryCard;