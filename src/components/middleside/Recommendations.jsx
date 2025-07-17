import React from 'react'
import RecommendationsItems from './RecommendationsItems'

const Recommendations = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center font-inter font-normal text-[14.23px] text-third'>
            <h2 className='text-primary font-bold text-[30.35px]'>Recommendations</h2>
            <p className='mt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>Do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Lorem ipsum</p>
            <RecommendationsItems />
            <img src="/img/points.svg" className='mt-[47.43px] mb-[66.4px]' />
        </div>
    )
}

export default Recommendations