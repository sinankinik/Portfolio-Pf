import React from 'react'

import web from '/img/webdevelopment.svg';
import uiux from '/img/uiuxdesign.svg';
import sound from '/img/sounddesign.svg';
import game from '/img/gamedesign.svg';
import photography from '/img/photography.svg';
import advertisign from '/img/advertisign.svg';
import ServiceItems from './ServiceItems';

const MyServices = () => {

    const items = [
        { src: web, alt: 'web', link: '/', caption: 'Web Development', text: 'Blog, E-Commerce', w: "62.48px", h: "50.39px" },
        { src: uiux, alt: 'uiux', link: '/', caption: 'UI/UX Design', text: 'Mobile App, Website Design', w: "64.5px", h: "63.37px" },
        { src: sound, alt: 'sound', link: '/', caption: 'Sound Design', text: 'Voice Over, Beat Making', w: "70.19px", h: "70.19px" },
        { src: game, alt: 'game', link: '/', caption: 'Game Design', text: 'Character Design, Props & Objects', w: "70.19px", h: "65.8px" },
        { src: photography, alt: 'photography', link: '/', caption: 'Photography', text: 'Portrait, Product Photography', w: "65.75px", h: "73.99" },
        { src: advertisign, alt: 'advertisign', link: '/', caption: 'Advertising', text: 'Lorem Ipsum Dolor Sit Amet', w: "70.19px", h: "65.8px" },
    ];
    return (
        <div className='grid grid-cols-1 justify-items-center font-inter mt-[130.81px] font-normal text-[14.23px] text-third'>
            <h2 className='text-primary dark:text-white  font-bold text-[30.35px]'>My Services</h2>
            <p className='mt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>Do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Lorem ipsum</p>
            <div>
                <ServiceItems items={items} />
            </div>
        </div>
    )
}

export default MyServices