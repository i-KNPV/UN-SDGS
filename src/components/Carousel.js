import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Carousel = () => {
    return(
        <div className="solid">
            <div className="overflow-number">
                12
            </div>

            <div className="button-container">
                <button><IoIosArrowRoundBack size="25px"/> PREV</button>
                <button>NEXT <IoIosArrowRoundForward size="25px"/></button>
            </div>
        </div>
    )
};

export default Carousel;
