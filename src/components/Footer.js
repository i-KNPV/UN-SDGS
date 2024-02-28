import React from 'react';
import LOGO from '../assets/LOGO/un-alt.png'
import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="tagline">
                    <p>
                        Building a better tomorrow. <br />
                        Together.
                    </p>
                </div>
                <div className="right">
                    <ul>
                        <li>UN in Action</li>
                        <li>Resources</li>
                        <li>2030 Agenda</li>
                        <li>Donate</li>
                        <li>Newsletter</li>
                        <li>Site Index</li>
                    </ul>
                    <div className='icons'>
                        <FaSquareFacebook />
                        <FaSquareInstagram />
                        <FaSquareXTwitter />
                     </div>
                </div>
            </div>
            
            <hr />

            <div className="bottom">
                <div className="logo">
                    <img src={LOGO} alt="UN LOGO" />
                </div>

                <div className="links">
                    <a href="#">CONTACT</a>
                    <a href="#">COPYRIGHT</a>
                    <a href="#">FAQ</a>
                    <a href="#">PRIVACY NOTICE</a>
                    <a href="#">TERMS OF USE</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;