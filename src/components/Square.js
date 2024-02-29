import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const description = {
  1: "End poverty in all its form everywhere",
  2: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture",
  3: "Ensure healthy lives and promote well-being for all at all ages",
  4: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
  5: "Achieve gender equality and empower all women and girls",
  6: "Ensure availability and sustainable management of water and sanitation for all",
  7: "Ensure access to affordable, reliable, sustainable and modern energy for all",
  8: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
  9: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation",
  10: "Reduce income inequality within and among countries",
  11: "Make cities and human settlements inclusive, safe, resilient, and sustainable",
  12: "Ensure sustainable consumption and production patterns",
  13: "Take urgent action to combat climate change and its impacts by regulating emissions and promoting developments in renewable energy",
  14: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
  15: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
  16: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
  17: "Strengthen the means of implementation and revitalize the global partnership for sustainable development"
}

const Square = ({ image, imageALT, index, setHoveredIndex, hoveredIndex }) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [showCursorSquare, setShowCursorSquare] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorSquare = document.createElement("div");
  cursorSquare.classList.add("cursor-square");
  document.body.appendChild(cursorSquare);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
    console.log(width, height);
    setCursorPosition({ x: rY, y: rX });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
    setHoveredIndex(-1);
    setShowCursorSquare(false);
  };

  const handleMouseEnter = () => {
    if (!ref.current) return;
    setHoveredIndex(index);
    setShowCursorSquare(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: "preserve-3d",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
    >
      <div className="image-wrapper">
        <img
          className={
            hoveredIndex === index || hoveredIndex === -1
              ? "default"
              : "alternative"
          }
          src={image}
          alt="Square"
        />
        <img
          className={
            hoveredIndex !== index && hoveredIndex !== -1
              ? "default"
              : "alternative"
          }
          src={imageALT}
          alt="Square"
        />
      </div>
      {showCursorSquare && (
        <div
          className="cursor-square glass"
          style={{ left: cursorPosition.x, top: cursorPosition.y}}
        >
          <h2>{hoveredIndex + 1}</h2>
          <h5>GOAL:</h5>
          <p>{description[hoveredIndex + 1]}</p>
        </div>
      )}
    </motion.div>
  );
};

export default Square;
