import React from 'react'

import reflogo1 from "/img/reflogo1.svg"
import reflogo2 from "/img/reflogo2.svg"
import reflogo3 from "/img/reflogo3.svg"
import reflogo4 from "/img/reflogo4.svg"

const Refs = () => {

    const items = [
        { src: reflogo1, alt: "reflogo1", },
        { src: reflogo2, alt: "reflogo2", },
        { src: reflogo3, alt: "reflogo3", },
        { src: reflogo4, alt: "reflogo4", },

    ]
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center w-[350px] sm:w-[610px] md:w-[920.07px] ml-[28.46px] mb-[66.4px]'>
            {items.map((item, index) => (
                <img src={item.src} alt={item.alt} key={index} />
            ))}
        </div>
    )
}

export default Refs