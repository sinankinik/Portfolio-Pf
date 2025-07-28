import React from 'react'

const ServiceItems = ({ items }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18.97px] mt-[47.43px]'>
            {items.map((item, index) => (
                <div key={index} className='flex flex-col items-center bg-white dark:bg-darkprimary pt-[33.61px] w-[294.04px] h-[213.42px] font-inter'>
                    <img src={item.src} alt={item.alt} className={`w-${item.w} h-${item.h}`} />
                    <h2 className='text-primary dark:text-white  font-medium text-[17.07px] mt-[24.66px] mb-1.5'>{item.caption}</h2>
                    <p className='text-third font-normal text-[14.23px]'>{item.text}</p>
                </div>
            ))}

        </div>
    )
}

export default ServiceItems