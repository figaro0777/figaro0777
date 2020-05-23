import React from 'react';
import "../../App.css";
import AboutTextBig from "../../images/AboutTextBig.png";
import AboutPhoto from "../../images/AboutPhoto.png";
import AboutText from "../../images/AboutText.png";
import FooterLeft from "../../images/FooterLeft.png";
import FooterRight from "../../images/FooterRight.png";

const About = () => {
    return (
        <div className="About">
            <img className="AboutTextBig" src={AboutTextBig} alt='..'/>
            <img className="AboutPhoto" src={AboutPhoto} alt='..'/>
            <img className="AboutText" src={AboutText} alt='..'/>
            <img className="FooterLeft" src={FooterLeft} alt='..'/>
            <img className="FooterRight" src={FooterRight} alt='..'/>
        </div>
    );
};

export default About;