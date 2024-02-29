import React, { useState , useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Carousel = () => {
    const [page, setPage] = useState(1);
    const [svgs, setSvgs] = useState([]);

    useEffect(() => {
        const importSvgs = async () => {
            try {
                const svgs = (await import(`../assets/SDGS-TARGETS/GOAL_${page}_TARGETS_SVG`)).default;
                setSvgs(svgs);
            } catch (error) {
                console.error(`Failed to load SVGs for page ${page}:`, error);
            }
        };
        importSvgs();
    }, [page]);

    const handlePrev = () => {
        if (page > 1) {setPage(page - 1);}    
    }

    const handleNext = () => {
        if (page < 12) { setPage(page + 1);}   
    }

    const getPageColor = (page) => {
        switch (page) {
            case 1: return "--sgd1";
            case 2: return "--sgd2";
            case 3: return "--sgd3";
            case 4: return "--sgd4";
            case 5: return "--sgd5";
            case 6: return "--sgd6";
            case 7: return "--sgd7";
            case 8: return "--sgd8";
            case 9: return "--sgd9";
            case 10: return "--sgd10";
            case 11: return "--sgd11";
            case 12: return "--sgd12";
            case 13: return "--sgd13";
            case 14: return "--sgd14";
            case 15: return "--sgd15";
            case 16: return "--sgd16";
            case 17: return "--sgd17";
            default: return "--bg-color";
        }
    }

    return(
        <div className="solid" style={{ backgroundColor: `var(${getPageColor(page)})` }}>
            <div className="overflow-number">
                {page}
            </div>

            <div className="title">
                <h3>TARGETS</h3>
            </div>

            <div className="button-container">
                <button onClick={handlePrev}><IoIosArrowRoundBack size="25px"/> PREV</button>
                <button onClick={handleNext}>NEXT <IoIosArrowRoundForward size="25px"/></button>
            </div>

            <div className="content-container">
                <div className="svg-container">
                    {svgs.map((svg, index) => (
                        <div className="item">
                            <img key={index} src={svg} alt={`SVG ${index}`} />
                        </div>
                    ))}
                </div>
                <div className="read-more-button">
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
};

export default Carousel;
