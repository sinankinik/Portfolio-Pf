import React from 'react'

import pf1 from "/img/pf1.png"
import pf2 from "/img/pf2.png"
import pf3 from "/img/pf3.png"
import pf4 from "/img/pf4.png"
import pf5 from "/img/pf5.png"
import pf6 from "/img/pf6.png"
import pf7 from "/img/pf7.png"
import pf8 from "/img/pf8.png"
import pf9 from "/img/pf9.png"

const PortfolioImages = () => {

    const items = [
        { src: pf1, alt: 'pf1', },
        { src: pf2, alt: 'pf2', },
        { src: pf3, alt: 'pf3', },
        { src: pf4, alt: 'pf4', },
        { src: pf5, alt: 'pf5', },
        { src: pf6, alt: 'pf6', },
        { src: pf7, alt: 'pf7', },
        { src: pf8, alt: 'pf8', },
        { src: pf9, alt: 'pf9', },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[18.97px]'>
            {items.map((item, index) => (
                <div key={index} className='font-inter font-medium text-[17.07px] text-primary dark:text-white '>
                    <img src={item.src} alt={item.alt} className='w-[294.04px] h-[284.56px]' />
                </div>
            ))}
        </div>
    )
}

export default PortfolioImages