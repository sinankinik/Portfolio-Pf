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
import Map from './map';
import Refs from './Refs';

const Middleside = () => {
    return (
        <div>
            <Slider />
            <MyServices />
            <PricePlans />
            <Recommendations />
            <Education />
            <WorkHistory />
            <Portfolio />
            <Blog />
            <Contact />
            <Map />
            <Refs />
            <Footer />
        </div>
    )
}

export default Middleside