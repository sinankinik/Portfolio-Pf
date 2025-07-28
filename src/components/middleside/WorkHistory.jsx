import React from 'react'
import WorkHistoryItems from './WorkHistoryItems'

const WorkHistory = () => {
    return (
        <div className='md:grid hidden grid-cols-1 justify-items-start md:justify-items-center font-inter font-normal text-[14.23px] text-third mb-[66.4px]'>
            <h2 className='text-primary dark:text-white  font-bold text-[30.35px]'>Work History</h2>
            <p className='mt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>Do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Lorem ipsum</p>
            <WorkHistoryItems />
        </div>
    )
}

export default WorkHistory