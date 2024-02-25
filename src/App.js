import React from "react";
import Square from "./components/Square";

// Importing SDGS images
import square1 from "./assets/SDGS/E-WEB-Goal-1.png";
import square2 from "./assets/SDGS/E-WEB-Goal-2.png";
import square3 from "./assets/SDGS/E-WEB-Goal-3.png";
import square4 from "./assets/SDGS/E-WEB-Goal-4.png";
import square5 from "./assets/SDGS/E-WEB-Goal-5.png";
import square6 from "./assets/SDGS/E-WEB-Goal-6.png";
import square7 from "./assets/SDGS/E-WEB-Goal-7.png";
import square8 from "./assets/SDGS/E-WEB-Goal-8.png";
import square9 from "./assets/SDGS/E-WEB-Goal-9.png";
import square10 from "./assets/SDGS/E-WEB-Goal-10.png";
import square11 from "./assets/SDGS/E-WEB-Goal-11.png";
import square12 from "./assets/SDGS/E-WEB-Goal-12.png";
import square13 from "./assets/SDGS/E-WEB-Goal-13.png";
import square14 from "./assets/SDGS/E-WEB-Goal-14.png";
import square15 from "./assets/SDGS/E-WEB-Goal-15.png";
import square16 from "./assets/SDGS/E-WEB-Goal-16.png";
import square17 from "./assets/SDGS/E-WEB-Goal-17.png";

function App() {
  const squarePaths = [
    square1,
    square2,
    square3,
    square4,
    square5,
    square6,
    square7,
    square8,
    square9,
    square10,
    square11,
    square12,
    square13,
    square14,
    square15,
    square16,
    square17,
  ];

  console.log(squarePaths);

  return (
    <div className="container">
      <div className="gallery">
        {squarePaths.map((image, index) => (
          <Square key={index} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
