import { React } from "react";
import Square from "./components/Square";
import { motion } from "framer-motion";

function importAll(r) {
  let images = {};
  r.keys().forEach((key, index) => {
    images[index + 1] = r(key);
  });
  return images;
}

const images = importAll(
  require.context("./assets/SDGS/", false, /\.(png|jpe?g|svg)$/)
);

const squarePaths = Object.values(images);

function App() {
  console.log(squarePaths);

  return (
    <div className="container">
      <div className="gallery">
        {squarePaths.map((image, index) => (
          <motion.div
            key={index}
            className="square"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
          >
            <Square key={index} image={image} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
