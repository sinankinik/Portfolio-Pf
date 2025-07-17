import React from 'react'

import jamespp from "/img/jamespp.png"
import tianapp from "/img/tianapp.png"
import talanpp from "/img/talanpp.png"

const RecommendationsItems = () => {

    const items = [
        { src: jamespp, alt: 'Profile Picture', name: "James Gouse", title: "Graphic Designer", caption: 'Great Quality!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....' },
        { src: tianapp, alt: 'Profile Picture', name: "Tiana Philips", title: "Photographer", caption: 'Amazing work!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....' },
        { src: talanpp, alt: 'Profile Picture', name: "Talan Westervelt", title: "Business man", caption: 'Great Quality!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....' },
    ];

    return (
        <div className="grid grid-cols-3 gap-x-[19.92px]">
            {items.map((item, index) => (
                <div className='bg-white w-[294.04px] h-[306.38px] font-inter font-normal text-third text-[14.23px] p-[23.71px] mt-[47.43px]'>
                    <div key={index}>
                        <img src="/img/stars.svg" />
                        <h3 className='mt-[15.71px] mb-[16.94px] font-medium text-primary text-[17.07px]'>{item.caption}</h3>
                        <p className='capitalize'>{item.text}</p>
                        <div className='flex items-center mt-[28.46px]'>
                            <img src={item.src} alt={item.alt} className='mr-[12.33px]' />
                            <div>
                                <h3 className='text-primary font-medium text-[17.07px]'>{item.name}</h3>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecommendationsItems