import React from "react";
import "./Header.css"
import Logo from"../../images/headerlogo.png";
import { Link } from "react-router-dom";
import HeaderContactUs from "../../images/HeaderContactUs.png"
import HeaderNumber from "../../images/HeaderNumber.png"
import Modal01 from "../Modal/Modal";

const Header = () => {

    return (
            <div className="Header">
                <div className="HeaderLogo"><img src={Logo}/> </div>
                <img className="HeaderNumber" src={HeaderNumber}/>
                <div className="HeaderContactUs">
                    <Modal01/>
                </div>

                <div className="HeaderButtonBox">
                    <div className="HeaderButton"><Link to="/">Homepage</Link></div>
                    <div className="HeaderButton"><Link to="/products">Products</Link></div>
                    <div className="HeaderButton"><Link to="/gallery">Gallery</Link></div>
                    <div className="HeaderButton"><Link to="/feedback">Feedback</Link></div>
                    <div className="HeaderButton"><Link to="/about">About</Link></div>
                </div>
            </div>
    );
};

export default Header;