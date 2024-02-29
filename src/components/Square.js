import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

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
    setCursorPosition({ x: width * 3, y: height + 250 });
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
          className="cursor-square"
          style={{ left: cursorPosition.x - 300, top: cursorPosition.y - 250 }}
        >
          <h2>{hoveredIndex + 1}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default Square;
