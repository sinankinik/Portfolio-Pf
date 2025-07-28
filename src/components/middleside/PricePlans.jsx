import React from 'react'
import PricePlansList from './PricePlansList'
import OrderNowButton from './OrderNowButton'

const PricePlans = () => {

    return (
        <div className='grid grid-cols-1 justify-items-start md:justify-items-center font-inter mt-[66.4px] font-normal text-[14.23px] text-third mb-[66.4px]'>
            <h2 className='text-primary dark:text-white  font-bold text-[30.35px]'>Price Plans</h2>
            <p className='mt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>Do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Lorem ipsum</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[19.92px]'>
                <div className='bg-white dark:bg-darkprimary w-[294.04px] h-[577.65px] font-inter font-normal text-third text-[14.23px] pt-[51.22px] mt-[47.43px]'>
                    <h2 className='font-semibold text-primary dark:text-white  ml-[115.72px]'>Silver</h2>
                    <div className='flex items-center text-primary dark:text-white '>
                        <h3 className='font-bold text-[30.35px] ml-[77.78px]'>$0.00 </h3>
                        <h3>/Hour</h3>
                    </div>
                    <p className='ml-[29.24px]'>For Most Businesses That Want To</p>
                    <p className='ml-16'>Optimize Web Queries</p>
                    <PricePlansList limit={2} />
                    <div className='flex justify-center mt-5'>
                        <OrderNowButton color={"white"} />
                    </div>
                </div>
                <div className='bg-white dark:bg-darkprimary w-[294.04px] h-[577.65px] font-inter font-normal text-third text-[14.23px] mt-[47.43px]'>
                    <div className='bg-secondary dark:bg-darksecondary  flex items-center justify-center w-full h-[28.46px] mb-[22.76px]'>
                        <h2 className='text-primary dark:text-white '>Most Popular</h2>
                    </div>
                    <h2 className='font-semibold text-primary dark:text-white  ml-[115.72px]'>Gold</h2>
                    <div className='flex items-center text-primary dark:text-white '>
                        <h3 className='font-bold text-[30.35px] ml-[77.78px]'>$50.00 </h3>
                        <h3>/Hour</h3>
                    </div>
                    <p className='ml-[29.24px]'>For Most Businesses That Want To</p>
                    <p className='ml-16'>Optimize Web Queries</p>
                    <PricePlansList limit={4} />
                    <div className='flex justify-center mt-5'>
                        <OrderNowButton color={"secondary"} />
                    </div>
                </div>
                <div className='bg-white dark:bg-darkprimary w-[294.04px] h-[577.65px] font-inter font-normal text-third text-[14.23px] pt-[51.22px] mt-[47.43px]'>
                    <h2 className='font-semibold text-primary dark:text-white  ml-[115.72px]'>Diamond</h2>
                    <div className='flex items-center text-primary dark:text-white '>
                        <h3 className='font-bold text-[30.35px] ml-[77.78px]'>$80.00 </h3>
                        <h3>/Hour</h3>
                    </div>
                    <p className='ml-[29.24px]'>For Most Businesses That Want To</p>
                    <p className='ml-16'>Optimize Web Queries</p>
                    <PricePlansList limit={8} />
                    <div className='flex justify-center mt-5'>
                        <OrderNowButton color={"white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricePlans