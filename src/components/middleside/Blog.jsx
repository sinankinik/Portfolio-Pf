import React from 'react'
import BlogItems from './BlogItems'


const Blog = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center font-inter font-normal text-[14.23px] text-third mb-[66.4px]'>
            <h2 className='text-primary font-bold text-[30.35px]'>Blog</h2>
            <p className='mt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>Do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Lorem ipsum</p>
            <BlogItems />
        </div>
    )
}

export default Blog