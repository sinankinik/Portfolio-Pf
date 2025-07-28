import React from 'react'
import PortfolioMenuItems from './PortfolioMenuItems'
import PortfolioImages from './PortfolioImages'

const Portfolio = () => {
    return (
        <div className='grid grid-cols-1 justify-items-start md:justify-items-center font-inter font-normal text-[14.23px] text-third mb-[66.4px]'>
            <h2 className='text-primary dark:text-white  font-bold text-[30.35px]'>Portfolio</h2>
            <p className='mt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>Do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Lorem ipsum</p>
            <PortfolioMenuItems />
            <PortfolioImages />
        </div>
    )
}

export default Portfolio