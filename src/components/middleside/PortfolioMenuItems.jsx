import React from 'react'

const PortfolioMenuItems = () => {

    const items = [
        "All categories", "UI Design", "Web Templates", "Logo", "Branding"
    ]

    return (
        <div className='grid grid-cols-2 md:grid-cols-5 mt-[47.43px] mb-[47.29px]'>
            {items.map((item, index) => (
                <div key={index} className='font-inter font-medium text-[17.07px] text-primary dark:text-white  mr-[34.87px]'>
                    <ul className='cursor-pointer'>{item}</ul>
                </div>
            ))}
        </div>
    )
}

export default PortfolioMenuItems