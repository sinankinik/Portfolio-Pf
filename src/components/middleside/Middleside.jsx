import React from 'react'


import Slider from "./Slider";
import MyServices from "./MyServices";
import PricePlans from "./PricePlans";
import Footer from './Footer';
import Recommendations from './Recommendations';
import Education from './Education';
import WorkHistory from './WorkHistory';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Map from './Map';
import Refs from './Refs';

const Middleside = () => {
    return (
        <div>
            <div id="home-section"><Slider /></div>
            <div id="services-section"><MyServices /></div>
            <div id="priceplans-section"><PricePlans /></div>
            <div id="recommendations-section"><Recommendations /></div>
            <div id="education-section"><Education /></div>
            <div id="workhistory-section"><WorkHistory /></div>
            <div id="portfolio-section"><Portfolio /></div>
            <div id="blog-section"><Blog /></div>
            <div id="contact-section"><Contact /></div>
            <div id="map-section"><Map /></div>
            <div id="refs-section"><Refs /></div>
            <div id="footer-section"><Footer /></div>
        </div>
    )
}

export default Middleside
