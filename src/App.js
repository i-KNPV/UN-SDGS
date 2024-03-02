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

import { motion } from "framer-motion";

import "react-horizontal-scrolling-menu/dist/styles.css";
import './App.css';

import {
  FaGlobeAmericas,
  FaHandshake,
  FaMonument,
  FaProjectDiagram,
  FaFileContract,
  FaHandsHelping,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

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
      <Header title = "HISTORY"
              description = "The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future."/>

    <div className="history"> 
      {historyData.map(historyData=> (
        <HistoryCard
          image = {historyData.image}
          title = {historyData.title}
          description = {historyData.description}
        />
      ))}
    </div>
    
    <Header title = "PROGRESS REPORTS"
              description = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      

      {/*Development Report*/}
      {/* <h1 className="title">Development Reports</h1>
      <div className="development-report">
        <div className="report" id="report1">
          <div className="report-card">
            <img
              src={require("./assets/images/pic1.jpg")}
              alt="development1"
              className="card-image"
            ></img>
            <h3 className="report-card-title">
              {" "}
              Sustainable Development Report 2019{" "}
            </h3>

            <p className="card-description">
              The Future is Now: Science for Achieving Sustainable Development,
              is the first Global Sustainable Development Report prepared by the
              Independent Group of Scientists appointed by the United Nations
              Secretary-General.
            </p>

            <button className="card-button"> Learn More </button>
          </div>
        </div>

        <div className="report" id="report2">
          <div className="report-card">
            <img
              src={require("./assets/images/pic2.jpeg")}
              alt="development2"
              className="card-image"
            ></img>
            <h3 className="report-card-title">
              {" "}
              Sustainable Development Report 2023
            </h3>
            <p className="card-description">
              The GSDR 2023, "Times of Crisis, Times of Change: Science for
              Accelerating Transformations to Sustainable Development"
              highlights key transformations needed in different sectors and
              tools for progress towards the SDGs.
            </p>
            <button className="card-button"> Learn More </button>
          </div>
        </div>
      </div> */}

      {/*Progress Report*/}
      {/* <h1 className="title">Progress Reports</h1>
      <div className="set-one">
        <div className="progress">
          <div className="card">
            <h1 className="card-title">
              {" "}
              2018 <FaExternalLinkSquareAlt />
            </h1>
            <p className="card-description">
              The report shows that, in some areas, progress is insufficient to
              meet the Agenda’s goals and targets by 2030. This is especially
              true for the most disadvantaged and marginalized groups...
            </p>
          </div>
        </div>

        <div className="progress-1">
          <div className="card">
            <h1 className="card-title">
              {" "}
              2019 <FaExternalLinkSquareAlt />{" "}
            </h1>
            <p className="card-description">
              The report demonstrates that progress is being made in some
              critical areas, and that some favorable trends are evident.
              Extreme poverty has declined considerably...
            </p>
          </div>
        </div>

        <div className="progress-2">
          <div className="card">
            <h1 className="card-title">
              {" "}
              2020 <FaExternalLinkSquareAlt />{" "}
            </h1>
            <p className="card-description">
              The Sustainable Development Goals Report 2020 brings together the
              latest data to show us that, before the COVID-19 pandemic,
              progress remained uneven and we were not on track to meet the
              Goals by 2030...
            </p>
          </div>
        </div>
      </div>

      <div className="set-two">
        <div className="progress">
          <div className="card">
            <h1 className="card-title">
              {" "}
              2021 <FaExternalLinkSquareAlt />
            </h1>
            <p className="card-description">
              Progress had been made in poverty reduction, maternal and child
              health, access to electricity, and gender equality, but not enough
              to achieve the Goals by 2030...
            </p>
          </div>
        </div>

        <div className="progress-1">
          <div className="card">
            <h1 className="card-title">
              {" "}
              2022 <FaExternalLinkSquareAlt />
            </h1>
            <p className="card-description">
              The Sustainable Development Goals Report 2022 racks the global and
              regional progress towards the 17 Goals with in-depth analyses of
              selected indicators for each Goal...
            </p>
          </div>
        </div>
        <div className="progress-2">
          <div className="card">
            <h1 className="card-title">
              {" "}
              2023 <FaExternalLinkSquareAlt />
            </h1>
            <p className="card-description">
              The Sustainable Development Goals Report 2023: Special Edition
              provides a powerful call to action, presenting a candid assessment
              of the SDGs based on the latest data and estimates...
            </p>
          </div>
        </div>
      </div> */}
      {/* resources */}
      <div className="resources">
        <h1 className="title">Resources</h1>
        <Example />
      </div>
      <div className="partner">
        <h1 className="title">Partnered Organizations</h1>
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
