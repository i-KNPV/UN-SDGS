import React from "react";

const Square = ({ image }) => {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <img src={image} alt="Square" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Square;
