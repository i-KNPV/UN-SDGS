import React, { useState } from "react";
import Square from "./components/Square";
import Navbar from "./components/Navbar";
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

      <h1 className="title">Progress Report</h1>
      <div className="progress">
        <VerticalTimeline lineColor="#000">
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            date="2016"
            dateClassName="date"
          >
            <h3 className="report-title">SDG Progress Report 2016</h3>
            <p id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              velit ex. Etiam in pellentesque eros. Proin blandit faucibus dolor
              tristique laoreet.
              <br />
              Proin tincidunt ligula at lacinia malesuada. Mauris vehicula nibh
              non efficitur dignissim. h
            </p>
            <button className="button">Read more</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            date="2017"
            dateClassName="date"
          >
            <h3 className="report-title">SDG Progress Report 2017</h3>
            <p id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              velit ex. Etiam in pellentesque eros. Proin blandit faucibus dolor
              tristique laoreet.
              <br />
              Proin tincidunt ligula at lacinia malesuada. Mauris vehicula nibh
              non efficitur dignissim. h
            </p>
            <button className="button">Read more</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            date="2018"
            dateClassName="date"
          >
            <h3 className="report-title">SDG Progress Report 2018</h3>
            <p id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              velit ex. Etiam in pellentesque eros. Proin blandit faucibus dolor
              tristique laoreet.
              <br />
              Proin tincidunt ligula at lacinia malesuada. Mauris vehicula nibh
              non efficitur dignissim. h
            </p>
            <button className="button">Read more</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            date="2019"
            dateClassName="date"
          >
            <h3 className="report-title">SDG Progress Report 2019</h3>
            <p id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              velit ex. Etiam in pellentesque eros. Proin blandit faucibus dolor
              tristique laoreet.
              <br />
              Proin tincidunt ligula at lacinia malesuada. Mauris vehicula nibh
              non efficitur dignissim. h
            </p>
            <button className="button">Read more</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            date="2020"
            dateClassName="date"
          >
            <h3 className="report-title">SDG Progress Report 2020</h3>
            <p id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              velit ex. Etiam in pellentesque eros. Proin blandit faucibus dolor
              tristique laoreet.
              <br />
              Proin tincidunt ligula at lacinia malesuada. Mauris vehicula nibh
              non efficitur dignissim. h
            </p>
            <button className="button">Read more</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            date="2021"
            dateClassName="date"
          >
            <h3 className="report-title">SDG Progress Report 2021</h3>
            <p id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              velit ex. Etiam in pellentesque eros. Proin blandit faucibus dolor
              tristique laoreet.
              <br />
              Proin tincidunt ligula at lacinia malesuada. Mauris vehicula nibh
              non efficitur dignissim. h
            </p>
            <button className="button">Read more</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            date="2022"
            dateClassName="date"
          >
            <h3 className="report-title">SDG Progress Report 2022</h3>
            <p id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              velit ex. Etiam in pellentesque eros. Proin blandit faucibus dolor
              tristique laoreet.
              <br />
              Proin tincidunt ligula at lacinia malesuada. Mauris vehicula nibh
              non efficitur dignissim. h
            </p>
            <button className="button">Read more</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="tracker"
            iconStyle={{ background: "#808080", color: "#fff" }}
            date="2023"
            dateClassName="date"
          >
            <h3 className="report-title">SDG Progress Report 2023</h3>
            <p id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              velit ex. Etiam in pellentesque eros. Proin blandit faucibus dolor
              tristique laoreet.
              <br />
              Proin tincidunt ligula at lacinia malesuada. Mauris vehicula nibh
              non efficitur dignissim. h
            </p>
            <button className="button">Read more</button>
          </VerticalTimelineElement>
        </VerticalTimeline>
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
      </div>
    </>
  );
}

// resources

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
