import React from 'react'

import blog1 from "/img/blog1.png"
import blog2 from "/img/blog2.png"
import blog3 from "/img/blog3.png"

const BlogItems = () => {

    const items = [
        { src: blog1, caption: "How to make web tempates", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ", link: "/" },
        { src: blog2, caption: "make Business card", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ", link: "/" },
        { src: blog3, caption: "How to make Flyer Design", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ", link: "/" },

    ]

    return (
        <div className='grid grid-cols-3 gap-x-[18.97px] mt-[47.43px]'>
            {items.map((item, index) => (
                <div key={index} className='font-inter font-medium text-[17.07px] text-primary'>
                    <img src={item.src} className='w-[294.04px] h-[284.56px]' />
                    <div className='bg-white w-[294.04px] p-[23.71px] font-inter font-medium text-primary text-[17.07px]'>
                        <h2 className='capitalize'>{item.caption}</h2>
                        <p className='w-[254.21px] mt-[7.46px] font-normal text-[14.23px] text-third'>{item.text}</p>
                        <div className='mt-[8.94px] text-secondary'>
                            <button className='flex items-center'>Learn more <img src="/img/miniarrow.svg" alt={item.link} className='ml-1.5 mt-1' /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogItems