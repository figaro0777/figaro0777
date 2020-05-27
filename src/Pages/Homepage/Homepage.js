import React from 'react';
import "./Homepage.css";
import HomepagePhoto1 from "../../images/HomepagePhoto1.png";
import HomepageLogos from "../../images/HomepageLogos.png";
import HomepageTextBig from "../../images/HomepageTextBig.png";
import HomepageTextSmall from "../../images/HomepageTextSmall.png";
import HomepageButtonBlue from "../../images/HomepageButtonBlue.png";
import HomepageButtonWhite from "../../images/HomepageButtonWhite.png";

const Homepage = () => {
    return (
        <div className="Homepage"  >
            <div className="HomepageTextBig"><img className="HomepageTextBig" src={HomepageTextBig}/> </div>
            <div className="HomepageTextSmall"><img className="HomepageTextSmall" src={HomepageTextSmall} /></div>
            <div className="HomepageButtonBlue"><img className="HomepageButtonBlue" src={HomepageButtonBlue} /></div>
            <div className="HomepageButtonWhite"><img className="HomepageButtonWhite" src={HomepageButtonWhite} /></div>
            <img className="HomepagePhoto1" src={HomepagePhoto1}/>
            <img className="HomepageLogos" src={HomepageLogos}/>
        </div>

    );
};

export default Homepage;