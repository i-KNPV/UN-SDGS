import React, { useState } from "react";
import Square from "./components/Square";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollingText from "./components/ScrollingText";
import Carousel from "./components/Carousel";
import Example from "./components/Card";
import Logo from "./components/Logo";
import Header from "./components/Header";
import HistoryCard from "./components/HistoryCard";
import historyData from "./components/HistoryContent";
import progressData from "./components/ProgressContent";
import ProgressCard from "./components/ProgressCard";

import { motion } from "framer-motion";

import "react-horizontal-scrolling-menu/dist/styles.css";
import "./App.css";

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

const imagesALT = importAll(
  require.context("./assets/SDGS-ALT/", false, /\.(png|jpe?g|svg)$/)
);

const squarePaths = Object.values(images);
const squarePathsALT = Object.values(imagesALT);

const logos = [
  "https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/05/Jollibee-logo.png",
  "https://1000logos.net/wp-content/uploads/2020/09/Mondelez-Logo.png",
  "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo-2015.png",
  "https://logolook.net/wp-content/uploads/2023/09/UNICEF-Logo.png"
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <>
      <Navbar />

      <ScrollingText hoveredIndex={hoveredIndex} />

      <div className="gallery">
        {squarePaths.map((image, index) => (
          <motion.div
            key={index}
            className="square"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
          >
            <Square
              key={index}
              image={image}
              imageALT={squarePathsALT[index]}
              index={index}
              setHoveredIndex={setHoveredIndex}
              hoveredIndex={hoveredIndex}
            />
          </motion.div>
        ))}
      </div>

      <Carousel />
      <Header
        title="HISTORY"
        description="The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future."
      />

      {/*History Part*/}
      <div className="history">
        {historyData.map((historyData) => (
          <HistoryCard
            image={historyData.image}
            title={historyData.title}
            description={historyData.description}
          />
        ))}
      </div>
      
      {/*Progress Part*/}
      <Header
        title="PROGRESS REPORTS"
        description="Every year, the UN Secretary General presents an annual SDG Progress report, which is developed in cooperation with the UN System."
      />

      <div className="progress">
        {progressData.map((progressData) => (
          <ProgressCard
            image={progressData.image}
            title={progressData.title}
            date = {progressData.date}
            author = {progressData.author}
            description={progressData.description}
          />
        ))}
      </div>

      {/* resources */}
      <h3 className="header-title">Gallery</h3>
        <Example />
      <div className="partner">
      <h3 className="header-title">Partnered Organizations</h3>
        <Logo images={logos} speed={5000} />
      </div>
      <Footer />
    </>
  );
}

export default App;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
