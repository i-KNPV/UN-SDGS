import React from "react";

const ScrollingText = ({ hoveredIndex }) => {
  const getPageColor = (hoveredIndex) => {
    switch (hoveredIndex) {
      case 1:
        return "--sgd1";
      case 2:
        return "--sgd2";
      case 3:
        return "--sgd3";
      case 4:
        return "--sgd4";
      case 5:
        return "--sgd5";
      case 6:
        return "--sgd6";
      case 7:
        return "--sgd7";
      case 8:
        return "--sgd8";
      case 9:
        return "--sgd9";
      case 10:
        return "--sgd10";
      case 11:
        return "--sgd11";
      case 12:
        return "--sgd12";
      case 13:
        return "--sgd13";
      case 14:
        return "--sgd14";
      case 15:
        return "--sgd15";
      case 16:
        return "--sgd16";
      case 17:
        return "--sgd17";
      default:
        return "--bg-color";
    }
  };

  return (
    <div
      className="wrapper"
      style={{ backgroundColor: `var(${getPageColor(hoveredIndex + 1)})` }}
    >
      <div className={hoveredIndex === -1 ? "marquee" : "marquee active"}>
        <p>
          THE SUSTAINABLE DEVELOPMENT GOALS ● THE SUSTAINABLE DEVELOPMENT GOALS
          ● THE SUSTAINABLE DEVELOPMENT GOALS ● THE SUSTAINABLE DEVELOPMENT
          GOALS ● THE SUSTAINABLE DEVELOPMENT GOALS ● THE SUSTAINABLE
          DEVELOPMENT GOALS ● THE SUSTAINABLE DEVELOPMENT GOALS ● THE
          SUSTAINABLE DEVELOPMENT GOALS
        </p>
      </div>
    </div>
  );
};

export default ScrollingText;
