import React, { useState } from "react";
import Square from "./components/Square";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollingText from "./components/ScrollingText";
import Carousel from "./components/Carousel";
import Card from "./components/Card"
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import usePreventBodyScroll from "./components/usePreventBodyScroll";
import "./App.css";
import { FaGlobeAmericas, FaHandshake, FaMonument, FaProjectDiagram,FaFileContract,FaHandsHelping,FaExternalLinkSquareAlt} from "react-icons/fa";

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

const resourceImages = importAll(
  require.context("./assets/SDGS/", false, /\.(png|jpe?g|svg)$/)
);

const resourceImagesALT = importAll(
  require.context("./assets/SDGS-ALT/", false, /\.(png|jpe?g|svg)$/)
);

const squarePaths = Object.values(images);
const squarePathsALT = Object.values(imagesALT);

const resourcePaths = Object.values(resourceImages);
const resourcePathsALT = Object.values(resourceImagesALT);

const elemPrefix = "test"
const getId = index => `${elemPrefix}${index}`

const getItems = () =>
  Array(7)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }))

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="container">
        <Navbar />

        <ScrollingText />

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
      </div>

      <Carousel />

      <h1 className="title">History</h1>
      <div className="history">
        <VerticalTimeline lineColor="#000">
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            icon = {<FaGlobeAmericas/>}
            date="1992"
            dateClassName="date"
          >
            <img src = {require("./assets/images/pic3.jpg")} alt = "development2" className="history-image"></img>
            <p id="content">
            In June 1992, at the Earth Summit in Rio de Janeiro, Brazil, more than 178 countries adopted Agenda 21, a comprehensive plan of action to build a 
            global partnership for sustainable development to improve human lives and protect the environment
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            icon = {<FaHandshake/>}
            date="2000"
            dateClassName="date"
          > 
            <img src = {require("./assets/images/pic4.jpg")} alt = "development2" className="history-image"></img>
            <p id="content">
              Member States unanimously adopted the Millennium Declaration at the Millennium Summit in September 2000 at 
              UN Headquarters in New York.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            icon = {<FaMonument/>}
            date="2012"
            dateClassName="date"
          > 
            <img src = {require("./assets/images/pic5.jpg")} alt = "development2" className="history-image"></img>
          
            <p id="content">
              In Rio de Janeiro, Brazil, Member States adopted the outcome document "The Future We Want" in which they decided, 
              inter alia, to launch a process to develop a set of SDGs to build upon the MDGs and to establish the UN High-level Political Forum on Sustainable Development. 
          
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            icon = {<FaProjectDiagram/>}
            date="2013"
            dateClassName="date"
          > 
            <img src = {require("./assets/images/pic6.jpg")} alt = "development2" className="history-image"></img>
          
            <p id="content">
            The General Assembly set up a 30-member Open Working Group to develop a proposal on the SDGs.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            icon = {<FaFileContract/>}
            date=" January 2015"
            dateClassName="date"
          > 
            <img src = {require("./assets/images/pic7.jpg")} alt = "development2" className="history-image"></img>
          
            <p id="content">
            In January 2015, the General Assembly began the negotiation process on the post-2015 development agenda. 
            2015 was a landmark year for multilateralism and international policy shaping, with the adoption of several major agreements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            icon = {<FaHandsHelping/>}
            date=" September 2015"
            dateClassName="date"
          > 
            <img src = {require("./assets/images/pic8.jpg")} alt = "development2" className="history-last-image"></img>
          
            <p id="content">
            The process culminated in the subsequent adoption of the 2030 Agenda for Sustainable Development, with 17 SDGs at its core, at the UN Sustainable Development Summit in September 2015.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    

      {/*Development Report*/}
      <h1 className="title">Development Reports</h1>
      <div className="development-report">
          
          <div className="report">
            <div className= "report-card">
            <img src = {require("./assets/images/pic1.jpg")} alt = "development1" className="card-image"></img>
            <h3 className="report-card-title"> Sustainable Development Report 2019 </h3>
              
              <p className="card-description">
              The Future is Now: Science for Achieving Sustainable Development, is 
              the first Global Sustainable Development Report prepared by the Independent Group of Scientists 
              appointed by the United Nations Secretary-General. 
              </p>
             
              <button className="card-button"> Learn More </button>
            </div>
            </div>
        

        <div className="report1">
        <div className= "report-card">
          <img src = {require("./assets/images/pic2.jpg")} alt = "development2" className="card-image"></img>
            <h3 className="report-card-title"> Sustainable Development Report 2023</h3>
              <p className="card-description">
              The GSDR 2023, "Times of Crisis, Times of Change: Science for Accelerating Transformations to Sustainable Development" 
              highlights key transformations needed in different sectors and tools for progress towards the SDGs.
              </p>
              <button className="card-button"> Learn More </button>
          </div>
        </div>
        </div>


        
      
        

        
      {/*Progress Report*/}
      <h1 className="title">Progress Reports</h1>
      <div className="set-one">
          
        <div className="progress">
          <div className= "card">

          <h1 className="card-title"> 2018 <FaExternalLinkSquareAlt/></h1> 
            <p className="card-description">
            The report  shows that, in some areas, progress is insufficient to meet the Agenda’s goals and targets by 2030. 
            This is especially true for the most disadvantaged and marginalized groups...
            </p>
          </div>
          </div>
      
      <div className="progress-1">
      <div className= "card">
          <h1 className="card-title"> 2019  <FaExternalLinkSquareAlt/> </h1>
            <p className="card-description">
            The report demonstrates that progress is being made in some critical areas, and that some favorable trends are evident.
            Extreme poverty has declined considerably...
            </p>
        </div>
      </div>
      
      <div className="progress-2">
      <div className= "card">
          <h1 className="card-title"> 2020  <FaExternalLinkSquareAlt/> </h1>
            <p className="card-description">
            The Sustainable Development Goals Report 2020 brings together the latest data to show us that, 
            before the COVID-19 pandemic, progress remained uneven and we were not on track to meet the Goals by 2030... 
            </p>
        </div>
      </div>
      </div>
      
      <div className="set-two">
          <div className="progress">
            <div className= "card">
            <h1 className="card-title"> 2021  <FaExternalLinkSquareAlt/></h1>
              <p className="card-description">
              Progress had been made in poverty reduction, maternal and child health, 
              access to electricity, and gender equality, but not enough to achieve the Goals by 2030... 
              </p>
            </div>
            </div>
        
        <div className="progress-1">
        <div className= "card">
            <h1 className="card-title"> 2022  <FaExternalLinkSquareAlt/></h1>
              <p className="card-description">
              The Sustainable Development Goals Report 2022 racks the global and regional progress towards the 17 Goals with in-depth 
              analyses of selected indicators for each Goal...
              </p>
          </div>
        </div>
      <div className="progress-2">
      <div className= "card">
          <h1 className="card-title"> 2023  <FaExternalLinkSquareAlt/></h1>
            <p className="card-description">
            The Sustainable Development Goals Report 2023: Special Edition provides a powerful call to action, 
            presenting a candid assessment of the SDGs based on the latest data and estimates...
            </p>
        </div>
      </div>
      </div>


   {/*resources*/}
      <div className="resources">
          <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ScrollMenu
              onWheel={onWheel}
            >
              {items.map(({ id }) => (
                <Card
                  title={id}
                  // NOTE: itemId is required for track items
                  itemId={id}
                  key={id}
                />
              ))}
            </ScrollMenu>
          </div>
      </div>
        
     

      <Footer />
    </>
  );
}

export default App;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15

  if (isThouchpad) {
    ev.stopPropagation()
    return
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext()
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev()
  }
}
